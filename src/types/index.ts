// Chord-based system types

export interface Chord {
  time: number // When the chord should be played (in seconds)
  duration: number // Default duration for all notes (in seconds)
  chordName: string // Display name (C, Am, G7, etc.)
  keys: string[] // Piano keys to press (e.g., ["C4", "E4", "G4"])
  hand: 'left' | 'right' | 'both'
  color: string // Color for visual distinction
  fingers?: number[] // Optional finger numbers (1-5)

  // NEW: Optional per-note durations (overrides default duration)
  noteDurations?: number[] // Array matching keys.length - individual sustain times

  // NEW: Optional per-note timing offsets for rolled chords
  noteOffsets?: number[] // Delay each note (e.g., [0, 0.05, 0.1] for arpeggio)
}

export interface Song {
  id: string
  title: string
  artist: string
  tempo: number // BPM
  duration: number // Total song length in seconds
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  chords: Chord[] // Chord progression
  sections?: SongSection[] // Optional verse/chorus markers
}

export interface SongSection {
  name: string // "Intro", "Verse 1", "Chorus", etc.
  startTime: number
  endTime: number
}

export type PlayMode = 'free' | 'auto' | 'practice' | 'wait'

export type HandMode = 'both' | 'left' | 'right'

export interface PianoKey {
  note: string
  octave: number
  type: 'white' | 'black'
  keyboardKey?: string
  frequency: number
}

export interface ChordMatch {
  isCorrect: boolean
  matchedKeys: string[]
  missingKeys: string[]
  extraKeys: string[]
  accuracy: number // 0-100
}

// Chord dictionary entry
export interface ChordDefinition {
  name: string // "C Major", "A Minor", "G7", etc.
  symbol: string // "C", "Am", "G7"
  keys: string[] // ["C4", "E4", "G4"]
  fingers?: number[] // [1, 3, 5]
  type: 'major' | 'minor' | 'seventh' | 'diminished' | 'augmented'
  difficulty: 'easy' | 'medium' | 'hard'
}
