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
    id: "john-legend-all-of-me",
    title: "All of Me",
    artist: "John Legend",
    tempo: 63.0,
    duration: 251.428571,
    difficulty: "intermediate",
    sections: [
      { name: "Intro", startTime: 0.0, endTime: 15.238095 },
      { name: "Verse 1", startTime: 15.238095, endTime: 45.714286 },
      { name: "Pre-Chorus", startTime: 45.714286, endTime: 60.952381 },
      { name: "Chorus", startTime: 60.952381, endTime: 91.428571 },
      { name: "Verse 2", startTime: 91.428571, endTime: 121.904762 },
      { name: "Pre-Chorus", startTime: 121.904762, endTime: 137.142857 },
      { name: "Chorus", startTime: 137.142857, endTime: 167.619048 },
      { name: "Bridge", startTime: 167.619048, endTime: 198.095238 },
      { name: "Final Chorus", startTime: 198.095238, endTime: 243.809524 },
      { name: "Outro", startTime: 243.809524, endTime: 251.428571 }
    ],
    chords: [
      {
        time: 0.0,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 3.809524,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 7.619048,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 11.428571,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 15.238095,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 19.047619,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 22.857143,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 26.666667,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 30.47619,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 34.285714,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 38.095238,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 41.904762,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 45.714286,
        duration: 3.809524,
        chordName: "Am",
        keys: ["A3", "E4", "A4", "C5"],
        hand: "both",
        color: "#9C6EFF",
        fingers: [5, 1, 3, 5],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 49.52381,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 53.333333,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 57.142857,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 60.952381,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 64.761905,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 68.571429,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 72.380952,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 76.190476,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 80.0,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 83.809524,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 87.619048,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 91.428571,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 95.238095,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 99.047619,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 102.857143,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 106.666667,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 110.47619,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 114.285714,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 118.095238,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 121.904762,
        duration: 3.809524,
        chordName: "Am",
        keys: ["A3", "E4", "A4", "C5"],
        hand: "both",
        color: "#9C6EFF",
        fingers: [5, 1, 3, 5],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 125.714286,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 129.52381,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 133.333333,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 137.142857,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 140.952381,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 144.761905,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 148.571429,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 152.380952,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 156.190476,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 160.0,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 163.809524,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 167.619048,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 171.428571,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 175.238095,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 179.047619,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 182.857143,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 186.666667,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 190.47619,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 194.285714,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 198.095238,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 201.904762,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 205.714286,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 209.52381,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 213.333333,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 217.142857,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 220.952381,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 224.761905,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 228.571429,
        duration: 3.809524,
        chordName: "Em",
        keys: ["E3", "B3", "E4", "G4", "B4"],
        hand: "both",
        color: "#3AB0FF",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 232.380952,
        duration: 3.809524,
        chordName: "C",
        keys: ["C3", "G3", "C4", "E4", "G4"],
        hand: "both",
        color: "#FF9B3A",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 236.190476,
        duration: 3.809524,
        chordName: "G",
        keys: ["G2", "D3", "G3", "B3", "D4"],
        hand: "both",
        color: "#3AFF88",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
      },
      {
        time: 240.0,
        duration: 3.809524,
        chordName: "D",
        keys: ["D3", "A3", "D4", "F#4", "A4"],
        hand: "both",
        color: "#FF3A72",
        fingers: [5, 2, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524]
      },
      {
        time: 243.809524,
        duration: 3.809524,
        chordName: "Gmaj7",
        keys: ["G2", "D3", "F#3", "B3", "D4", "F#4"],
        hand: "both",
        color: "#3AFFFF",
        fingers: [5, 2, 4, 1, 2, 4],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2, 0.25]
      },
      {
        time: 247.619048,
        duration: 3.809524,
        chordName: "G6",
        keys: ["G2", "D3", "E4", "B4", "D5"],
        hand: "both",
        color: "#2EE6D6",
        fingers: [5, 2, 1, 4, 5],
        noteDurations: [3.809524, 3.809524, 3.809524, 3.809524, 3.809524],
        noteOffsets: [0.0, 0.05, 0.1, 0.15, 0.2]
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

