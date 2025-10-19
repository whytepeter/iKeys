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
    id: 'all-of-me',
    title: 'All of Me',
    artist: 'John Legend',
    tempo: 120,
    duration: 64, // Full verse-chorus-verse-chorus structure
    difficulty: 'intermediate',
    chords: [
      // ============ INTRO (0-8s) ============
      // Left hand: Em bass
      {
        time: 0,
        duration: 4,
        chordName: 'Em',
        keys: ['E3', 'G3', 'B3'],
        hand: 'left',
        color: chordColors['Em'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      // Right hand: Em melody
      {
        time: 0,
        duration: 2,
        chordName: 'Em',
        keys: ['E4', 'G4', 'B4'],
        hand: 'right',
        color: chordColors['Em'],
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [1.8, 1.9, 2.0],
      },

      // Left hand: C
      {
        time: 4,
        duration: 4,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: chordColors['C'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 4,
        duration: 2,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4'],
        hand: 'right',
        color: chordColors['C'],
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [1.8, 1.9, 2.0],
      },

      // ============ VERSE 1 (8-24s): "What would I do without your..." ============
      // Bar 1: Em
      {
        time: 8,
        duration: 4,
        chordName: 'Em',
        keys: ['E3', 'G3', 'B3'],
        hand: 'left',
        color: chordColors['Em'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 8,
        duration: 2,
        chordName: 'Em',
        keys: ['B4', 'E5', 'G5'],
        hand: 'right',
        color: chordColors['Em'],
        fingers: [1, 3, 5],
        noteDurations: [1.5, 1.8, 2.0],
      },

      // Bar 2: C
      {
        time: 12,
        duration: 4,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: chordColors['C'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 12,
        duration: 2,
        chordName: 'C',
        keys: ['E4', 'G4', 'C5'],
        hand: 'right',
        color: chordColors['C'],
        fingers: [1, 3, 5],
        noteDurations: [1.5, 1.8, 2.0],
      },

      // Bar 3: G
      {
        time: 16,
        duration: 4,
        chordName: 'G',
        keys: ['G3', 'B3', 'D4'],
        hand: 'left',
        color: chordColors['G'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 16,
        duration: 2,
        chordName: 'G',
        keys: ['D4', 'G4', 'B4'],
        hand: 'right',
        color: chordColors['G'],
        fingers: [1, 3, 5],
        noteDurations: [1.5, 1.8, 2.0],
      },

      // Bar 4: D
      {
        time: 20,
        duration: 4,
        chordName: 'D',
        keys: ['D3', 'F#3', 'A3'],
        hand: 'left',
        color: chordColors['D'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 20,
        duration: 2,
        chordName: 'D',
        keys: ['F#4', 'A4', 'D5'],
        hand: 'right',
        color: chordColors['D'],
        fingers: [1, 3, 5],
        noteDurations: [1.5, 1.8, 2.0],
      },

      // ============ VERSE 1 continued (24-40s) ============
      // "How many times do I have to tell you..."

      {
        time: 24,
        duration: 4,
        chordName: 'Em',
        keys: ['E3', 'G3', 'B3'],
        hand: 'left',
        color: chordColors['Em'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 24,
        duration: 2,
        chordName: 'Em',
        keys: ['E4', 'G4', 'B4'],
        hand: 'right',
        color: chordColors['Em'],
        fingers: [1, 3, 5],
        noteDurations: [1.5, 1.8, 2.0],
      },

      {
        time: 28,
        duration: 4,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: chordColors['C'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 28,
        duration: 2,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4'],
        hand: 'right',
        color: chordColors['C'],
        fingers: [1, 3, 5],
        noteDurations: [1.5, 1.8, 2.0],
      },

      {
        time: 32,
        duration: 4,
        chordName: 'G',
        keys: ['G3', 'B3', 'D4'],
        hand: 'left',
        color: chordColors['G'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 32,
        duration: 2,
        chordName: 'G',
        keys: ['G4', 'B4', 'D5'],
        hand: 'right',
        color: chordColors['G'],
        fingers: [1, 3, 5],
        noteDurations: [1.5, 1.8, 2.0],
      },

      {
        time: 36,
        duration: 4,
        chordName: 'D',
        keys: ['D3', 'F#3', 'A3'],
        hand: 'left',
        color: chordColors['D'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 36,
        duration: 2,
        chordName: 'D',
        keys: ['D4', 'F#4', 'A4'],
        hand: 'right',
        color: chordColors['D'],
        fingers: [1, 3, 5],
        noteDurations: [1.5, 1.8, 2.0],
      },

      // ============ CHORUS (40-56s): "Cause all of me..." ============

      {
        time: 40,
        duration: 4,
        chordName: 'Em',
        keys: ['E3', 'G3', 'B3'],
        hand: 'left',
        color: chordColors['Em'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 40,
        duration: 3,
        chordName: 'Em',
        keys: ['E4', 'G4', 'B4', 'E5'],
        hand: 'right',
        color: chordColors['Em'],
        fingers: [1, 2, 3, 5],
        noteOffsets: [0, 0.03, 0.06, 0.09],
        noteDurations: [2.5, 2.7, 2.9, 3.0],
      },

      {
        time: 44,
        duration: 4,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: chordColors['C'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 44,
        duration: 3,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4', 'C5'],
        hand: 'right',
        color: chordColors['C'],
        fingers: [1, 2, 3, 5],
        noteOffsets: [0, 0.03, 0.06, 0.09],
        noteDurations: [2.5, 2.7, 2.9, 3.0],
      },

      {
        time: 48,
        duration: 4,
        chordName: 'G',
        keys: ['G3', 'B3', 'D4'],
        hand: 'left',
        color: chordColors['G'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 48,
        duration: 3,
        chordName: 'G',
        keys: ['G4', 'B4', 'D5'],
        hand: 'right',
        color: chordColors['G'],
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [2.5, 2.7, 3.0],
      },

      {
        time: 52,
        duration: 4,
        chordName: 'D',
        keys: ['D3', 'F#3', 'A3'],
        hand: 'left',
        color: chordColors['D'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 52,
        duration: 3,
        chordName: 'D',
        keys: ['F#4', 'A4', 'D5'],
        hand: 'right',
        color: chordColors['D'],
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [2.5, 2.7, 3.0],
      },

      // ============ OUTRO/ENDING (56-64s) ============

      {
        time: 56,
        duration: 4,
        chordName: 'Em',
        keys: ['E3', 'G3', 'B3'],
        hand: 'left',
        color: chordColors['Em'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 56,
        duration: 3,
        chordName: 'Em',
        keys: ['E4', 'G4', 'B4'],
        hand: 'right',
        color: chordColors['Em'],
        fingers: [1, 3, 5],
        noteOffsets: [0, 0.03, 0.06],
        noteDurations: [2.5, 2.7, 3.0],
      },

      {
        time: 60,
        duration: 4,
        chordName: 'C',
        keys: ['C3', 'E3', 'G3'],
        hand: 'left',
        color: chordColors['C'],
        fingers: [5, 3, 1],
        noteDurations: [4, 4, 4],
      },

      {
        time: 60,
        duration: 4,
        chordName: 'C',
        keys: ['C4', 'E4', 'G4', 'C5'],
        hand: 'right',
        color: chordColors['C'],
        fingers: [1, 2, 3, 5],
        noteOffsets: [0, 0.04, 0.08, 0.12],
        noteDurations: [4, 4, 4, 4], // Final sustain
      },
    ],
    sections: [
      { name: 'Intro', startTime: 0, endTime: 8 },
      { name: 'Verse 1', startTime: 8, endTime: 40 },
      { name: 'Chorus', startTime: 40, endTime: 56 },
      { name: 'Outro', startTime: 56, endTime: 64 },
    ],
  },

]

