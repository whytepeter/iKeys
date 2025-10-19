<template>
  <div class="falling-chords-container">
    <!-- Hit line - where chords should be played -->
    <div class="hit-line">
      <div class="hit-line-glow"></div>
    </div>

    <!-- Chord name labels (when multiple bars grouped) -->
    <div class="chord-labels">
      <div
        v-for="(label, index) in chordLabels"
        :key="index"
        class="chord-label"
        :style="getChordLabelStyle(label)"
      >
        {{ label.name }}
      </div>
    </div>

    <!-- Falling note bars (positioned above piano keys) -->
    <div class="notes-track">
      <!-- Create a bar for each individual note in each chord -->
      <div
        v-for="(noteBar, index) in allNoteBars"
        :key="index"
        class="note-bar"
        :style="getNoteBarStyle(noteBar)"
      >
        <div class="finger-number-top">{{ noteBar.finger }}</div>
      </div>
    </div>

    <!-- Next chord preview -->
    <div v-if="nextChord" class="next-chord-preview">
      <span class="preview-label">Next:</span>
      <span class="preview-chord">{{ formatChordPreview(nextChord) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Chord } from "../types";

interface Props {
  chords: Chord[];
  currentTime: number;
  isPlaying: boolean;
  speed: number;
}

const props = defineProps<Props>();

// Constants for visual layout
// Container height is managed by CSS (420px in App.vue)
const HIT_LINE_POSITION = 320; // pixels from top
const PIXELS_PER_SECOND = 100; // How fast notes fall
const LOOKAHEAD_TIME = 5; // Show notes up to 5 seconds ahead

// Piano key positions - PERFECTLY aligned with visual keyboard
// Keyboard layout: 15 white keys @ 50px each = 750px total
// White key centers: 25px, 75px, 125px, ... (every 50px)
// Black keys overlap between white keys with -16px margins
// Positions as percentage of total keyboard width for responsive layout
// Keyboard mapping for notes - Two-hand layout
const noteToKeyboardKey: Record<string, string> = {
  // Octave 3 (Left hand: ASDFGHJ with WETYU for black keys)
  C3: "A",
  "C#3": "W",
  D3: "S",
  "D#3": "E",
  E3: "D",
  F3: "F",
  "F#3": "T",
  G3: "G",
  "G#3": "Y",
  A3: "H",
  "A#3": "U",
  B3: "J",

  // Octave 4 (Right hand: KL;' with IOP] for black keys)
  C4: "K", // Middle C
  "C#4": "I",
  D4: "L",
  "D#4": "O",
  E4: ";",
  F4: "'",
  "F#4": "]",
  G4: "↵",

  // Octave 5 (Extended range: ZXCVBNM with Q2356 for black keys)
  C5: "Z",
  "C#5": "Q",
  D5: "X",
  "D#5": "2",
  E5: "C",
  F5: "V",
  "F#5": "3",
  G5: "B",
  "G#5": "5",
  A5: "N",
  "A#5": "6",
  B5: "M",
};

const keyPositions: Record<string, number> = {
  // ===== OCTAVE 3 =====
  // White keys (50px wide, centers at 25, 75, 125, 175, 225, 275, 325...)
  C3: 3.33, // Center at 25px / 750px
  D3: 10.0, // Center at 75px / 750px
  E3: 16.67, // Center at 125px / 750px
  F3: 23.33, // Center at 175px / 750px
  G3: 30.0, // Center at 225px / 750px
  A3: 36.67, // Center at 275px / 750px
  B3: 43.33, // Center at 325px / 750px

  // Black keys (32px wide, positioned between white keys)
  "C#3": 6.67, // Between C3 and D3
  "D#3": 13.33, // Between D3 and E3
  "F#3": 26.67, // Between F3 and G3
  "G#3": 33.33, // Between G3 and A3
  "A#3": 40.0, // Between A3 and B3

  // ===== OCTAVE 4 =====
  C4: 50.0, // Center at 375px / 750px (Middle C)
  D4: 56.67, // Center at 425px / 750px
  E4: 63.33, // Center at 475px / 750px
  F4: 70.0, // Center at 525px / 750px
  G4: 76.67, // Center at 575px / 750px
  A4: 83.33, // Center at 625px / 750px
  B4: 90.0, // Center at 675px / 750px

  // Black keys
  "C#4": 53.33, // Between C4 and D4
  "D#4": 60.0, // Between D4 and E4
  "F#4": 73.33, // Between F4 and G4
  "G#4": 80.0, // Between G4 and A4
  "A#4": 86.67, // Between A4 and B4

  // ===== OCTAVE 5 =====
  C5: 96.67, // Center at 725px / 750px

  // Extended range (for songs that use lower/higher notes)
  A2: -10.0,
  "A#2": -6.67,
  B2: -3.33,
  "C#5": 100.0,
  D5: 103.33,
  "D#5": 106.67,
  E5: 110.0,
  F5: 113.33,
  "F#5": 116.67,
  G5: 120.0,
};

interface NoteBar {
  note: string;
  startTime: number;
  duration: number;
  color: string;
  finger: number;
  position: number; // horizontal position percentage
  chordName?: string;
}

interface ChordLabel {
  name: string;
  time: number;
  color: string;
  avgPosition: number;
}

// Convert chords into individual note bars with positions
const allNoteBars = computed(() => {
  const bars: NoteBar[] = [];

  props.chords.forEach((chord) => {
    // Get per-note durations or use default
    const durations =
      chord.noteDurations || chord.keys.map(() => chord.duration);
    const offsets = chord.noteOffsets || chord.keys.map(() => 0);

    chord.keys.forEach((key, index) => {
      const noteDuration = durations[index] || chord.duration;
      const noteOffset = offsets[index] || 0;
      const noteStartTime = chord.time + noteOffset;
      const noteEnd = noteStartTime + noteDuration;

      // Only show notes that are currently visible
      const isVisible =
        noteStartTime <= props.currentTime + LOOKAHEAD_TIME &&
        noteEnd >= props.currentTime - 0.5;

      if (isVisible) {
        const position = keyPositions[key] || 50; // Default to center if key not found
        bars.push({
          note: key,
          startTime: noteStartTime,
          duration: noteDuration,
          color: chord.color,
          finger: chord.fingers?.[index] || index + 1,
          position: position,
          chordName: chord.chordName,
        });
      }
    });
  });

  return bars;
});

// Create chord labels for chords with multiple notes
const chordLabels = computed(() => {
  const labels: ChordLabel[] = [];

  props.chords.forEach((chord) => {
    // Only show labels for chords (2+ keys) that are visible
    if (chord.keys.length > 1) {
      const noteEnd = chord.time + chord.duration;
      const isVisible =
        chord.time <= props.currentTime + LOOKAHEAD_TIME &&
        noteEnd >= props.currentTime - 0.5;

      if (isVisible) {
        // Calculate average position of all keys in the chord
        const positions = chord.keys.map((key) => keyPositions[key] || 50);
        const avgPosition =
          positions.reduce((a, b) => a + b, 0) / positions.length;

        labels.push({
          name: chord.chordName,
          time: chord.time,
          color: chord.color,
          avgPosition: avgPosition,
        });
      }
    }
  });

  return labels;
});

// Get the next upcoming chord
const nextChord = computed(() => {
  const upcoming = props.chords.filter(
    (chord) => chord.time > props.currentTime
  );
  return upcoming.length > 0 ? upcoming[0] : null;
});

// Calculate style for each note bar
function getNoteBarStyle(noteBar: NoteBar) {
  const timeUntilNote = noteBar.startTime - props.currentTime;
  const distanceFromHitLine = timeUntilNote * PIXELS_PER_SECOND * props.speed;
  const top = HIT_LINE_POSITION - distanceFromHitLine;

  // Height based on duration (how long to hold)
  const height = noteBar.duration * PIXELS_PER_SECOND * props.speed;

  // Determine if this note is active (at hit line)
  const isActive = Math.abs(timeUntilNote) < 0.2;
  const isApproaching = timeUntilNote > 0 && timeUntilNote < 1;

  // Opacity based on distance
  const opacity = Math.min(
    1,
    Math.max(0.5, 1 - Math.abs(timeUntilNote) / LOOKAHEAD_TIME)
  );

  return {
    top: `${top}px`,
    left: `${noteBar.position}%`,
    height: `${Math.max(40, height)}px`,
    backgroundColor: noteBar.color,
    opacity,
    boxShadow: isActive
      ? `0 0 20px ${noteBar.color}, 0 0 30px ${noteBar.color}`
      : isApproaching
      ? `0 0 10px ${noteBar.color}`
      : `0 2px 8px rgba(0, 0, 0, 0.4)`,
    border: isActive
      ? `3px solid rgba(255, 255, 255, 0.9)`
      : `2px solid rgba(255, 255, 255, 0.3)`,
    transform: isActive ? "scale(1.1)" : "scale(1)",
  };
}

// Format chord preview to show keyboard keys
function formatChordPreview(chord: Chord): string {
  if (chord.keys.length === 1) {
    const keyboardKey = NOTE_TO_KEYBOARD_KEY[chord.keys[0]];
    return keyboardKey || chord.chordName;
  }
  return chord.chordName;
}

// Calculate style for chord labels
function getChordLabelStyle(label: ChordLabel) {
  const timeUntilChord = label.time - props.currentTime;
  const distanceFromHitLine = timeUntilChord * PIXELS_PER_SECOND * props.speed;
  const top = HIT_LINE_POSITION - distanceFromHitLine - 30; // Position above the bars

  // Opacity based on distance
  const opacity = Math.min(
    1,
    Math.max(0.6, 1 - Math.abs(timeUntilChord) / LOOKAHEAD_TIME)
  );

  return {
    top: `${top}px`,
    left: `${label.avgPosition}%`,
    color: label.color,
    opacity,
  };
}
</script>

<style scoped>
.falling-chords-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #1a1a1a 0%, #2d2d2d 100%);
  overflow: hidden;
  border-radius: 12px;
}

.hit-line {
  position: absolute;
  top: 320px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent,
    #d97757,
    #d97757,
    transparent
  );
  z-index: 10;
  box-shadow: 0 0 20px rgba(217, 119, 87, 0.8);
}

.hit-line-glow {
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  height: 24px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(217, 119, 87, 0.3),
    rgba(217, 119, 87, 0.3),
    transparent
  );
}

.chord-labels {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1400px;
  max-width: 100%;
  height: 100%;
  pointer-events: none;
}

.chord-label {
  position: absolute;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 800;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.8);
  font-family: "Inter", sans-serif;
  letter-spacing: 0.5px;
  padding: 4px 10px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  white-space: nowrap;
}

.notes-track {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1400px;
  max-width: 100%;
  height: 100%;
}

.note-bar {
  position: absolute;
  width: 32px;
  transform: translateX(-50%);
  border-radius: 6px 6px 4px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 2px;
  transition: all 0.15s ease;
  backdrop-filter: blur(3px);
  box-sizing: border-box;
}

.finger-number-top {
  width: 18px;
  height: 18px;
  min-height: 18px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  flex-shrink: 0;
}

.next-chord-preview {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 20;
}

.preview-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 500;
}

.preview-chord {
  color: white;
  font-size: 18px;
  font-weight: 700;
  color: #d97757;
}
</style>
