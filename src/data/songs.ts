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
    id: 'happy-birthday-advanced',
    title: 'Happy Birthday',
    artist: 'Traditional (Advanced Arrangement)',
    tempo: 100,
    duration: 28,
    difficulty: 'advanced',

    sections: [
      { name: 'Intro', startTime: 0, endTime: 4 },
      { name: 'Verse 1', startTime: 4, endTime: 10 },
      { name: 'Verse 2', startTime: 10, endTime: 16 },
      { name: 'Verse 3', startTime: 16, endTime: 22 },
      { name: 'Outro', startTime: 22, endTime: 28 }
    ],

    chords: [
      // === INTRO - Gentle rolled chords ===
      {
        time: 0,
        duration: 2,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3', 'C4'],
        hand: 'left',
        color: '#3B82F6',
        fingers: [5, 3, 2, 1],
        noteOffsets: [0, 0.05, 0.1, 0.15], // Rolled chord effect
        noteDurations: [2, 2, 2, 2.5]
      },
      {
        time: 0.2,
        duration: 2,
        chordName: 'C',
        keys: ['E4', 'G4', 'C5'],
        hand: 'right',
        color: '#3B82F6',
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.04, 0.08]
      },
      {
        time: 2,
        duration: 2,
        chordName: 'G7',
        keys: ['G2', 'B2', 'D3', 'F3'],
        hand: 'left',
        color: '#8B5CF6',
        fingers: [5, 4, 2, 1],
        noteOffsets: [0, 0.05, 0.1, 0.15]
      },
      {
        time: 2.2,
        duration: 1.8,
        chordName: 'G7',
        keys: ['D4', 'F4', 'B4'],
        hand: 'right',
        color: '#8B5CF6',
        fingers: [1, 2, 5]
      },

      // === VERSE 1: "Happy Birthday to you" ===
      // "Hap-py"
      {
        time: 4,
        duration: 0.6,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: '#3B82F6',
        fingers: [5, 3, 1]
      },
      {
        time: 4,
        duration: 0.6,
        chordName: 'C',
        keys: ['G4', 'C5'],
        hand: 'right',
        color: '#3B82F6',
        fingers: [2, 5],
        noteDurations: [0.4, 0.4] // Shorter, bouncy
      },

      // "birth-"
      {
        time: 4.6,
        duration: 0.4,
        chordName: 'C',
        keys: ['E4', 'G4'],
        hand: 'right',
        color: '#3B82F6',
        fingers: [1, 3]
      },

      // "-day"
      {
        time: 5,
        duration: 1,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: '#3B82F6'
      },
      {
        time: 5,
        duration: 1,
        chordName: 'C',
        keys: ['A4', 'C5', 'E5'],
        hand: 'right',
        color: '#3B82F6',
        fingers: [1, 3, 5]
      },

      // "to"
      {
        time: 6,
        duration: 0.6,
        chordName: 'F',
        keys: ['F2', 'A2', 'C3'],
        hand: 'left',
        color: '#10B981',
        fingers: [5, 3, 1]
      },
      {
        time: 6,
        duration: 0.6,
        chordName: 'F',
        keys: ['G4', 'C5'],
        hand: 'right',
        color: '#10B981',
        fingers: [2, 5]
      },

      // "you"
      {
        time: 6.6,
        duration: 1.4,
        chordName: 'F',
        keys: ['F2', 'A2', 'C3', 'F3'],
        hand: 'left',
        color: '#10B981',
        noteDurations: [1.4, 1.4, 1.4, 1.6]
      },
      {
        time: 6.6,
        duration: 1.4,
        chordName: 'F',
        keys: ['F4', 'A4', 'C5'],
        hand: 'right',
        color: '#10B981',
        fingers: [1, 3, 5]
      },

      // === VERSE 2: "Happy Birthday to you" (with variation) ===
      {
        time: 10,
        duration: 0.6,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: '#3B82F6'
      },
      {
        time: 10,
        duration: 0.6,
        chordName: 'C',
        keys: ['G4', 'C5', 'E5'],
        hand: 'right',
        color: '#3B82F6',
        fingers: [2, 4, 5],
        noteDurations: [0.4, 0.4, 0.4]
      },

      {
        time: 10.6,
        duration: 0.4,
        chordName: 'C',
        keys: ['E4', 'G4'],
        hand: 'right',
        color: '#3B82F6'
      },

      {
        time: 11,
        duration: 1,
        chordName: 'Cmaj7',
        keys: ['C3', 'E3', 'G3', 'B3'],
        hand: 'left',
        color: '#06B6D4',
        fingers: [5, 4, 2, 1]
      },
      {
        time: 11,
        duration: 1,
        chordName: 'Cmaj7',
        keys: ['A4', 'C5', 'E5'],
        hand: 'right',
        color: '#06B6D4',
        fingers: [1, 3, 5]
      },

      {
        time: 12,
        duration: 0.6,
        chordName: 'G7',
        keys: ['G2', 'B2', 'D3', 'F3'],
        hand: 'left',
        color: '#8B5CF6'
      },
      {
        time: 12,
        duration: 0.6,
        chordName: 'G7',
        keys: ['G4', 'B4', 'D5'],
        hand: 'right',
        color: '#8B5CF6',
        fingers: [1, 3, 5]
      },

      {
        time: 12.6,
        duration: 1.4,
        chordName: 'G7',
        keys: ['G2', 'B2', 'D3', 'F3'],
        hand: 'left',
        color: '#8B5CF6'
      },
      {
        time: 12.6,
        duration: 1.4,
        chordName: 'G7',
        keys: ['F4', 'B4', 'D5'],
        hand: 'right',
        color: '#8B5CF6',
        fingers: [1, 3, 5]
      },

      // === VERSE 3: "Happy Birthday dear [Name]" (most dramatic) ===
      {
        time: 16,
        duration: 0.6,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: '#3B82F6'
      },
      {
        time: 16,
        duration: 0.6,
        chordName: 'C',
        keys: ['G4', 'C5'],
        hand: 'right',
        color: '#3B82F6',
        noteDurations: [0.4, 0.4]
      },

      {
        time: 16.6,
        duration: 0.4,
        chordName: 'C',
        keys: ['E4', 'G4'],
        hand: 'right',
        color: '#3B82F6'
      },

      // Dramatic high note
      {
        time: 17,
        duration: 1,
        chordName: 'C7',
        keys: ['C3', 'E3', 'G3', 'Bb3'],
        hand: 'left',
        color: '#EF4444',
        fingers: [5, 4, 2, 1]
      },
      {
        time: 17,
        duration: 1,
        chordName: 'C7',
        keys: ['C5', 'E5', 'G5'],
        hand: 'right',
        color: '#EF4444',
        fingers: [1, 3, 5],
        noteDurations: [1, 1, 1.2] // Emphasize top note
      },

      // "dear"
      {
        time: 18,
        duration: 0.8,
        chordName: 'F',
        keys: ['F2', 'A2', 'C3', 'F3'],
        hand: 'left',
        color: '#10B981'
      },
      {
        time: 18,
        duration: 0.8,
        chordName: 'F',
        keys: ['A4', 'C5', 'F5'],
        hand: 'right',
        color: '#10B981',
        fingers: [1, 3, 5]
      },

      // "[Name]"
      {
        time: 18.8,
        duration: 1.2,
        chordName: 'Dm7',
        keys: ['D3', 'F3', 'A3', 'C4'],
        hand: 'left',
        color: '#F59E0B',
        fingers: [5, 3, 2, 1],
        noteOffsets: [0, 0.03, 0.06, 0.09] // Gentle roll
      },
      {
        time: 18.9,
        duration: 1.2,
        chordName: 'Dm7',
        keys: ['F4', 'A4', 'D5'],
        hand: 'right',
        color: '#F59E0B',
        fingers: [1, 3, 5]
      },

      // === FINAL VERSE: "Happy Birthday to you" (grand finale) ===
      {
        time: 22,
        duration: 0.6,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: '#3B82F6'
      },
      {
        time: 22,
        duration: 0.6,
        chordName: 'C',
        keys: ['G4', 'C5'],
        hand: 'right',
        color: '#3B82F6'
      },

      {
        time: 22.6,
        duration: 0.4,
        chordName: 'C',
        keys: ['E4', 'G4'],
        hand: 'right',
        color: '#3B82F6'
      },

      {
        time: 23,
        duration: 1,
        chordName: 'Am',
        keys: ['A2', 'C3', 'E3'],
        hand: 'left',
        color: '#EC4899',
        fingers: [5, 3, 1]
      },
      {
        time: 23,
        duration: 1,
        chordName: 'Am',
        keys: ['A4', 'C5', 'E5'],
        hand: 'right',
        color: '#EC4899',
        fingers: [1, 3, 5]
      },

      {
        time: 24,
        duration: 0.8,
        chordName: 'F',
        keys: ['F2', 'A2', 'C3'],
        hand: 'left',
        color: '#10B981'
      },
      {
        time: 24,
        duration: 0.8,
        chordName: 'F',
        keys: ['G4', 'C5'],
        hand: 'right',
        color: '#10B981'
      },

      // Final "you" with rich voicing
      {
        time: 24.8,
        duration: 2,
        chordName: 'C',
        keys: ['C2', 'C3', 'E3', 'G3'],
        hand: 'left',
        color: '#3B82F6',
        fingers: [5, 4, 2, 1],
        noteOffsets: [0, 0.05, 0.1, 0.15],
        noteDurations: [2.5, 2.5, 2.5, 2.5]
      },
      {
        time: 25,
        duration: 2,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4', 'C5'],
        hand: 'right',
        color: '#3B82F6',
        fingers: [1, 2, 3, 5],
        noteOffsets: [0, 0.04, 0.08, 0.12],
        noteDurations: [2.5, 2.5, 2.5, 3]
      },

      // === OUTRO - Final flourish ===
      {
        time: 26.5,
        duration: 1.5,
        chordName: 'C',
        keys: ['C2', 'G2', 'C3', 'E3', 'G3'],
        hand: 'both',
        color: '#3B82F6',
        noteOffsets: [0, 0.08, 0.16, 0.24, 0.32], // Dramatic arpeggio
        noteDurations: [2, 2, 2, 2, 2.5]
      }
    ],
  },

  // ========================================
  // 🎵 ROMANTIC SONG 1: HEARTS ENTWINED
  // ========================================
  {
    id: 'hearts-entwined',
    title: '🎵 Hearts Entwined',
    artist: 'iKeys Original',
    tempo: 95,
    duration: 80,
    difficulty: 'intermediate',
    chords: [
      // Intro (0-8s) - C - G - Am - F
      { time: 0, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 4, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Verse 1 (8-24s)
      { time: 8, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 12, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 16, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 20, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Pre-Chorus (24-32s)
      { time: 24, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 26, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 28, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 30, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Chorus (32-48s) - Powerful
      { time: 32, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
      { time: 36, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 40, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 44, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Verse 2 (48-64s)
      { time: 48, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 52, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 56, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 60, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },

      // Final Chorus (64-80s)
      { time: 64, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
      { time: 68, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 72, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 76, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
    ],
    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'Verse 1', startTime: 8, endTime: 24 },
      { name: 'Pre-Chorus', startTime: 24, endTime: 32 },
      { name: 'Chorus', startTime: 32, endTime: 48 },
      { name: 'Verse 2', startTime: 48, endTime: 64 },
      { name: 'Final Chorus', startTime: 64, endTime: 80 },
    ],
  },

  // ========================================
  // 🎵 ROMANTIC SONG 2: MOONLIGHT SERENADE
  // ========================================
  {
    id: 'moonlight-serenade',
    title: '🎵 Moonlight Serenade',
    artist: 'iKeys Original',
    tempo: 88,
    duration: 72,
    difficulty: 'intermediate',
    chords: [
      // Intro (0-8s) - Dm - Am - G - C
      { time: 0, duration: 4, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 4, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      // Verse 1 (8-24s)
      { time: 8, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 12, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 16, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 20, duration: 4, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },

      // Chorus (24-40s)
      { time: 24, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 28, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 32, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 36, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Bridge (40-56s)
      { time: 40, duration: 4, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 44, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 48, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 52, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      // Final Chorus (56-72s)
      { time: 56, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 60, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 64, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 68, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
    ],
    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'Verse', startTime: 8, endTime: 24 },
      { name: 'Chorus', startTime: 24, endTime: 40 },
      { name: 'Bridge', startTime: 40, endTime: 56 },
      { name: 'Final Chorus', startTime: 56, endTime: 72 },
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
  // 🎵 ROMANTIC SONG 4: ENDLESS DREAM
  // ========================================
  {
    id: 'endless-dream',
    title: '🎵 Endless Dream',
    artist: 'iKeys Original',
    tempo: 92,
    duration: 84,
    difficulty: 'intermediate',
    chords: [
      // Intro (0-8s) - F - C - Dm - Am
      { time: 0, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 4, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },

      // Verse 1 (8-24s)
      { time: 8, duration: 4, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 12, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 16, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 20, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Chorus (24-40s)
      { time: 24, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 28, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 32, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 36, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Verse 2 (40-56s)
      { time: 40, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 44, duration: 4, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 48, duration: 4, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 52, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },

      // Bridge (56-68s)
      { time: 56, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 60, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 64, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 66, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Final Chorus (68-84s)
      { time: 68, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
      { time: 72, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 76, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 80, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
    ],
    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'Verse 1', startTime: 8, endTime: 24 },
      { name: 'Chorus', startTime: 24, endTime: 40 },
      { name: 'Verse 2', startTime: 40, endTime: 56 },
      { name: 'Bridge', startTime: 56, endTime: 68 },
      { name: 'Final Chorus', startTime: 68, endTime: 84 },
    ],
  },

  // ========================================
  // 🎷 JAZZ SONG 1: SWING TIME
  // ========================================
  {
    id: 'swing-time',
    title: '🎷 Swing Time',
    artist: 'iKeys Jazz',
    tempo: 120,
    duration: 64,
    difficulty: 'intermediate',
    chords: [
      // Intro (0-8s) - Swing feel
      { time: 0, duration: 2, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 2, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 4, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 6, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // A Section (8-24s) - Classic ii-V-I
      { time: 8, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 10, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 12, duration: 2, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 14, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      { time: 16, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 18, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 20, duration: 2, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 22, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      // B Section (24-40s) - Bridge
      { time: 24, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 26, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 28, duration: 2, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 30, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      { time: 32, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 34, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 36, duration: 2, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 38, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },

      // Final A Section (40-56s)
      { time: 40, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 42, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 44, duration: 2, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 46, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      { time: 48, duration: 2, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 50, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 52, duration: 2, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 54, duration: 2, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },

      // Outro (56-64s)
      { time: 56, duration: 2, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 58, duration: 2, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 60, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4', 'C5'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 2, 3, 5] },
    ],
    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'A Section', startTime: 8, endTime: 24 },
      { name: 'B Section', startTime: 24, endTime: 40 },
      { name: 'Final A', startTime: 40, endTime: 56 },
      { name: 'Outro', startTime: 56, endTime: 64 },
    ],
  },

  // ========================================
  // 🎷 JAZZ SONG 2: BOSSA NOVA BREEZE
  // ========================================
  {
    id: 'bossa-nova-breeze',
    title: '🎷 Bossa Nova Breeze',
    artist: 'iKeys Jazz',
    tempo: 110,
    duration: 72,
    difficulty: 'intermediate',
    chords: [
      // Intro (0-8s) - Bossa feel
      { time: 0, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 4, duration: 4, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },

      // A Section (8-24s)
      { time: 8, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 12, duration: 4, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 16, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 20, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },

      // B Section (24-40s)
      { time: 24, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 28, duration: 4, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },
      { time: 32, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 36, duration: 4, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },

      // C Section (40-56s)
      { time: 40, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 44, duration: 4, chordName: 'C', keys: ['C3', 'C4', 'E4', 'G4'], hand: 'both', color: chordColors['C'], fingers: [1, 1, 3, 5] },
      { time: 48, duration: 4, chordName: 'F', keys: ['F3', 'F4', 'A4', 'C5'], hand: 'both', color: chordColors['F'], fingers: [1, 1, 3, 5] },
      { time: 52, duration: 4, chordName: 'Em', keys: ['E3', 'E4', 'G4', 'B4'], hand: 'both', color: chordColors['Em'], fingers: [1, 1, 2, 4] },

      // Final A (56-72s)
      { time: 56, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
      { time: 60, duration: 4, chordName: 'Dm', keys: ['D3', 'D4', 'F4', 'A4'], hand: 'both', color: chordColors['Dm'], fingers: [1, 1, 2, 4] },
      { time: 64, duration: 4, chordName: 'G', keys: ['G3', 'G4', 'B4', 'D5'], hand: 'both', color: chordColors['G'], fingers: [5, 1, 3, 5] },
      { time: 68, duration: 4, chordName: 'Am', keys: ['A3', 'A4', 'C5', 'E5'], hand: 'both', color: chordColors['Am'], fingers: [5, 1, 2, 4] },
    ],
    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'A Section', startTime: 8, endTime: 24 },
      { name: 'B Section', startTime: 24, endTime: 40 },
      { name: 'C Section', startTime: 40, endTime: 56 },
      { name: 'Final A', startTime: 56, endTime: 72 },
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
