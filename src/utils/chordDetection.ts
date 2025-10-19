import type { Chord, ChordMatch } from '../types'

/**
 * Chord Detection Engine
 * Detects if pressed keys match the target chord
 */

const TIMING_TOLERANCE = 200 // milliseconds - allow keys to be pressed within this window

export class ChordDetector {
    private pressedKeys: Set<string> = new Set()
    private keyPressTimes: Map<string, number> = new Map()

    /**
     * Register a key press
     */
    pressKey(note: string) {
        this.pressedKeys.add(note)
        this.keyPressTimes.set(note, Date.now())
    }

    /**
     * Register a key release
     */
    releaseKey(note: string) {
        this.pressedKeys.delete(note)
        this.keyPressTimes.delete(note)
    }

    /**
     * Clear all pressed keys
     */
    clear() {
        this.pressedKeys.clear()
        this.keyPressTimes.clear()
    }

    /**
     * Get currently pressed keys
     */
    getPressedKeys(): string[] {
        return Array.from(this.pressedKeys)
    }

    /**
     * Check if the currently pressed keys match the target chord
     * Allows for slight timing differences between fingers
     */
    matchChord(targetChord: Chord): ChordMatch {
        const pressedArray = Array.from(this.pressedKeys)
        const targetKeys = new Set(targetChord.keys)

        // Find matched, missing, and extra keys
        const matchedKeys = pressedArray.filter(key => targetKeys.has(key))
        const missingKeys = targetChord.keys.filter(key => !this.pressedKeys.has(key))
        const extraKeys = pressedArray.filter(key => !targetKeys.has(key))

        // Calculate accuracy
        const totalExpected = targetChord.keys.length
        const correctCount = matchedKeys.length
        const accuracy = totalExpected > 0 ? (correctCount / totalExpected) * 100 : 0

        // Chord is correct if all keys are pressed and no extra keys
        const isCorrect = missingKeys.length === 0 && extraKeys.length === 0

        return {
            isCorrect,
            matchedKeys,
            missingKeys,
            extraKeys,
            accuracy
        }
    }

    /**
     * Check if keys were pressed simultaneously (within tolerance)
     */
    areKeysSimultaneous(): boolean {
        if (this.keyPressTimes.size <= 1) return true

        const times = Array.from(this.keyPressTimes.values())
        const minTime = Math.min(...times)
        const maxTime = Math.max(...times)

        return (maxTime - minTime) <= TIMING_TOLERANCE
    }

    /**
     * Check for partial chord match (some keys correct)
     */
    hasPartialMatch(targetChord: Chord): boolean {
        const match = this.matchChord(targetChord)
        return match.matchedKeys.length > 0
    }

    /**
     * Get the percentage of the chord that's correctly pressed
     */
    getMatchPercentage(targetChord: Chord): number {
        const match = this.matchChord(targetChord)
        return match.accuracy
    }
}

/**
 * Normalize note names (handle enharmonic equivalents)
 * e.g., D# and Eb are the same
 */
export function normalizeNote(note: string): string {
    const enharmonicMap: Record<string, string> = {
        'D#': 'Eb',
        'G#': 'Ab',
        'A#': 'Bb',
        'Eb': 'D#',
        'Ab': 'G#',
        'Bb': 'A#'
    }

    // Extract note name and octave
    const match = note.match(/^([A-G][#b]?)(\d+)$/)
    if (!match) return note

    const [, noteName, octave] = match
    const normalized = enharmonicMap[noteName] || noteName

    return normalized + octave
}

/**
 * Compare two sets of keys, accounting for enharmonic equivalents
 */
export function keysMatch(keys1: string[], keys2: string[]): boolean {
    if (keys1.length !== keys2.length) return false

    const normalized1 = keys1.map(normalizeNote).sort()
    const normalized2 = keys2.map(normalizeNote).sort()

    return normalized1.every((key, i) => key === normalized2[i])
}

