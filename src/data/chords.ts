import type { ChordDefinition } from '../types'

// Common chord definitions for the chord dictionary
export const chordDictionary: Record<string, ChordDefinition> = {
    'C': {
        name: 'C Major',
        symbol: 'C',
        keys: ['C4', 'E4', 'G4'],
        fingers: [1, 3, 5],
        type: 'major',
        difficulty: 'easy'
    },
    'Cm': {
        name: 'C Minor',
        symbol: 'Cm',
        keys: ['C4', 'D#4', 'G4'],
        fingers: [1, 2, 5],
        type: 'minor',
        difficulty: 'easy'
    },
    'G': {
        name: 'G Major',
        symbol: 'G',
        keys: ['G3', 'B3', 'D4'],
        fingers: [1, 3, 5],
        type: 'major',
        difficulty: 'easy'
    },
    'Am': {
        name: 'A Minor',
        symbol: 'Am',
        keys: ['A3', 'C4', 'E4'],
        fingers: [1, 3, 5],
        type: 'minor',
        difficulty: 'easy'
    },
    'F': {
        name: 'F Major',
        symbol: 'F',
        keys: ['F3', 'A3', 'C4'],
        fingers: [1, 3, 5],
        type: 'major',
        difficulty: 'easy'
    },
    'Dm': {
        name: 'D Minor',
        symbol: 'Dm',
        keys: ['D4', 'F4', 'A4'],
        fingers: [1, 3, 5],
        type: 'minor',
        difficulty: 'easy'
    },
    'Em': {
        name: 'E Minor',
        symbol: 'Em',
        keys: ['E4', 'G4', 'B4'],
        fingers: [1, 3, 5],
        type: 'minor',
        difficulty: 'easy'
    },
    'D': {
        name: 'D Major',
        symbol: 'D',
        keys: ['D4', 'F#4', 'A4'],
        fingers: [1, 3, 5],
        type: 'major',
        difficulty: 'easy'
    },
    'G7': {
        name: 'G Seventh',
        symbol: 'G7',
        keys: ['G3', 'B3', 'D4', 'F4'],
        fingers: [1, 2, 3, 5],
        type: 'seventh',
        difficulty: 'medium'
    },
    'C7': {
        name: 'C Seventh',
        symbol: 'C7',
        keys: ['C4', 'E4', 'G4', 'A#4'],
        fingers: [1, 2, 3, 5],
        type: 'seventh',
        difficulty: 'medium'
    },
    'Am7': {
        name: 'A Minor Seventh',
        symbol: 'Am7',
        keys: ['A3', 'C4', 'E4', 'G4'],
        fingers: [1, 2, 3, 5],
        type: 'seventh',
        difficulty: 'medium'
    },
    'Fmaj7': {
        name: 'F Major Seventh',
        symbol: 'Fmaj7',
        keys: ['F3', 'A3', 'C4', 'E4'],
        fingers: [1, 2, 3, 5],
        type: 'seventh',
        difficulty: 'medium'
    }
}

// Helper function to get chord by symbol
export function getChord(symbol: string): ChordDefinition | undefined {
    return chordDictionary[symbol]
}

// Get all chords of a specific difficulty
export function getChordsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): ChordDefinition[] {
    return Object.values(chordDictionary).filter(chord => chord.difficulty === difficulty)
}

