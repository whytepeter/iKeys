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

// ========================================
// 🎓 TUTORIALS - Learning Exercises
// ========================================
export const tutorials: Song[] = [

  {
    id: 'piano-tutorial-basics',
    title: '🎓 Piano Basics Tutorial',
    artist: 'iKeys Learning',
    tempo: 60,
    duration: 80, // Extended tutorial
    difficulty: 'beginner',
    chords: [
      // ============ SECTION 1: C Major Scale - Do Re Mi Fa So La Ti Do (0-16s) ============
      // Each note held for 2 seconds to learn the scale

      // Do (C) - Finger 1 (Thumb)
      {
        time: 0,
        duration: 2,
        chordName: 'C',
        keys: ['C4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1],
      },

      // Re (D) - Finger 2
      {
        time: 2,
        duration: 2,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      // Mi (E) - Finger 3
      {
        time: 4,
        duration: 2,
        chordName: 'E',
        keys: ['E4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [3],
      },

      // Fa (F) - Finger 4
      {
        time: 6,
        duration: 2,
        chordName: 'F',
        keys: ['F4'],
        hand: 'right',
        color: '#D97757',
        fingers: [4],
      },

      // So (G) - Finger 5 (Pinky)
      {
        time: 8,
        duration: 2,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#9B59B6',
        fingers: [5],
      },

      // La (A) - Finger 1 (Thumb tucks under)
      {
        time: 10,
        duration: 2,
        chordName: 'A',
        keys: ['A4'],
        hand: 'right',
        color: '#E74C3C',
        fingers: [1],
      },

      // Ti (B) - Finger 2
      {
        time: 12,
        duration: 2,
        chordName: 'B',
        keys: ['B4'],
        hand: 'right',
        color: '#3498DB',
        fingers: [2],
      },

      // Do (C5) - Finger 3
      {
        time: 14,
        duration: 2,
        chordName: 'C',
        keys: ['C5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [3],
      },

      // ============ SECTION 2: Scale Down - Do Ti La So Fa Mi Re Do (16-32s) ============

      {
        time: 16,
        duration: 2,
        chordName: 'C',
        keys: ['C5'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [3],
      },

      {
        time: 18,
        duration: 2,
        chordName: 'B',
        keys: ['B4'],
        hand: 'right',
        color: '#3498DB',
        fingers: [2],
      },

      {
        time: 20,
        duration: 2,
        chordName: 'A',
        keys: ['A4'],
        hand: 'right',
        color: '#E74C3C',
        fingers: [1],
      },

      {
        time: 22,
        duration: 2,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#9B59B6',
        fingers: [5],
      },

      {
        time: 24,
        duration: 2,
        chordName: 'F',
        keys: ['F4'],
        hand: 'right',
        color: '#D97757',
        fingers: [4],
      },

      {
        time: 26,
        duration: 2,
        chordName: 'E',
        keys: ['E4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [3],
      },

      {
        time: 28,
        duration: 2,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      {
        time: 30,
        duration: 2,
        chordName: 'C',
        keys: ['C4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1],
      },

      // ============ SECTION 3: Simple Melody - "Mary Had a Little Lamb" (32-52s) ============
      // E D C D E E E (Mary had a little lamb)

      {
        time: 32,
        duration: 1,
        chordName: 'E',
        keys: ['E4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [3],
      },

      {
        time: 33,
        duration: 1,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      {
        time: 34,
        duration: 1,
        chordName: 'C',
        keys: ['C4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1],
      },

      {
        time: 35,
        duration: 1,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      {
        time: 36,
        duration: 1,
        chordName: 'E',
        keys: ['E4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [3],
      },

      {
        time: 37,
        duration: 1,
        chordName: 'E',
        keys: ['E4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [3],
      },

      {
        time: 38,
        duration: 2,
        chordName: 'E',
        keys: ['E4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [3],
      },

      // D D D (Little lamb, little lamb)
      {
        time: 40,
        duration: 1,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      {
        time: 41,
        duration: 1,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      {
        time: 42,
        duration: 2,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      // E G G (Mary had a)
      {
        time: 44,
        duration: 1,
        chordName: 'E',
        keys: ['E4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [3],
      },

      {
        time: 45,
        duration: 1,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#9B59B6',
        fingers: [5],
      },

      {
        time: 46,
        duration: 2,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#9B59B6',
        fingers: [5],
      },

      // E D C D E E E E D D E D C (Little lamb)
      {
        time: 48,
        duration: 0.75,
        chordName: 'E',
        keys: ['E4'],
        hand: 'right',
        color: '#F5A623',
        fingers: [3],
      },

      {
        time: 48.75,
        duration: 0.75,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      {
        time: 49.5,
        duration: 0.75,
        chordName: 'C',
        keys: ['C4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1],
      },

      {
        time: 50.25,
        duration: 0.75,
        chordName: 'D',
        keys: ['D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [2],
      },

      {
        time: 51,
        duration: 3,
        chordName: 'C',
        keys: ['C4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1],
      },

      // ============ SECTION 4: Basic Chords Introduction (54-70s) ============
      // Two-note intervals to introduce playing multiple keys

      // C + E (Do + Mi)
      {
        time: 54,
        duration: 2,
        chordName: 'C',
        keys: ['C4', 'E4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1, 3],
      },

      // D + F (Re + Fa)
      {
        time: 56,
        duration: 2,
        chordName: 'Dm',
        keys: ['D4', 'F4'],
        hand: 'right',
        color: '#E74C3C',
        fingers: [2, 4],
      },

      // E + G (Mi + So)
      {
        time: 58,
        duration: 2,
        chordName: 'Em',
        keys: ['E4', 'G4'],
        hand: 'right',
        color: '#9B59B6',
        fingers: [3, 5],
      },

      // F + A (Fa + La)
      {
        time: 60,
        duration: 2,
        chordName: 'F',
        keys: ['F4', 'A4'],
        hand: 'right',
        color: '#D97757',
        fingers: [1, 3],
      },

      // Full C Major Chord (C + E + G)
      {
        time: 62,
        duration: 2,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.05, 0.1], // Slight roll to hear each note
      },

      // Full G Major Chord (G + B + D)
      {
        time: 64,
        duration: 2,
        chordName: 'G',
        keys: ['G3', 'B3', 'D4'],
        hand: 'right',
        color: '#50C878',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.05, 0.1],
      },

      // Full F Major Chord (F + A + C)
      {
        time: 66,
        duration: 2,
        chordName: 'F',
        keys: ['F3', 'A3', 'C4'],
        hand: 'right',
        color: '#D97757',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.05, 0.1],
      },

      // Full C Major Chord again
      {
        time: 68,
        duration: 2,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.05, 0.1],
      },

      // ============ SECTION 5: Simple Song with Both Hands (70-80s) ============
      // "Twinkle Twinkle" opening with bass notes

      // Left hand: C bass
      {
        time: 70,
        duration: 4,
        chordName: 'C',
        keys: ['C3'],
        hand: 'left',
        color: '#4A90E2',
        fingers: [5],
      },

      // Right hand: C C G G A A G (Twinkle twinkle little star)
      {
        time: 70,
        duration: 0.75,
        chordName: 'C',
        keys: ['C4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1],
      },

      {
        time: 70.75,
        duration: 0.75,
        chordName: 'C',
        keys: ['C4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1],
      },

      {
        time: 71.5,
        duration: 0.75,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#9B59B6',
        fingers: [5],
      },

      {
        time: 72.25,
        duration: 0.75,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#9B59B6',
        fingers: [5],
      },

      {
        time: 73,
        duration: 0.75,
        chordName: 'A',
        keys: ['A4'],
        hand: 'right',
        color: '#E74C3C',
        fingers: [1],
      },

      {
        time: 73.75,
        duration: 0.75,
        chordName: 'A',
        keys: ['A4'],
        hand: 'right',
        color: '#E74C3C',
        fingers: [1],
      },

      // Left hand: F bass
      {
        time: 74,
        duration: 3,
        chordName: 'F',
        keys: ['F3'],
        hand: 'left',
        color: '#D97757',
        fingers: [5],
      },

      {
        time: 74.5,
        duration: 1.5,
        chordName: 'G',
        keys: ['G4'],
        hand: 'right',
        color: '#9B59B6',
        fingers: [5],
      },

      // Left hand: C bass (final)
      {
        time: 77,
        duration: 3,
        chordName: 'C',
        keys: ['C3'],
        hand: 'left',
        color: '#4A90E2',
        fingers: [5],
      },

      // Right hand: Final C chord
      {
        time: 77,
        duration: 3,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4'],
        hand: 'right',
        color: '#4A90E2',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.05, 0.1],
        noteDurations: [3, 3, 3],
      },
    ],
    sections: [
      { name: 'Scale Up (Do-Re-Mi)', startTime: 0, endTime: 16 },
      { name: 'Scale Down', startTime: 16, endTime: 32 },
      { name: 'Simple Melody', startTime: 32, endTime: 54 },
      { name: 'Chord Practice', startTime: 54, endTime: 70 },
      { name: 'Both Hands Together', startTime: 70, endTime: 80 },
    ],
  },

  // ========================================
  // 🎓 TUTORIAL 2: FINGER INDEPENDENCE
  // ========================================
  {
    id: 'tutorial-finger-independence',
    title: '🎓 Finger Independence',
    artist: 'iKeys Learning',
    tempo: 80,
    duration: 48,
    difficulty: 'beginner',
    chords: [
      // Exercise 1: Single Finger Taps (0-20s)
      // Thumb (Finger 1)
      { time: 0, duration: 1, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 1, duration: 1, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 2, duration: 1, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 3, duration: 1, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },

      // Index (Finger 2)
      { time: 4, duration: 1, chordName: 'D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 5, duration: 1, chordName: 'D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 6, duration: 1, chordName: 'D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 7, duration: 1, chordName: 'D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },

      // Middle (Finger 3)
      { time: 8, duration: 1, chordName: 'E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 9, duration: 1, chordName: 'E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 10, duration: 1, chordName: 'E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 11, duration: 1, chordName: 'E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },

      // Ring (Finger 4)
      { time: 12, duration: 1, chordName: 'F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 13, duration: 1, chordName: 'F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 14, duration: 1, chordName: 'F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 15, duration: 1, chordName: 'F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },

      // Pinky (Finger 5)
      { time: 16, duration: 1, chordName: 'G', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 17, duration: 1, chordName: 'G', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 18, duration: 1, chordName: 'G', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 19, duration: 1, chordName: 'G', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },

      // Exercise 2: Alternating Fingers (20-32s)
      { time: 20, duration: 1, chordName: 'C-D', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 21, duration: 1, chordName: 'C-D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 22, duration: 1, chordName: 'C-D', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 23, duration: 1, chordName: 'C-D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },

      { time: 24, duration: 1, chordName: 'D-E', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 25, duration: 1, chordName: 'D-E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 26, duration: 1, chordName: 'D-E', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 27, duration: 1, chordName: 'D-E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },

      { time: 28, duration: 1, chordName: 'E-F', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 29, duration: 1, chordName: 'E-F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 30, duration: 1, chordName: 'E-F', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 31, duration: 1, chordName: 'E-F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },

      // Exercise 3: Skip Patterns (32-48s)
      { time: 32, duration: 1, chordName: 'C-E', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 33, duration: 1, chordName: 'C-E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 34, duration: 1, chordName: 'C-E', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 35, duration: 1, chordName: 'C-E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },

      { time: 36, duration: 1, chordName: 'D-G', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 37, duration: 1, chordName: 'D-G', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 38, duration: 1, chordName: 'D-G', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 39, duration: 1, chordName: 'D-G', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },

      // Final Pattern
      { time: 40, duration: 1, chordName: 'Scale', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 41, duration: 1, chordName: 'Scale', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 42, duration: 1, chordName: 'Scale', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 43, duration: 1, chordName: 'Scale', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 44, duration: 1, chordName: 'Scale', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 45, duration: 1, chordName: 'Scale', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 46, duration: 1, chordName: 'Scale', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 47, duration: 1, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
    ],
    sections: [
      { name: 'Single Fingers', startTime: 0, endTime: 20 },
      { name: 'Alternating', startTime: 20, endTime: 32 },
      { name: 'Skip Patterns', startTime: 32, endTime: 48 },
    ],
  },

  // ========================================
  // 🎓 TUTORIAL 3: BASIC CHORDS
  // ========================================
  {
    id: 'tutorial-basic-chords',
    title: '🎓 Basic Chords (C, G, F)',
    artist: 'iKeys Learning',
    tempo: 70,
    duration: 60,
    difficulty: 'beginner',
    chords: [
      // C Major Chord - Introduction (0-12s)
      { time: 0, duration: 3, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 3, duration: 3, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 6, duration: 3, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 9, duration: 3, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },

      // G Major Chord (12-24s)
      { time: 12, duration: 3, chordName: 'G', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 15, duration: 3, chordName: 'G', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 18, duration: 3, chordName: 'G', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 21, duration: 3, chordName: 'G', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },

      // F Major Chord (24-36s)
      { time: 24, duration: 3, chordName: 'F', keys: ['F4', 'A4', 'C5'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 27, duration: 3, chordName: 'F', keys: ['F4', 'A4', 'C5'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 30, duration: 3, chordName: 'F', keys: ['F4', 'A4', 'C5'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 33, duration: 3, chordName: 'F', keys: ['F4', 'A4', 'C5'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },

      // Chord Progression Practice (36-60s)
      { time: 36, duration: 4, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 40, duration: 4, chordName: 'G', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 44, duration: 4, chordName: 'F', keys: ['F4', 'A4', 'C5'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 48, duration: 4, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 52, duration: 4, chordName: 'G', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 56, duration: 4, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
    ],
    sections: [
      { name: 'C Major', startTime: 0, endTime: 12 },
      { name: 'G Major', startTime: 12, endTime: 24 },
      { name: 'F Major', startTime: 24, endTime: 36 },
      { name: 'Progression', startTime: 36, endTime: 60 },
    ],
  },

  // ========================================
  // 🎓 TUTORIAL 4: RHYTHM TRAINING
  // ========================================
  {
    id: 'tutorial-rhythm-training',
    title: '🎓 Rhythm Training',
    artist: 'iKeys Learning',
    tempo: 90,
    duration: 48,
    difficulty: 'beginner',
    chords: [
      // Whole Notes (4 beats each) - 0-16s
      { time: 0, duration: 4, chordName: 'C (Whole)', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 4, duration: 4, chordName: 'D (Whole)', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 8, duration: 4, chordName: 'E (Whole)', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 12, duration: 4, chordName: 'C (Whole)', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },

      // Half Notes (2 beats each) - 16-24s
      { time: 16, duration: 2, chordName: 'C (Half)', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 18, duration: 2, chordName: 'D (Half)', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 20, duration: 2, chordName: 'E (Half)', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 22, duration: 2, chordName: 'F (Half)', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },

      // Quarter Notes (1 beat each) - 24-32s
      { time: 24, duration: 1, chordName: 'C (Quarter)', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 25, duration: 1, chordName: 'D (Quarter)', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 26, duration: 1, chordName: 'E (Quarter)', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 27, duration: 1, chordName: 'F (Quarter)', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 28, duration: 1, chordName: 'G (Quarter)', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 29, duration: 1, chordName: 'F (Quarter)', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 30, duration: 1, chordName: 'E (Quarter)', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 31, duration: 1, chordName: 'D (Quarter)', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },

      // Eighth Notes (0.5 beat each) - 32-40s
      { time: 32, duration: 0.5, chordName: 'C (Eighth)', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 32.5, duration: 0.5, chordName: 'D (Eighth)', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 33, duration: 0.5, chordName: 'E (Eighth)', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 33.5, duration: 0.5, chordName: 'F (Eighth)', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 34, duration: 0.5, chordName: 'G (Eighth)', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 34.5, duration: 0.5, chordName: 'F (Eighth)', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 35, duration: 0.5, chordName: 'E (Eighth)', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 35.5, duration: 0.5, chordName: 'D (Eighth)', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 36, duration: 0.5, chordName: 'C (Eighth)', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 36.5, duration: 0.5, chordName: 'D (Eighth)', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 37, duration: 0.5, chordName: 'E (Eighth)', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 37.5, duration: 0.5, chordName: 'F (Eighth)', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 38, duration: 0.5, chordName: 'G (Eighth)', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 38.5, duration: 0.5, chordName: 'F (Eighth)', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 39, duration: 0.5, chordName: 'E (Eighth)', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 39.5, duration: 0.5, chordName: 'D (Eighth)', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },

      // Mixed Rhythm Pattern (40-48s)
      { time: 40, duration: 2, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 42, duration: 1, chordName: 'E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 43, duration: 1, chordName: 'G', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 44, duration: 0.5, chordName: 'F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 44.5, duration: 0.5, chordName: 'E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 45, duration: 1, chordName: 'D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 46, duration: 2, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
    ],
    sections: [
      { name: 'Whole Notes', startTime: 0, endTime: 16 },
      { name: 'Half Notes', startTime: 16, endTime: 24 },
      { name: 'Quarter Notes', startTime: 24, endTime: 32 },
      { name: 'Eighth Notes', startTime: 32, endTime: 40 },
      { name: 'Mixed Rhythms', startTime: 40, endTime: 48 },
    ],
  },

  // ========================================
  // 🎓 TUTORIAL 5: LEFT HAND BASS
  // ========================================
  {
    id: 'tutorial-left-hand-bass',
    title: '🎓 Left Hand Bass Notes',
    artist: 'iKeys Learning',
    tempo: 80,
    duration: 56,
    difficulty: 'intermediate',
    chords: [
      // Left Hand Only - Bass Notes (0-20s)
      { time: 0, duration: 2, chordName: 'C Bass', keys: ['C3'], hand: 'left', color: '#4A90E2', fingers: [1] },
      { time: 2, duration: 2, chordName: 'C Bass', keys: ['C3'], hand: 'left', color: '#4A90E2', fingers: [1] },
      { time: 4, duration: 2, chordName: 'G Bass', keys: ['G3'], hand: 'left', color: '#50C878', fingers: [5] },
      { time: 6, duration: 2, chordName: 'G Bass', keys: ['G3'], hand: 'left', color: '#50C878', fingers: [5] },
      { time: 8, duration: 2, chordName: 'F Bass', keys: ['F3'], hand: 'left', color: '#D97757', fingers: [1] },
      { time: 10, duration: 2, chordName: 'F Bass', keys: ['F3'], hand: 'left', color: '#D97757', fingers: [1] },
      { time: 12, duration: 2, chordName: 'C Bass', keys: ['C3'], hand: 'left', color: '#4A90E2', fingers: [1] },
      { time: 14, duration: 2, chordName: 'C Bass', keys: ['C3'], hand: 'left', color: '#4A90E2', fingers: [1] },
      { time: 16, duration: 4, chordName: 'C Bass', keys: ['C3'], hand: 'left', color: '#4A90E2', fingers: [1] },

      // Right Hand Melody + Left Hand Bass (20-56s)
      { time: 20, duration: 4, chordName: 'C/C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 24, duration: 4, chordName: 'C/E', keys: ['C3', 'E4'], hand: 'both', color: chordColors['C'], fingers: [1, 3] },
      { time: 28, duration: 4, chordName: 'G/G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 32, duration: 4, chordName: 'G/B', keys: ['G3', 'B4'], hand: 'both', color: chordColors['G'], fingers: [5, 3] },
      { time: 36, duration: 4, chordName: 'F/F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 40, duration: 4, chordName: 'F/A', keys: ['F3', 'A4'], hand: 'both', color: chordColors['F'], fingers: [1, 3] },
      { time: 44, duration: 4, chordName: 'C/C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 48, duration: 4, chordName: 'G/G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 52, duration: 4, chordName: 'C/C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
    ],
    sections: [
      { name: 'Left Hand Only', startTime: 0, endTime: 20 },
      { name: 'Both Hands', startTime: 20, endTime: 56 },
    ],
  },

  // ========================================
  // 🎓 TUTORIAL 6: HAND COORDINATION
  // ========================================
  {
    id: 'tutorial-hand-coordination',
    title: '🎓 Hand Coordination',
    artist: 'iKeys Learning',
    tempo: 75,
    duration: 64,
    difficulty: 'intermediate',
    chords: [
      // Exercise 1: Together (0-16s)
      { time: 0, duration: 2, chordName: 'C+C', keys: ['C3', 'C4'], hand: 'both', color: '#4A90E2', fingers: [1, 1] },
      { time: 2, duration: 2, chordName: 'D+D', keys: ['D3', 'D4'], hand: 'both', color: '#50C878', fingers: [2, 2] },
      { time: 4, duration: 2, chordName: 'E+E', keys: ['E3', 'E4'], hand: 'both', color: '#F5A623', fingers: [3, 3] },
      { time: 6, duration: 2, chordName: 'F+F', keys: ['F3', 'F4'], hand: 'both', color: '#D97757', fingers: [4, 4] },
      { time: 8, duration: 2, chordName: 'G+G', keys: ['G3', 'G4'], hand: 'both', color: '#9B59B6', fingers: [5, 5] },
      { time: 10, duration: 2, chordName: 'F+F', keys: ['F3', 'F4'], hand: 'both', color: '#D97757', fingers: [4, 4] },
      { time: 12, duration: 2, chordName: 'E+E', keys: ['E3', 'E4'], hand: 'both', color: '#F5A623', fingers: [3, 3] },
      { time: 14, duration: 2, chordName: 'D+D', keys: ['D3', 'D4'], hand: 'both', color: '#50C878', fingers: [2, 2] },

      // Exercise 2: Alternating (16-32s)
      { time: 16, duration: 1, chordName: 'L-C', keys: ['C3'], hand: 'left', color: '#4A90E2', fingers: [1] },
      { time: 17, duration: 1, chordName: 'R-C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 18, duration: 1, chordName: 'L-D', keys: ['D3'], hand: 'left', color: '#50C878', fingers: [2] },
      { time: 19, duration: 1, chordName: 'R-D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },
      { time: 20, duration: 1, chordName: 'L-E', keys: ['E3'], hand: 'left', color: '#F5A623', fingers: [3] },
      { time: 21, duration: 1, chordName: 'R-E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 22, duration: 1, chordName: 'L-F', keys: ['F3'], hand: 'left', color: '#D97757', fingers: [4] },
      { time: 23, duration: 1, chordName: 'R-F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 24, duration: 1, chordName: 'L-G', keys: ['G3'], hand: 'left', color: '#9B59B6', fingers: [5] },
      { time: 25, duration: 1, chordName: 'R-G', keys: ['G4'], hand: 'right', color: '#9B59B6', fingers: [5] },
      { time: 26, duration: 1, chordName: 'L-F', keys: ['F3'], hand: 'left', color: '#D97757', fingers: [4] },
      { time: 27, duration: 1, chordName: 'R-F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [4] },
      { time: 28, duration: 1, chordName: 'L-E', keys: ['E3'], hand: 'left', color: '#F5A623', fingers: [3] },
      { time: 29, duration: 1, chordName: 'R-E', keys: ['E4'], hand: 'right', color: '#F5A623', fingers: [3] },
      { time: 30, duration: 1, chordName: 'L-D', keys: ['D3'], hand: 'left', color: '#50C878', fingers: [2] },
      { time: 31, duration: 1, chordName: 'R-D', keys: ['D4'], hand: 'right', color: '#50C878', fingers: [2] },

      // Exercise 3: Melody + Bass (32-64s)
      { time: 32, duration: 4, chordName: 'C Chord', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 36, duration: 2, chordName: 'C/E', keys: ['C3', 'E4'], hand: 'both', color: chordColors['C'], fingers: [1, 3] },
      { time: 38, duration: 2, chordName: 'C/G', keys: ['C3', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 5] },
      { time: 40, duration: 4, chordName: 'G Chord', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 44, duration: 2, chordName: 'G/B', keys: ['G3', 'B4'], hand: 'both', color: chordColors['G'], fingers: [5, 3] },
      { time: 46, duration: 2, chordName: 'G/D', keys: ['G3', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 5] },
      { time: 48, duration: 4, chordName: 'Am Chord', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 52, duration: 4, chordName: 'F Chord', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 56, duration: 4, chordName: 'C Chord', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 60, duration: 4, chordName: 'C Final', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
    ],
    sections: [
      { name: 'Together', startTime: 0, endTime: 16 },
      { name: 'Alternating', startTime: 16, endTime: 32 },
      { name: 'Melody + Bass', startTime: 32, endTime: 64 },
    ],
  },

  // ========================================
  // 🎓 TUTORIAL 7: CHORD PROGRESSIONS
  // ========================================
  {
    id: 'tutorial-chord-progressions',
    title: '🎓 Chord Progressions (Pop & Jazz)',
    artist: 'iKeys Learning',
    tempo: 85,
    duration: 72,
    difficulty: 'intermediate',
    chords: [
      // I-IV-V-I in C Major (0-24s)
      { time: 0, duration: 4, chordName: 'I (C)', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 4, duration: 4, chordName: 'IV (F)', keys: ['F4', 'A4', 'C5'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 8, duration: 4, chordName: 'V (G)', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 12, duration: 4, chordName: 'I (C)', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 16, duration: 4, chordName: 'I (C)', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 20, duration: 4, chordName: 'IV (F)', keys: ['F4', 'A4', 'C5'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },

      // I-V-vi-IV (Pop Progression) (24-48s)
      { time: 24, duration: 4, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 28, duration: 4, chordName: 'G', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },
      { time: 32, duration: 4, chordName: 'Am', keys: ['A4', 'C5', 'E5'], hand: 'right', color: chordColors['Am'], fingers: [1, 2, 4] },
      { time: 36, duration: 4, chordName: 'F', keys: ['F4', 'A4', 'C5'], hand: 'right', color: chordColors['F'], fingers: [1, 3, 5] },
      { time: 40, duration: 4, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 44, duration: 4, chordName: 'G', keys: ['G4', 'B4', 'D5'], hand: 'right', color: chordColors['G'], fingers: [1, 3, 5] },

      // ii-V-I (Jazz Progression) (48-72s)
      { time: 48, duration: 4, chordName: 'Dm', keys: ['D4', 'F4', 'A4'], hand: 'right', color: chordColors['Dm'], fingers: [1, 2, 4] },
      { time: 52, duration: 4, chordName: 'G7', keys: ['G4', 'B4', 'D5', 'F4'], hand: 'right', color: chordColors['G7'], fingers: [1, 3, 5, 2] },
      { time: 56, duration: 4, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
      { time: 60, duration: 4, chordName: 'Dm', keys: ['D4', 'F4', 'A4'], hand: 'right', color: chordColors['Dm'], fingers: [1, 2, 4] },
      { time: 64, duration: 4, chordName: 'G7', keys: ['G4', 'B4', 'D5', 'F4'], hand: 'right', color: chordColors['G7'], fingers: [1, 3, 5, 2] },
      { time: 68, duration: 4, chordName: 'C', keys: ['C4', 'E4', 'G4'], hand: 'right', color: chordColors['C'], fingers: [1, 3, 5] },
    ],
    sections: [
      { name: 'I-IV-V-I', startTime: 0, endTime: 24 },
      { name: 'Pop (I-V-vi-IV)', startTime: 24, endTime: 48 },
      { name: 'Jazz (ii-V-I)', startTime: 48, endTime: 72 },
    ],
  },

  // ========================================
  // 🎓 TUTORIAL 8: ADVANCED ARPEGGIOS
  // ========================================
  {
    id: 'tutorial-arpeggios',
    title: '🎓 Advanced Arpeggios',
    artist: 'iKeys Learning',
    tempo: 95,
    duration: 56,
    difficulty: 'advanced',
    chords: [
      // C Major Arpeggio - Up (0-8s)
      { time: 0, duration: 1, chordName: 'C Arp', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 1, duration: 1, chordName: 'C Arp', keys: ['E4'], hand: 'right', color: '#4A90E2', fingers: [3] },
      { time: 2, duration: 1, chordName: 'C Arp', keys: ['G4'], hand: 'right', color: '#4A90E2', fingers: [5] },
      { time: 3, duration: 1, chordName: 'C Arp', keys: ['C5'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 4, duration: 1, chordName: 'C Arp', keys: ['G4'], hand: 'right', color: '#4A90E2', fingers: [5] },
      { time: 5, duration: 1, chordName: 'C Arp', keys: ['E4'], hand: 'right', color: '#4A90E2', fingers: [3] },
      { time: 6, duration: 2, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },

      // F Major Arpeggio (8-16s)
      { time: 8, duration: 1, chordName: 'F Arp', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [1] },
      { time: 9, duration: 1, chordName: 'F Arp', keys: ['A4'], hand: 'right', color: '#D97757', fingers: [3] },
      { time: 10, duration: 1, chordName: 'F Arp', keys: ['C5'], hand: 'right', color: '#D97757', fingers: [5] },
      { time: 11, duration: 1, chordName: 'F Arp', keys: ['F5'], hand: 'right', color: '#D97757', fingers: [1] },
      { time: 12, duration: 1, chordName: 'F Arp', keys: ['C5'], hand: 'right', color: '#D97757', fingers: [5] },
      { time: 13, duration: 1, chordName: 'F Arp', keys: ['A4'], hand: 'right', color: '#D97757', fingers: [3] },
      { time: 14, duration: 2, chordName: 'F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [1] },

      // G Major Arpeggio (16-24s)
      { time: 16, duration: 1, chordName: 'G Arp', keys: ['G4'], hand: 'right', color: '#50C878', fingers: [1] },
      { time: 17, duration: 1, chordName: 'G Arp', keys: ['B4'], hand: 'right', color: '#50C878', fingers: [3] },
      { time: 18, duration: 1, chordName: 'G Arp', keys: ['D5'], hand: 'right', color: '#50C878', fingers: [5] },
      { time: 19, duration: 1, chordName: 'G Arp', keys: ['G5'], hand: 'right', color: '#50C878', fingers: [1] },
      { time: 20, duration: 1, chordName: 'G Arp', keys: ['D5'], hand: 'right', color: '#50C878', fingers: [5] },
      { time: 21, duration: 1, chordName: 'G Arp', keys: ['B4'], hand: 'right', color: '#50C878', fingers: [3] },
      { time: 22, duration: 2, chordName: 'G', keys: ['G4'], hand: 'right', color: '#50C878', fingers: [1] },

      // Am Arpeggio (24-32s)
      { time: 24, duration: 1, chordName: 'Am Arp', keys: ['A4'], hand: 'right', color: '#F5A623', fingers: [1] },
      { time: 25, duration: 1, chordName: 'Am Arp', keys: ['C5'], hand: 'right', color: '#F5A623', fingers: [2] },
      { time: 26, duration: 1, chordName: 'Am Arp', keys: ['E5'], hand: 'right', color: '#F5A623', fingers: [4] },
      { time: 27, duration: 1, chordName: 'Am Arp', keys: ['A5'], hand: 'right', color: '#F5A623', fingers: [1] },
      { time: 28, duration: 1, chordName: 'Am Arp', keys: ['E5'], hand: 'right', color: '#F5A623', fingers: [4] },
      { time: 29, duration: 1, chordName: 'Am Arp', keys: ['C5'], hand: 'right', color: '#F5A623', fingers: [2] },
      { time: 30, duration: 2, chordName: 'Am', keys: ['A4'], hand: 'right', color: '#F5A623', fingers: [1] },

      // Fast Arpeggio Pattern (32-56s)
      { time: 32, duration: 0.5, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 32.5, duration: 0.5, chordName: 'C', keys: ['E4'], hand: 'right', color: '#4A90E2', fingers: [3] },
      { time: 33, duration: 0.5, chordName: 'C', keys: ['G4'], hand: 'right', color: '#4A90E2', fingers: [5] },
      { time: 33.5, duration: 0.5, chordName: 'C', keys: ['C5'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 34, duration: 0.5, chordName: 'C', keys: ['G4'], hand: 'right', color: '#4A90E2', fingers: [5] },
      { time: 34.5, duration: 0.5, chordName: 'C', keys: ['E4'], hand: 'right', color: '#4A90E2', fingers: [3] },
      { time: 35, duration: 0.5, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 35.5, duration: 0.5, chordName: 'C', keys: ['G4'], hand: 'right', color: '#4A90E2', fingers: [5] },

      { time: 36, duration: 0.5, chordName: 'F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [1] },
      { time: 36.5, duration: 0.5, chordName: 'F', keys: ['A4'], hand: 'right', color: '#D97757', fingers: [3] },
      { time: 37, duration: 0.5, chordName: 'F', keys: ['C5'], hand: 'right', color: '#D97757', fingers: [5] },
      { time: 37.5, duration: 0.5, chordName: 'F', keys: ['F5'], hand: 'right', color: '#D97757', fingers: [1] },
      { time: 38, duration: 0.5, chordName: 'F', keys: ['C5'], hand: 'right', color: '#D97757', fingers: [5] },
      { time: 38.5, duration: 0.5, chordName: 'F', keys: ['A4'], hand: 'right', color: '#D97757', fingers: [3] },
      { time: 39, duration: 0.5, chordName: 'F', keys: ['F4'], hand: 'right', color: '#D97757', fingers: [1] },
      { time: 39.5, duration: 0.5, chordName: 'F', keys: ['C5'], hand: 'right', color: '#D97757', fingers: [5] },

      { time: 40, duration: 0.5, chordName: 'G', keys: ['G4'], hand: 'right', color: '#50C878', fingers: [1] },
      { time: 40.5, duration: 0.5, chordName: 'G', keys: ['B4'], hand: 'right', color: '#50C878', fingers: [3] },
      { time: 41, duration: 0.5, chordName: 'G', keys: ['D5'], hand: 'right', color: '#50C878', fingers: [5] },
      { time: 41.5, duration: 0.5, chordName: 'G', keys: ['G5'], hand: 'right', color: '#50C878', fingers: [1] },
      { time: 42, duration: 0.5, chordName: 'G', keys: ['D5'], hand: 'right', color: '#50C878', fingers: [5] },
      { time: 42.5, duration: 0.5, chordName: 'G', keys: ['B4'], hand: 'right', color: '#50C878', fingers: [3] },
      { time: 43, duration: 0.5, chordName: 'G', keys: ['G4'], hand: 'right', color: '#50C878', fingers: [1] },
      { time: 43.5, duration: 0.5, chordName: 'G', keys: ['D5'], hand: 'right', color: '#50C878', fingers: [5] },

      { time: 44, duration: 0.5, chordName: 'Am', keys: ['A4'], hand: 'right', color: '#F5A623', fingers: [1] },
      { time: 44.5, duration: 0.5, chordName: 'Am', keys: ['C5'], hand: 'right', color: '#F5A623', fingers: [2] },
      { time: 45, duration: 0.5, chordName: 'Am', keys: ['E5'], hand: 'right', color: '#F5A623', fingers: [4] },
      { time: 45.5, duration: 0.5, chordName: 'Am', keys: ['A5'], hand: 'right', color: '#F5A623', fingers: [1] },
      { time: 46, duration: 0.5, chordName: 'Am', keys: ['E5'], hand: 'right', color: '#F5A623', fingers: [4] },
      { time: 46.5, duration: 0.5, chordName: 'Am', keys: ['C5'], hand: 'right', color: '#F5A623', fingers: [2] },
      { time: 47, duration: 0.5, chordName: 'Am', keys: ['A4'], hand: 'right', color: '#F5A623', fingers: [1] },
      { time: 47.5, duration: 0.5, chordName: 'Am', keys: ['E5'], hand: 'right', color: '#F5A623', fingers: [4] },

      { time: 48, duration: 0.5, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 48.5, duration: 0.5, chordName: 'C', keys: ['E4'], hand: 'right', color: '#4A90E2', fingers: [3] },
      { time: 49, duration: 0.5, chordName: 'C', keys: ['G4'], hand: 'right', color: '#4A90E2', fingers: [5] },
      { time: 49.5, duration: 0.5, chordName: 'C', keys: ['C5'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 50, duration: 0.5, chordName: 'C', keys: ['G4'], hand: 'right', color: '#4A90E2', fingers: [5] },
      { time: 50.5, duration: 0.5, chordName: 'C', keys: ['E4'], hand: 'right', color: '#4A90E2', fingers: [3] },
      { time: 51, duration: 0.5, chordName: 'C', keys: ['C4'], hand: 'right', color: '#4A90E2', fingers: [1] },
      { time: 51.5, duration: 0.5, chordName: 'C', keys: ['G4'], hand: 'right', color: '#4A90E2', fingers: [5] },

      { time: 52, duration: 4, chordName: 'C', keys: ['C4', 'E4', 'G4', 'C5'], hand: 'right', color: '#4A90E2', fingers: [1, 2, 3, 5] },
    ],
    sections: [
      { name: 'C Major', startTime: 0, endTime: 8 },
      { name: 'F Major', startTime: 8, endTime: 16 },
      { name: 'G Major', startTime: 16, endTime: 24 },
      { name: 'A Minor', startTime: 24, endTime: 32 },
      { name: 'Fast Pattern', startTime: 32, endTime: 56 },
    ],
  },

]

// ========================================
// 🎵 SONGS - Romantic & Jazz
// ========================================
export const songs: Song[] = [

  // ========================================
  // 🎂 HAPPY BIRTHDAY TO YOU - Jazz Arrangement
  // ========================================
  {
    id: "happy-birthday",
    title: "Happy Birthday to You",
    artist: "Traditional",
    tempo: 72,
    duration: 25,
    difficulty: "beginner",

    sections: [
      { name: "Intro", startTime: 0, endTime: 1 },
      { name: "Verse", startTime: 1, endTime: 24 },
    ],

    chords: [
      // 🎵 INTRO — C chord
      {
        time: 0,
        duration: 1,
        chordName: "C",
        keys: ["C3", "E3", "G3"],
        hand: "left",
        color: "#4A90E2",
        fingers: [5, 3, 1],
      },

      // 🎶 Phrase 1 — “Happy birthday to you”
      {
        time: 1,
        duration: 0.5,
        chordName: "C",
        keys: ["G4"],
        hand: "right",
        color: "#4A90E2",
        fingers: [5],
      },
      {
        time: 1.5,
        duration: 0.5,
        chordName: "C",
        keys: ["G4"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 2,
        duration: 1,
        chordName: "D",
        keys: ["A4"],
        hand: "right",
        color: "#3498DB",
      },
      {
        time: 3,
        duration: 1,
        chordName: "C",
        keys: ["G4"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 4,
        duration: 1,
        chordName: "F",
        keys: ["C5"],
        hand: "right",
        color: "#D97757",
      },
      {
        time: 5,
        duration: 2,
        chordName: "C",
        keys: ["B4"],
        hand: "right",
        color: "#4A90E2",
      },

      // 🎶 Phrase 2 — “Happy birthday to you”
      {
        time: 7,
        duration: 0.5,
        chordName: "C",
        keys: ["G4"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 7.5,
        duration: 0.5,
        chordName: "C",
        keys: ["G4"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 8,
        duration: 1,
        chordName: "D",
        keys: ["A4"],
        hand: "right",
        color: "#3498DB",
      },
      {
        time: 9,
        duration: 1,
        chordName: "C",
        keys: ["G4"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 10,
        duration: 1,
        chordName: "G",
        keys: ["D5"],
        hand: "right",
        color: "#50C878",
      },
      {
        time: 11,
        duration: 2,
        chordName: "C",
        keys: ["C5"],
        hand: "right",
        color: "#4A90E2",
      },

      // 🎶 Phrase 3 — “Happy birthday dear [Name]”
      {
        time: 13,
        duration: 0.5,
        chordName: "C",
        keys: ["G4"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 13.5,
        duration: 0.5,
        chordName: "C",
        keys: ["G4"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 14,
        duration: 1,
        chordName: "C",
        keys: ["C5"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 15,
        duration: 1,
        chordName: "A",
        keys: ["E5"],
        hand: "right",
        color: "#F5A623",
      },
      {
        time: 16,
        duration: 1,
        chordName: "F",
        keys: ["C5"],
        hand: "right",
        color: "#D97757",
      },
      {
        time: 17,
        duration: 1,
        chordName: "C",
        keys: ["A4"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 18,
        duration: 2,
        chordName: "G",
        keys: ["F4", "G4"],
        hand: "right",
        color: "#50C878",
      },

      // 🎶 Phrase 4 — “Happy birthday to you”
      {
        time: 20,
        duration: 0.5,
        chordName: "F",
        keys: ["F4"],
        hand: "right",
        color: "#D97757",
      },
      {
        time: 20.5,
        duration: 0.5,
        chordName: "F",
        keys: ["F4"],
        hand: "right",
        color: "#D97757",
      },
      {
        time: 21,
        duration: 1,
        chordName: "C",
        keys: ["C5"],
        hand: "right",
        color: "#4A90E2",
      },
      {
        time: 22,
        duration: 1,
        chordName: "G",
        keys: ["E5"],
        hand: "right",
        color: "#50C878",
      },
      {
        time: 23,
        duration: 2,
        chordName: "C",
        keys: ["C5"],
        hand: "right",
        color: "#4A90E2",
      },

      // 🎵 Left-hand bass pattern
      {
        time: 1,
        duration: 1.5,
        chordName: "C",
        keys: ["C3", "G3"],
        hand: "left",
        color: "#50C878",
      },
      {
        time: 3,
        duration: 1.5,
        chordName: "G",
        keys: ["G2", "D3"],
        hand: "left",
        color: "#50C878",
      },
      {
        time: 7,
        duration: 1.5,
        chordName: "C",
        keys: ["C3", "G3"],
        hand: "left",
        color: "#50C878",
      },
      {
        time: 9,
        duration: 1.5,
        chordName: "G",
        keys: ["G2", "D3"],
        hand: "left",
        color: "#50C878",
      },
      {
        time: 13,
        duration: 1.5,
        chordName: "F",
        keys: ["F2", "C3"],
        hand: "left",
        color: "#50C878",
      },
      {
        time: 20,
        duration: 1.5,
        chordName: "C",
        keys: ["C3", "G3"],
        hand: "left",
        color: "#50C878",
      },
    ],
  },

  // ========================================
  // 🎵 ROMANTIC SONG 3: FOREVER YOURS
  // ========================================
  {
    id: 'forever-yours',
    title: '🎵 Forever Yours',
    artist: 'iKeys Original',
    tempo: 100,
    duration: 76,
    difficulty: 'intermediate',
    chords: [
      // Intro (0-8s) - G - D - Em - C
      { time: 0, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 4, duration: 4, chordName: 'D', keys: ['D3', 'D4', 'F#4', 'A4'], hand: 'both', color: chordColors['D'], fingers: [1, 1, 3, 5] },

      // Verse 1 (8-24s)
      { time: 8, duration: 4, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 12, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 16, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 20, duration: 4, chordName: 'D', keys: ['D3', 'D4', 'F#4', 'A4'], hand: 'both', color: chordColors['D'], fingers: [1, 1, 3, 5] },

      // Pre-Chorus (24-32s)
      { time: 24, duration: 2, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 26, duration: 2, chordName: 'D', keys: ['D3', 'D4', 'F#4', 'A4'], hand: 'both', color: chordColors['D'], fingers: [1, 1, 3, 5] },
      { time: 28, duration: 2, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 30, duration: 2, chordName: 'D', keys: ['D3', 'D4', 'F#4', 'A4'], hand: 'both', color: chordColors['D'], fingers: [1, 1, 3, 5] },

      // Chorus (32-48s)
      { time: 32, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 36, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 40, duration: 4, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 44, duration: 4, chordName: 'D', keys: ['D3', 'D4', 'F#4', 'A4'], hand: 'both', color: chordColors['D'], fingers: [1, 1, 3, 5] },

      // Verse 2 (48-60s)
      { time: 48, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 52, duration: 4, chordName: 'D', keys: ['D3', 'D4', 'F#4', 'A4'], hand: 'both', color: chordColors['D'], fingers: [1, 1, 3, 5] },
      { time: 56, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },

      // Final Chorus (60-76s)
      { time: 60, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 64, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 68, duration: 4, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 72, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
    ],
    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'Verse 1', startTime: 8, endTime: 24 },
      { name: 'Pre-Chorus', startTime: 24, endTime: 32 },
      { name: 'Chorus', startTime: 32, endTime: 48 },
      { name: 'Verse 2', startTime: 48, endTime: 60 },
      { name: 'Final Chorus', startTime: 60, endTime: 76 },
    ],
  },


  // ========================================
  // 🎷 JAZZ SONG 3: BLUES IN C
  // ========================================
  {
    id: 'blues-in-c',
    title: '🎷 Blues in C',
    artist: 'iKeys Jazz',
    tempo: 100,
    duration: 72,
    difficulty: 'intermediate',
    chords: [
      // Blues Chorus 1 (0-24s) - Classic 12-bar blues
      { time: 0, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 4, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 8, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 12, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },

      { time: 16, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 20, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },

      // Blues Chorus 1 continued (24-48s)
      { time: 24, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 28, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },

      { time: 32, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 34, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 36, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 40, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 42, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },

      // Blues Chorus 2 (48-72s)
      { time: 48, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 52, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 56, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 60, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 64, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 66, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 68, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
    ],
    sections: [
      { name: 'Chorus 1 (Bars 1-4)', startTime: 0, endTime: 16 },
      { name: 'Chorus 1 (Bars 5-8)', startTime: 16, endTime: 32 },
      { name: 'Chorus 1 (Bars 9-12)', startTime: 32, endTime: 48 },
      { name: 'Chorus 2', startTime: 48, endTime: 72 },
    ],
  },

  // ========================================
  // 🎷 JAZZ SONG 4: BEBOP EXPRESS
  // ========================================
  {
    id: 'bebop-express',
    title: '🎷 Bebop Express',
    artist: 'iKeys Jazz',
    tempo: 140,
    duration: 56,
    difficulty: 'advanced',
    chords: [
      // Intro (0-8s) - Fast changes
      { time: 0, duration: 1, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 1, duration: 1, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 2, duration: 1, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 3, duration: 1, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 4, duration: 1, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 5, duration: 1, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 6, duration: 1, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 7, duration: 1, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },

      // A Section (8-24s) - Fast ii-V-I
      { time: 8, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 10, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 12, duration: 2, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 14, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      { time: 16, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 18, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 20, duration: 2, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 22, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      // B Section (24-40s)
      { time: 24, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 26, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 28, duration: 2, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 30, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },

      { time: 32, duration: 2, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 34, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 36, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 38, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Final Section (40-56s) - Fast ending
      { time: 40, duration: 2, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 42, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 44, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 46, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      { time: 48, duration: 1, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 49, duration: 1, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 50, duration: 1, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 51, duration: 1, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 52, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
    ],
    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'A Section', startTime: 8, endTime: 24 },
      { name: 'B Section', startTime: 24, endTime: 40 },
      { name: 'Ending', startTime: 40, endTime: 56 },
    ],
  },

]
