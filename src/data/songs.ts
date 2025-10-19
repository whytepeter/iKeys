import type { Song } from '../types'

// Chord colors for visual distinction
const chordColors = {
  'C': '#4A90E2',  // Blue
  'G': '#50C878',  // Green
  'Am': '#F5A623', // Orange
  'F': '#D97757',  // Coral
  'Em': '#9B59B6', // Purple
  'Dm': '#E74C3C', // Red
  'D': '#3498DB',  // Light Blue
  'G7': '#16A085', // Teal
  'C7': '#2980B9', // Dark Blue
  'Am7': '#E67E22', // Dark Orange
  'Fmaj7': '#C0392B', // Dark Red
}

export const songs: Song[] = [

  {
    id: "all-of-me-john-legend",
    title: "All of Me",
    artist: "John Legend",
    tempo: 120,
    duration: 270,
    difficulty: "intermediate",

    sections: [
      { name: "Intro", startTime: 0, endTime: 8 },
      { name: "Verse 1", startTime: 8, endTime: 24 },
      { name: "Pre-Chorus", startTime: 24, endTime: 32 },
      { name: "Chorus", startTime: 32, endTime: 48 },
      { name: "Verse 2", startTime: 48, endTime: 64 },
      { name: "Pre-Chorus 2", startTime: 64, endTime: 72 },
      { name: "Chorus 2", startTime: 72, endTime: 88 },
      { name: "Bridge", startTime: 88, endTime: 104 },
      { name: "Final Chorus", startTime: 104, endTime: 128 },
      { name: "Outro", startTime: 128, endTime: 144 }
    ],

    chords: [
      // === INTRO - Gentle piano entrance with arpeggios ===
      {
        time: 0,
        duration: 2,
        chordName: "C (arp)",
        keys: ["C3", "E4", "G4", "C5"],
        hand: "both",
        color: "#3B82F6",
        noteOffsets: [0, 0.15, 0.3, 0.45], // Rolled upward
        noteDurations: [2, 1.8, 1.6, 1.4]
      },
      {
        time: 0.8,
        duration: 0.4,
        chordName: "C melody",
        keys: ["E4"],
        hand: "right",
        color: "#3B82F6"
      },
      {
        time: 2,
        duration: 2,
        chordName: "G (arp)",
        keys: ["G3", "B4", "D5"],
        hand: "both",
        color: "#10B981",
        noteOffsets: [0, 0.12, 0.24],
        noteDurations: [2, 1.7, 1.5]
      },
      {
        time: 2.6,
        duration: 0.3,
        chordName: "G melody",
        keys: ["G4"],
        hand: "right",
        color: "#10B981"
      },
      {
        time: 4,
        duration: 2,
        chordName: "Am (arp)",
        keys: ["A3", "C5", "E4"],
        hand: "both",
        color: "#F59E0B",
        noteOffsets: [0, 0.1, 0.2],
        noteDurations: [2, 1.8, 1.6]
      },
      {
        time: 4.5,
        duration: 0.35,
        chordName: "Am melody",
        keys: ["A4"],
        hand: "right",
        color: "#F59E0B"
      },
      {
        time: 6,
        duration: 2,
        chordName: "F (arp)",
        keys: ["F3", "A4", "C5"],
        hand: "both",
        color: "#EF4444",
        noteOffsets: [0, 0.15, 0.3],
        noteDurations: [2, 1.7, 1.5]
      },
      {
        time: 6.7,
        duration: 0.3,
        chordName: "F melody",
        keys: ["F4"],
        hand: "right",
        color: "#EF4444"
      },

      // === VERSE 1 - "What would I do without your smart mouth..." ===
      {
        time: 8,
        duration: 1.5,
        chordName: "C",
        keys: ["C3", "E4", "G4"],
        hand: "both",
        color: "#3B82F6",
        noteDurations: [1.5, 1.2, 1.2]
      },
      {
        time: 8.3,
        duration: 0.6,
        chordName: "melody",
        keys: ["G4", "A4"],
        hand: "right",
        color: "#3B82F6",
        noteOffsets: [0, 0.25]
      },
      {
        time: 9.5,
        duration: 0.5,
        chordName: "passing",
        keys: ["C5"],
        hand: "right",
        color: "#3B82F6"
      },
      {
        time: 10,
        duration: 1.5,
        chordName: "G/B",
        keys: ["B3", "D4", "G4"],
        hand: "both",
        color: "#10B981",
        noteDurations: [1.5, 1.3, 1.3]
      },
      {
        time: 10.5,
        duration: 0.4,
        chordName: "melody",
        keys: ["B4"],
        hand: "right",
        color: "#10B981"
      },
      {
        time: 11.5,
        duration: 0.5,
        chordName: "grace",
        keys: ["D5"],
        hand: "right",
        color: "#10B981"
      },
      {
        time: 12,
        duration: 1.8,
        chordName: "Am",
        keys: ["A3", "C5", "E4"],
        hand: "both",
        color: "#F59E0B",
        noteOffsets: [0, 0.08, 0.05],
        noteDurations: [1.8, 1.5, 1.5]
      },
      {
        time: 12.6,
        duration: 0.7,
        chordName: "melody",
        keys: ["A4", "C5"],
        hand: "right",
        color: "#F59E0B",
        noteOffsets: [0, 0.2]
      },
      {
        time: 14,
        duration: 2,
        chordName: "F",
        keys: ["F3", "A4", "C5"],
        hand: "both",
        color: "#EF4444",
        noteDurations: [2, 1.7, 1.7]
      },
      {
        time: 14.5,
        duration: 0.3,
        chordName: "melody fill",
        keys: ["F4"],
        hand: "right",
        color: "#EF4444"
      },

      // Continue verse with variations
      {
        time: 16,
        duration: 1.5,
        chordName: "C",
        keys: ["C3", "E4", "G4"],
        hand: "both",
        color: "#3B82F6",
        noteOffsets: [0, 0.05, 0.1]
      },
      {
        time: 16.4,
        duration: 0.5,
        chordName: "melody",
        keys: ["C5", "D5"],
        hand: "right",
        color: "#3B82F6",
        noteOffsets: [0, 0.15]
      },
      {
        time: 17.5,
        duration: 0.4,
        chordName: "run",
        keys: ["E4"],
        hand: "right",
        color: "#3B82F6"
      },
      {
        time: 18,
        duration: 1.8,
        chordName: "G/B",
        keys: ["B3", "D4", "G4", "B4"],
        hand: "both",
        color: "#10B981",
        noteDurations: [1.8, 1.5, 1.5, 1.2]
      },
      {
        time: 19.5,
        duration: 0.3,
        chordName: "embellish",
        keys: ["A4"],
        hand: "right",
        color: "#10B981"
      },
      {
        time: 20,
        duration: 1.7,
        chordName: "Am",
        keys: ["A3", "E4", "A4", "C5"],
        hand: "both",
        color: "#F59E0B",
        noteOffsets: [0, 0.1, 0.15, 0.2]
      },
      {
        time: 21.2,
        duration: 0.5,
        chordName: "melody",
        keys: ["B4"],
        hand: "right",
        color: "#F59E0B"
      },
      {
        time: 22,
        duration: 2,
        chordName: "F",
        keys: ["F3", "C5", "F4", "A4"],
        hand: "both",
        color: "#EF4444",
        noteDurations: [2, 1.8, 1.6, 1.6]
      },

      // === PRE-CHORUS - "How many times do I have to tell you..." ===
      {
        time: 24,
        duration: 1.5,
        chordName: "Dm",
        keys: ["D3", "F4", "A4"],
        hand: "both",
        color: "#8B5CF6",
        noteOffsets: [0, 0.08, 0.12]
      },
      {
        time: 24.8,
        duration: 0.4,
        chordName: "melody",
        keys: ["D5"],
        hand: "right",
        color: "#8B5CF6"
      },
      {
        time: 25.5,
        duration: 0.5,
        chordName: "passing",
        keys: ["C5"],
        hand: "right",
        color: "#8B5CF6"
      },
      {
        time: 26,
        duration: 2,
        chordName: "F",
        keys: ["F3", "A4", "C5"],
        hand: "both",
        color: "#EF4444",
        noteDurations: [2, 1.7, 1.7]
      },
      {
        time: 26.6,
        duration: 0.6,
        chordName: "melody run",
        keys: ["A4", "G4"],
        hand: "right",
        color: "#EF4444",
        noteOffsets: [0, 0.25]
      },
      {
        time: 28,
        duration: 2,
        chordName: "G",
        keys: ["G3", "B4", "D5"],
        hand: "both",
        color: "#10B981",
        noteOffsets: [0, 0.1, 0.2],
        noteDurations: [2, 1.8, 1.6]
      },
      {
        time: 29,
        duration: 0.5,
        chordName: "anticipation",
        keys: ["G4", "A4"],
        hand: "right",
        color: "#10B981",
        noteOffsets: [0, 0.15]
      },
      {
        time: 30,
        duration: 2,
        chordName: "G build",
        keys: ["G3", "D4", "G4", "B4"],
        hand: "both",
        color: "#10B981",
        noteDurations: [2, 1.8, 1.6, 1.4]
      },

      // === CHORUS - "Cause all of me loves all of you..." ===
      // More sustained, emotional playing
      {
        time: 32,
        duration: 2,
        chordName: "C (full)",
        keys: ["C3", "G4", "C4", "E4"],
        hand: "both",
        color: "#3B82F6",
        noteOffsets: [0, 0.05, 0.1, 0.15],
        noteDurations: [2, 2, 1.8, 1.8]
      },
      {
        time: 32.8,
        duration: 0.8,
        chordName: "melody",
        keys: ["G4", "A4", "C5"],
        hand: "right",
        color: "#3B82F6",
        noteOffsets: [0, 0.2, 0.4]
      },
      {
        time: 34,
        duration: 2,
        chordName: "G",
        keys: ["G3", "D4", "G4", "B4"],
        hand: "both",
        color: "#10B981",
        noteDurations: [2, 1.9, 1.8, 1.7]
      },
      {
        time: 35,
        duration: 0.6,
        chordName: "melody",
        keys: ["D5"],
        hand: "right",
        color: "#10B981"
      },
      {
        time: 36,
        duration: 2,
        chordName: "Am (rich)",
        keys: ["A3", "E4", "A4", "C5"],
        hand: "both",
        color: "#F59E0B",
        noteOffsets: [0, 0.08, 0.12, 0.18],
        noteDurations: [2, 1.9, 1.8, 1.7]
      },
      {
        time: 37,
        duration: 0.5,
        chordName: "melody",
        keys: ["E4", "A4"],
        hand: "right",
        color: "#F59E0B",
        noteOffsets: [0, 0.15]
      },
      {
        time: 38,
        duration: 2,
        chordName: "F",
        keys: ["F3", "C5", "F4", "A4"],
        hand: "both",
        color: "#EF4444",
        noteDurations: [2, 1.9, 1.8, 1.8]
      },
      {
        time: 38.7,
        duration: 0.7,
        chordName: "run",
        keys: ["G4", "A4"],
        hand: "right",
        color: "#EF4444",
        noteOffsets: [0, 0.2]
      },
      {
        time: 40,
        duration: 1.8,
        chordName: "C",
        keys: ["C3", "E4", "G4", "C5"],
        hand: "both",
        color: "#3B82F6",
        noteOffsets: [0, 0.1, 0.15, 0.2]
      },
      {
        time: 41,
        duration: 0.6,
        chordName: "embellish",
        keys: ["D5", "E4"],
        hand: "right",
        color: "#3B82F6",
        noteOffsets: [0, 0.2]
      },
      {
        time: 42,
        duration: 2,
        chordName: "G",
        keys: ["G3", "B4", "D5"],
        hand: "both",
        color: "#10B981",
        noteDurations: [2, 1.8, 1.7]
      },
      {
        time: 43,
        duration: 0.5,
        chordName: "melody",
        keys: ["G4"],
        hand: "right",
        color: "#10B981"
      },
      {
        time: 44,
        duration: 2,
        chordName: "Am",
        keys: ["A3", "C5", "E4", "A4"],
        hand: "both",
        color: "#F59E0B",
        noteOffsets: [0, 0.05, 0.1, 0.15],
        noteDurations: [2, 1.9, 1.8, 1.8]
      },
      {
        time: 45.5,
        duration: 0.4,
        chordName: "grace",
        keys: ["B4"],
        hand: "right",
        color: "#F59E0B"
      },
      {
        time: 46,
        duration: 2,
        chordName: "F",
        keys: ["F3", "A4", "C5", "F4"],
        hand: "both",
        color: "#EF4444",
        noteDurations: [2, 1.9, 1.8, 1.8]
      },

      // === BRIDGE - "Cards on the table..." (Emotional peak) ===
      {
        time: 88,
        duration: 2,
        chordName: "Am (intense)",
        keys: ["A3", "E4", "A4", "C5", "E4"],
        hand: "both",
        color: "#F59E0B",
        noteOffsets: [0, 0.12, 0.18, 0.24, 0.30],
        noteDurations: [2, 1.9, 1.8, 1.7, 1.6]
      },
      {
        time: 89,
        duration: 0.7,
        chordName: "melody cry",
        keys: ["D5", "C5", "B4"],
        hand: "right",
        color: "#F59E0B",
        noteOffsets: [0, 0.15, 0.3]
      },
      {
        time: 90,
        duration: 2,
        chordName: "F (swell)",
        keys: ["F3", "C5", "F4", "A4"],
        hand: "both",
        color: "#EF4444",
        noteOffsets: [0, 0.1, 0.15, 0.2],
        noteDurations: [2, 2, 1.9, 1.8]
      },
      {
        time: 91.5,
        duration: 0.4,
        chordName: "accent",
        keys: ["G4"],
        hand: "right",
        color: "#EF4444"
      },
      {
        time: 92,
        duration: 1.8,
        chordName: "C (powerful)",
        keys: ["C3", "G4", "C4", "E4", "G4"],
        hand: "both",
        color: "#3B82F6",
        noteOffsets: [0, 0.08, 0.12, 0.16, 0.2],
        noteDurations: [1.8, 1.8, 1.7, 1.6, 1.5]
      },
      {
        time: 93.5,
        duration: 0.3,
        chordName: "fill",
        keys: ["A4"],
        hand: "right",
        color: "#3B82F6"
      },
      {
        time: 94,
        duration: 2,
        chordName: "G (build)",
        keys: ["G3", "D4", "G4", "B4", "D5"],
        hand: "both",
        color: "#10B981",
        noteOffsets: [0, 0.1, 0.15, 0.2, 0.25],
        noteDurations: [2, 1.9, 1.8, 1.7, 1.6]
      },
      {
        time: 96,
        duration: 1.9,
        chordName: "Am (rolling)",
        keys: ["A3", "E4", "A4", "C5"],
        hand: "both",
        color: "#F59E0B",
        noteOffsets: [0, 0.15, 0.25, 0.35],
        noteDurations: [1.9, 1.8, 1.7, 1.6]
      },
      {
        time: 97.5,
        duration: 0.4,
        chordName: "cry",
        keys: ["B4"],
        hand: "right",
        color: "#F59E0B"
      },
      {
        time: 98,
        duration: 2,
        chordName: "F (climax)",
        keys: ["F3", "C5", "F4", "A4"],
        hand: "both",
        color: "#EF4444",
        noteOffsets: [0, 0.1, 0.2, 0.3],
        noteDurations: [2, 2, 1.9, 1.8]
      },
      {
        time: 100,
        duration: 2,
        chordName: "C (release)",
        keys: ["C3", "E4", "G4", "C5"],
        hand: "both",
        color: "#3B82F6",
        noteDurations: [2, 1.9, 1.8, 1.7]
      },
      {
        time: 101,
        duration: 0.6,
        chordName: "descend",
        keys: ["D5", "C5"],
        hand: "right",
        color: "#3B82F6",
        noteOffsets: [0, 0.2]
      },
      {
        time: 102,
        duration: 2,
        chordName: "G (prepare)",
        keys: ["G3", "B4", "D5", "G4"],
        hand: "both",
        color: "#10B981",
        noteOffsets: [0, 0.12, 0.18, 0.24],
        noteDurations: [2, 1.9, 1.8, 1.7]
      },

      // === OUTRO - Gentle wind down ===
      {
        time: 128,
        duration: 3,
        chordName: "C (soft)",
        keys: ["C3", "E4", "G4", "C5"],
        hand: "both",
        color: "#3B82F6",
        noteOffsets: [0, 0.2, 0.35, 0.5],
        noteDurations: [3, 2.8, 2.6, 2.4]
      },
      {
        time: 129.5,
        duration: 1,
        chordName: "echo",
        keys: ["E4"],
        hand: "right",
        color: "#3B82F6"
      },
      {
        time: 131,
        duration: 3,
        chordName: "G (fade)",
        keys: ["G3", "D4", "G4", "B4"],
        hand: "both",
        color: "#10B981",
        noteOffsets: [0, 0.15, 0.3, 0.45],
        noteDurations: [3, 2.7, 2.5, 2.3]
      },
      {
        time: 134,
        duration: 3.5,
        chordName: "Am (whisper)",
        keys: ["A3", "C5", "E4"],
        hand: "both",
        color: "#F59E0B",
        noteOffsets: [0, 0.25, 0.4],
        noteDurations: [3.5, 3.2, 3]
      },
      {
        time: 137,
        duration: 4,
        chordName: "F (settle)",
        keys: ["F3", "A4", "C5"],
        hand: "both",
        color: "#EF4444",
        noteOffsets: [0, 0.3, 0.5],
        noteDurations: [4, 3.8, 3.6]
      },
      {
        time: 141,
        duration: 3,
        chordName: "C (final)",
        keys: ["C3", "C4", "E4", "G4"],
        hand: "both",
        color: "#3B82F6",
        noteOffsets: [0, 0.2, 0.4, 0.6],
        noteDurations: [3, 3, 2.8, 2.6]
      }
    ]
  },



  {
    id: 'let-it-be',
    title: 'Let It Be',
    artist: 'The Beatles',
    tempo: 72,
    duration: 32, // seconds
    difficulty: 'beginner',
    chords: [
      // Verse: "When I find myself in times of trouble"
      { time: 0, duration: 2, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 2, duration: 2, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 4, duration: 2, chordName: 'Am', keys: ['A3', 'C4', 'E4'], hand: 'right', color: chordColors['Am'], fingers: [1, 3, 5] },
      { time: 6, duration: 2, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },

      // "Mother Mary comes to me"
      { time: 8, duration: 2, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 10, duration: 2, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 12, duration: 2, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 14, duration: 2, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },

      // Chorus: "Let it be"
      { time: 16, duration: 2, chordName: 'Am', keys: ['A3', 'C4', 'E4'], hand: 'right', color: chordColors['Am'], fingers: [1, 3, 5] },
      { time: 18, duration: 2, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 20, duration: 2, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 22, duration: 2, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },

      // "Whisper words of wisdom"
      { time: 24, duration: 2, chordName: 'Am', keys: ['A3', 'C4', 'E4'], hand: 'right', color: chordColors['Am'], fingers: [1, 3, 5] },
      { time: 26, duration: 2, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 28, duration: 2, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 30, duration: 2, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
    ],
    sections: [
      { name: 'Verse', startTime: 0, endTime: 16 },
      { name: 'Chorus', startTime: 16, endTime: 32 }
    ]
  },

  {
    id: 'all-of-me',
    title: 'All of Me',
    artist: 'John Legend',
    tempo: 120,
    duration: 48,
    difficulty: 'beginner',
    chords: [
      // Intro - Verse 1: "What would I do without your smart mouth"
      // Left hand bass chord (sustain full)
      { time: 0, duration: 4, chordName: 'Em', keys: ['E3', 'G3', 'B3'], hand: 'left', color: chordColors['Em'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      // Right hand melody (staggered release)
      { time: 0, duration: 1, chordName: 'G', keys: ['G4', 'B4'], hand: 'right', color: chordColors['Em'], fingers: [1, 3], noteDurations: [0.8, 1.0], noteOffsets: [0, 0.05] },
      { time: 1, duration: 0.5, chordName: 'A', keys: ['A4'], hand: 'right', color: chordColors['Em'], fingers: [4] },
      { time: 1.5, duration: 0.5, chordName: 'B', keys: ['B4'], hand: 'right', color: chordColors['Em'], fingers: [5] },

      // Measure 2
      { time: 2, duration: 2, chordName: 'C', keys: ['C3', 'E3', 'G3'], hand: 'left', color: chordColors['C'], fingers: [5, 3, 1], noteDurations: [2, 2, 2] },
      { time: 2, duration: 1, chordName: 'C', keys: ['C5', 'E5'], hand: 'right', color: chordColors['C'], fingers: [1, 3], noteDurations: [0.8, 1.0], noteOffsets: [0, 0.05] },
      { time: 3, duration: 0.5, chordName: 'D', keys: ['D5'], hand: 'right', color: chordColors['C'], fingers: [4] },

      // Measure 3
      { time: 4, duration: 4, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'left', color: chordColors['G'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 4, duration: 1, chordName: 'G', keys: ['B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3], noteDurations: [0.8, 1.0], noteOffsets: [0, 0.05] },
      { time: 5, duration: 1, chordName: 'A', keys: ['A4'], hand: 'right', color: chordColors['G'], fingers: [2] },
      { time: 6, duration: 0.5, chordName: 'B', keys: ['B4'], hand: 'right', color: chordColors['G'], fingers: [3] },
      { time: 6.5, duration: 0.5, chordName: 'C', keys: ['C5'], hand: 'right', color: chordColors['G'], fingers: [4] },

      // Measure 4
      { time: 8, duration: 2, chordName: 'D', keys: ['D4', 'F#4', 'A4'], hand: 'left', color: chordColors['D'], fingers: [5, 3, 1], noteDurations: [2, 2, 2] },
      { time: 8, duration: 1.5, chordName: 'D', keys: ['D5'], hand: 'right', color: chordColors['D'], fingers: [1] },
      { time: 9.5, duration: 0.5, chordName: 'E', keys: ['E5'], hand: 'right', color: chordColors['D'], fingers: [2] },

      // Measure 5 - "Drawing me in"
      { time: 10, duration: 4, chordName: 'Em', keys: ['E3', 'G3', 'B3'], hand: 'left', color: chordColors['Em'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 10, duration: 1, chordName: 'E', keys: ['E5', 'G5'], hand: 'right', color: chordColors['Em'], fingers: [1, 3], noteDurations: [0.8, 1.0], noteOffsets: [0, 0.05] },
      { time: 11, duration: 0.5, chordName: 'D', keys: ['D5'], hand: 'right', color: chordColors['Em'], fingers: [2] },
      { time: 11.5, duration: 1, chordName: 'B', keys: ['B4'], hand: 'right', color: chordColors['Em'], fingers: [1] },

      // Measure 6
      { time: 12, duration: 2, chordName: 'C', keys: ['C3', 'E3', 'G3'], hand: 'left', color: chordColors['C'], fingers: [5, 3, 1], noteDurations: [2, 2, 2] },
      { time: 12, duration: 1.5, chordName: 'C', keys: ['C5'], hand: 'right', color: chordColors['C'], fingers: [1] },

      // Measure 7
      { time: 14, duration: 2, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'left', color: chordColors['G'], fingers: [5, 3, 1], noteDurations: [2, 2, 2] },
      { time: 14, duration: 2, chordName: 'B', keys: ['B4'], hand: 'right', color: chordColors['G'], fingers: [1] },

      // Pre-Chorus - Measure 8-9: "My head's under water"
      { time: 16, duration: 4, chordName: 'Am', keys: ['A3', 'C4', 'E4'], hand: 'left', color: chordColors['Am'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 16, duration: 1, chordName: 'A', keys: ['A4', 'C5'], hand: 'right', color: chordColors['Am'], fingers: [1, 3], noteDurations: [0.8, 1.0], noteOffsets: [0, 0.05] },
      { time: 17, duration: 1, chordName: 'B', keys: ['B4'], hand: 'right', color: chordColors['Am'], fingers: [2] },
      { time: 18, duration: 1, chordName: 'C', keys: ['C5'], hand: 'right', color: chordColors['Am'], fingers: [3] },

      { time: 20, duration: 4, chordName: 'C', keys: ['C3', 'E3', 'G3'], hand: 'left', color: chordColors['C'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 20, duration: 2, chordName: 'G', keys: ['G4'], hand: 'right', color: chordColors['C'], fingers: [1] },
      { time: 22, duration: 1, chordName: 'E', keys: ['E4'], hand: 'right', color: chordColors['C'], fingers: [1] },

      // Chorus - Measure 12: "'Cause all of me"
      { time: 24, duration: 4, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'left', color: chordColors['G'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 24, duration: 0.5, chordName: 'B', keys: ['B4'], hand: 'right', color: chordColors['G'], fingers: [1] },
      { time: 24.5, duration: 0.5, chordName: 'C', keys: ['C5'], hand: 'right', color: chordColors['G'], fingers: [2] },
      { time: 25, duration: 1, chordName: 'D', keys: ['D5'], hand: 'right', color: chordColors['G'], fingers: [3] },
      { time: 26, duration: 1, chordName: 'E', keys: ['E5'], hand: 'right', color: chordColors['G'], fingers: [4] },

      // Measure 13
      { time: 28, duration: 4, chordName: 'Em', keys: ['E3', 'G3', 'B3'], hand: 'left', color: chordColors['Em'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 28, duration: 2, chordName: 'G', keys: ['G5'], hand: 'right', color: chordColors['Em'], fingers: [5] },
      { time: 30, duration: 1, chordName: 'E', keys: ['E5'], hand: 'right', color: chordColors['Em'], fingers: [3] },
      { time: 31, duration: 0.5, chordName: 'D', keys: ['D5'], hand: 'right', color: chordColors['Em'], fingers: [2] },

      // Measure 14: "All your perfect imperfections"
      { time: 32, duration: 4, chordName: 'C', keys: ['C3', 'E3', 'G3'], hand: 'left', color: chordColors['C'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 32, duration: 1, chordName: 'C', keys: ['C5'], hand: 'right', color: chordColors['C'], fingers: [1] },
      { time: 33, duration: 0.5, chordName: 'B', keys: ['B4'], hand: 'right', color: chordColors['C'], fingers: [2] },
      { time: 33.5, duration: 0.5, chordName: 'A', keys: ['A4'], hand: 'right', color: chordColors['C'], fingers: [3] },
      { time: 34, duration: 1, chordName: 'G', keys: ['G4'], hand: 'right', color: chordColors['C'], fingers: [1] },

      // Measure 15
      { time: 36, duration: 4, chordName: 'D', keys: ['D4', 'F#4', 'A4'], hand: 'left', color: chordColors['D'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 36, duration: 2, chordName: 'A', keys: ['A4'], hand: 'right', color: chordColors['D'], fingers: [1] },
      { time: 38, duration: 1, chordName: 'F#', keys: ['F#4'], hand: 'right', color: chordColors['D'], fingers: [2] },

      // Ending - Measure 16
      { time: 40, duration: 4, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'left', color: chordColors['G'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 40, duration: 2, chordName: 'B', keys: ['B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3], noteDurations: [1.8, 2.0], noteOffsets: [0, 0.05] },

      { time: 44, duration: 4, chordName: 'Em', keys: ['E3', 'G3', 'B3'], hand: 'left', color: chordColors['Em'], fingers: [5, 3, 1], noteDurations: [4, 4, 4] },
      { time: 44, duration: 4, chordName: 'E', keys: ['E4', 'G4', 'B4'], hand: 'right', color: chordColors['Em'], fingers: [1, 3, 5], noteDurations: [3.5, 3.8, 4.0], noteOffsets: [0, 0.05, 0.1] },
    ],
    sections: [
      { name: 'Verse 1', startTime: 0, endTime: 16 },
      { name: 'Pre-Chorus', startTime: 16, endTime: 24 },
      { name: 'Chorus', startTime: 24, endTime: 40 },
      { name: 'Ending', startTime: 40, endTime: 48 }
    ]
  },

  {
    id: 'someone-like-you',
    title: 'Someone Like You',
    artist: 'Adele',
    tempo: 67,
    duration: 24,
    difficulty: 'beginner',
    chords: [
      // Verse
      { time: 0, duration: 3, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 3, duration: 3, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 6, duration: 3, chordName: 'Am', keys: ['A3', 'C4', 'E4'], hand: 'right', color: chordColors['Am'], fingers: [1, 3, 5] },
      { time: 9, duration: 3, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },

      { time: 12, duration: 3, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 15, duration: 3, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 18, duration: 3, chordName: 'Am', keys: ['A3', 'C4', 'E4'], hand: 'right', color: chordColors['Am'], fingers: [1, 3, 5] },
      { time: 21, duration: 3, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
    ],
    sections: [
      { name: 'Verse', startTime: 0, endTime: 24 }
    ]
  },

  {
    id: 'imagine',
    title: 'Imagine',
    artist: 'John Lennon',
    tempo: 76,
    duration: 20,
    difficulty: 'beginner',
    chords: [
      { time: 0, duration: 2.5, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 2.5, duration: 2.5, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 5, duration: 2.5, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 7.5, duration: 2.5, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },

      { time: 10, duration: 2.5, chordName: 'Am', keys: ['A3', 'C4', 'E4'], hand: 'right', color: chordColors['Am'], fingers: [1, 3, 5] },
      { time: 12.5, duration: 2.5, chordName: 'Dm', keys: ['D4', 'F4', 'A4'], hand: 'right', color: chordColors['Dm'], fingers: [1, 3, 5] },
      { time: 15, duration: 2.5, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 17.5, duration: 2.5, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
    ],
    sections: [
      { name: 'Verse', startTime: 0, endTime: 20 }
    ]
  },

  {
    id: 'perfect',
    title: 'Perfect',
    artist: 'Ed Sheeran',
    tempo: 63,
    duration: 24,
    difficulty: 'intermediate',
    chords: [
      { time: 0, duration: 3, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 3, duration: 3, chordName: 'Am7', keys: ['A3', 'C4', 'E4', 'G4'], hand: 'right', color: chordColors['Am7'], fingers: [1, 2, 3, 5] },
      { time: 6, duration: 3, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 9, duration: 3, chordName: 'G', keys: ['G3', 'B3', 'D4'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },

      { time: 12, duration: 3, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 15, duration: 3, chordName: 'Am7', keys: ['A3', 'C4', 'E4', 'G4'], hand: 'right', color: chordColors['Am7'], fingers: [1, 2, 3, 5] },
      { time: 18, duration: 3, chordName: 'F', keys: ['F3', 'A3', 'C4'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 21, duration: 3, chordName: 'G7', keys: ['G3', 'B3', 'D4', 'F4'], hand: 'right', color: chordColors['G7'], fingers: [1, 2, 3, 5] },
    ],
    sections: [
      { name: 'Chorus', startTime: 0, endTime: 24 }
    ]
  },

  // Example song demonstrating realistic piano playing with:
  // - Staggered note releases (noteDurations)
  // - Rolled/arpeggiated chords (noteOffsets)
  // - Mixed chords + melody notes
  // - Natural sustain patterns

  {
    id: 'piano-ballad-demo',
    title: 'Piano Ballad Demo',
    artist: 'iKeys Example',
    tempo: 70,
    duration: 32,
    difficulty: 'intermediate',

    chords: [
      // ============ BAR 1 (0-4s): C Major ============

      // Left hand: Bass chord (full sustain)
      {
        time: 0,
        duration: 4,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: '#4A90E2',
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4], // All notes hold full 4 seconds
      },

      // Right hand: Opening chord with rolled entry and staggered release
      {
        time: 0,
        duration: 1.5,
        chordName: 'C',
        keys: ['E4', 'G4', 'C5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.04, 0.08],      // Roll: E→G→C (40ms apart)
        noteDurations: [1.2, 1.4, 1.5],    // C5 holds longest
      },

      // Melody note 1
      {
        time: 1.5,
        duration: 0.5,
        chordName: 'D',
        keys: ['D5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [4],
      },

      // Melody note 2
      {
        time: 2,
        duration: 0.5,
        chordName: 'E',
        keys: ['E5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [5],
      },

      // Sustained melody note
      {
        time: 2.5,
        duration: 1.5,
        chordName: 'C',
        keys: ['C5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [3],
      },

      // ============ BAR 2 (4-8s): A Minor ============

      // Left hand: Am chord
      {
        time: 4,
        duration: 4,
        chordName: 'Am',
        keys: ['A3', 'C4', 'E4'],
        hand: 'left',
        color: '#F5A623',
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      // Right hand: Chord with early release on first two notes
      {
        time: 4,
        duration: 2,
        chordName: 'Am',
        keys: ['A4', 'C5', 'E5'],
        hand: 'right',
        color: '#F5A623',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [1.5, 1.7, 2.0],    // E5 sustains into next phrase
      },

      // Melody runs
      {
        time: 5.5,
        duration: 0.25,
        chordName: 'D',
        keys: ['D5'],
        hand: 'right',
        color: '#F5A623',
        fingers: [2],
      },

      {
        time: 5.75,
        duration: 0.25,
        chordName: 'C',
        keys: ['C5'],
        hand: 'right',
        color: '#F5A623',
        fingers: [1],
      },

      {
        time: 6,
        duration: 1,
        chordName: 'A',
        keys: ['A4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [1],
      },

      {
        time: 7,
        duration: 1,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [2],
      },

      // ============ BAR 3 (8-12s): F Major ============

      // Left hand: F chord
      {
        time: 8,
        duration: 4,
        chordName: 'F',
        keys: ['F3', 'A3', 'C4'],
        hand: 'left',
        color: '#D97757',
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      // Right hand: Broken chord pattern (arpeggiated)
      {
        time: 8,
        duration: 0.5,
        chordName: 'F',
        keys: ['F4'],
        hand: 'right',
        color: '#D97757',
        fingers: [1],
      },

      {
        time: 8.5,
        duration: 0.5,
        chordName: 'A',
        keys: ['A4'],
        hand: 'right',
        color: '#D97757',
        fingers: [3],
      },

      {
        time: 9,
        duration: 0.5,
        chordName: 'C',
        keys: ['C5'],
        hand: 'right',
        color: '#D97757',
        fingers: [5],
      },

      {
        time: 9.5,
        duration: 0.5,
        chordName: 'F',
        keys: ['F5'],
        hand: 'right',
        color: '#D97757',
        fingers: [5],
      },

      // Sustained chord with overlap
      {
        time: 10,
        duration: 2,
        chordName: 'F',
        keys: ['C5', 'F5', 'A5'],
        hand: 'right',
        color: '#D97757',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.02, 0.04],
        noteDurations: [1.8, 1.9, 2.0],
      },

      // ============ BAR 4 (12-16s): G Major (Transition) ============

      // Left hand: G chord
      {
        time: 12,
        duration: 4,
        chordName: 'G',
        keys: ['G3', 'B3', 'D4'],
        hand: 'left',
        color: '#50C878',
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      // Right hand: Chord with melody on top
      {
        time: 12,
        duration: 1,
        chordName: 'G',
        keys: ['G4', 'B4'],
        hand: 'right',
        color: '#50C878',
        fingers: [1, 3],
        noteDurations: [0.8, 1.0],  // B4 holds slightly longer
      },

      {
        time: 13,
        duration: 0.5,
        chordName: 'A',
        keys: ['A4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      {
        time: 13.5,
        duration: 0.5,
        chordName: 'B',
        keys: ['B4'],
        hand: 'right',
        color: '#50C878',
        fingers: [3],
      },

      // Climax chord - full sustain
      {
        time: 14,
        duration: 2,
        chordName: 'G',
        keys: ['D5', 'G5', 'B4'],
        hand: 'right',
        color: '#50C878',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.05, 0.1],       // Dramatic roll
        noteDurations: [2.0, 2.0, 2.0],    // All sustain fully
      },

      // ============ BAR 5 (16-20s): Return to C Major ============

      {
        time: 16,
        duration: 4,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: '#4A90E2',
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      // Right hand: Descending melody
      {
        time: 16,
        duration: 1,
        chordName: 'E',
        keys: ['E5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [5],
      },

      {
        time: 17,
        duration: 1,
        chordName: 'D',
        keys: ['D5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [4],
      },

      {
        time: 18,
        duration: 1,
        chordName: 'C',
        keys: ['C5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [3],
      },

      {
        time: 19,
        duration: 1,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1],
      },

      // ============ BAR 6-8 (20-32s): Final cadence ============

      // Am chord
      {
        time: 20,
        duration: 4,
        chordName: 'Am',
        keys: ['A3', 'C4', 'E4'],
        hand: 'left',
        color: '#F5A623',
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 20,
        duration: 2,
        chordName: 'Am',
        keys: ['E4', 'A4', 'C5'],
        hand: 'right',
        color: '#F5A623',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [1.8, 1.9, 2.0],
      },

      // F chord
      {
        time: 24,
        duration: 4,
        chordName: 'F',
        keys: ['F3', 'A3', 'C4'],
        hand: 'left',
        color: '#D97757',
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 24,
        duration: 2,
        chordName: 'F',
        keys: ['F4', 'A4', 'C5'],
        hand: 'right',
        color: '#D97757',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [1.8, 1.9, 2.0],
      },

      // Final G chord
      {
        time: 28,
        duration: 2,
        chordName: 'G',
        keys: ['G3', 'B3', 'D4'],
        hand: 'left',
        color: '#50C878',
        fingers: [5, 3, 1],
        noteDurations: [2, 2, 2],
      },

      {
        time: 28,
        duration: 1,
        chordName: 'G',
        keys: ['G4', 'B4', 'D5'],
        hand: 'right',
        color: '#50C878',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [0.8, 0.9, 1.0],
      },

      // Final resolution to C (both hands, full sustain)
      {
        time: 30,
        duration: 2,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: '#4A90E2',
        fingers: [5, 3, 1],
        noteDurations: [2, 2, 2],
      },

      {
        time: 30,
        duration: 2,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4', 'C5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1, 2, 3, 5],
        noteOffsets: [0, 0.04, 0.08, 0.12],  // Dramatic final roll
        noteDurations: [2, 2, 2, 2],         // All sustain to end
      },
    ],

    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'Verse', startTime: 8, endTime: 16 },
      { name: 'Bridge', startTime: 16, endTime: 24 },
      { name: 'Outro', startTime: 24, endTime: 32 },
    ],
  },

  {
    id: "john-legend-all-of-me",
    title: "All of Me",
    artist: "John Legend",
    tempo: 63, // ~63 BPM
    duration: 270, // ~4.5 minutes
    difficulty: "intermediate",
    sections: [
      { name: "Intro", startTime: 0, endTime: 8 },
      { name: "Verse 1", startTime: 8, endTime: 60 },
      { name: "Pre-Chorus", startTime: 60, endTime: 80 },
      { name: "Chorus", startTime: 80, endTime: 120 },
      { name: "Verse 2", startTime: 120, endTime: 180 },
      { name: "Bridge", startTime: 180, endTime: 220 },
      { name: "Final Chorus", startTime: 220, endTime: 260 },
      { name: "Outro", startTime: 260, endTime: 270 },
    ],
    chords: [
      // === INTRO ===
      {
        time: 0,
        duration: 4,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteOffsets: [0, 0.05, 0.1, 0.15, 0.2], // rolled chord
      },
      {
        time: 4,
        duration: 4,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteOffsets: [0, 0.05, 0.1, 0.15, 0.2],
      },
      {
        time: 8,
        duration: 4,
        chordName: "G",
        keys: ["G3", "D4", "G4", "B4", "D5"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteOffsets: [0, 0.05, 0.1, 0.15, 0.2],
      },
      {
        time: 12,
        duration: 4,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteOffsets: [0, 0.05, 0.1, 0.15, 0.2],
      },

      // === VERSE 1 ("What would I do...") ===
      {
        time: 16,
        duration: 4,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
      },
      {
        time: 20,
        duration: 4,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
      },
      {
        time: 24,
        duration: 4,
        chordName: "G",
        keys: ["G3", "D4", "G4", "B4", "D5"],
        hand: "both",
        color: "#3AFF88",
      },
      {
        time: 28,
        duration: 4,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
      },

      // === PRE-CHORUS ===
      {
        time: 60,
        duration: 4,
        chordName: "Am",
        keys: ["A3", "E4", "A4", "C5"],
        hand: "both",
        color: "#9C6EFF",
        noteOffsets: [0, 0.05, 0.1, 0.15],
      },
      {
        time: 64,
        duration: 4,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
      },
      {
        time: 68,
        duration: 4,
        chordName: "G",
        keys: ["G3", "D4", "G4", "B4", "D5"],
        hand: "both",
        color: "#3AFF88",
      },
      {
        time: 72,
        duration: 4,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
      },

      // === CHORUS ("'Cause all of me loves all of you") ===
      {
        time: 80,
        duration: 4,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
      },
      {
        time: 84,
        duration: 4,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
      },
      {
        time: 88,
        duration: 4,
        chordName: "G",
        keys: ["G3", "D4", "G4", "B4", "D5"],
        hand: "both",
        color: "#3AFF88",
      },
      {
        time: 92,
        duration: 4,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
      },

      // repeat this Em–C–G–D pattern for rest of verses & choruses...
      {
        time: 220,
        duration: 4,
        chordName: "G",
        keys: ["G3", "D4", "G4", "B4", "D5"],
        hand: "both",
        color: "#3AFF88",
      },
      {
        time: 260,
        duration: 8,
        chordName: "Gmaj7",
        keys: ["G3", "D4", "F#4", "B4", "D5", "F#5"],
        hand: "both",
        color: "#3AFFFF",
        noteDurations: [8, 8, 6, 6, 4, 4],
        noteOffsets: [0, 0.05, 0.1, 0.15, 0.2, 0.25],
      },
    ],
  }
]

