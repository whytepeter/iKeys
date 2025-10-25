<template>
  <div class="space-y-2 piano-container">
    <div class="piano-keyboard" :style="{ '--white-count': whiteCount }">
      <div
        v-for="key in pianoKeys"
        :key="key.note + key.octave"
        :class="[
          key.type === 'white' ? 'white-key' : 'black-key',
          {
            active: isKeyPressed(key),
            'chord-highlight': isKeyInActiveChord(key),
            'chord-preview': isKeyInNextChord(key),
            correct: isKeyCorrect(key),
            missing: isKeyMissing(key),
          },
        ]"
        :style="getKeyStyle(key)"
        @mousedown="(e: Event) => handleMouseDown(key, e)"
        @mouseup="handleMouseUp(key)"
        @mouseleave="handleMouseUp(key)"
        @touchstart.prevent="(e: Event) => handleMouseDown(key, e)"
        @touchend.prevent="handleMouseUp(key)"
      >
        <span class="key-label">{{ key.note }}</span>
        <span v-if="key.keyboardKey" class="keyboard-hint">{{
          key.keyboardKey
        }}</span>
      </div>
    </div>
    <p class="text-[0.6rem] text-zinc-700 text-center">
      I built this app because I wanted to play <b>All of Me</b> by John Legend
      to my girlfriend <b>Edisemi</b> 💕😊
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PianoKey, Chord, ChordMatch } from "../types";

interface Props {
  activeKeys?: string[];
  currentChord?: Chord | null;
  nextChord?: Chord | null;
  chordMatch?: ChordMatch | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  keyDown: [note: string];
  keyUp: [note: string];
}>();

// Piano keys configuration - QWERTY Layout (Intuitive!)
// White keys span across QWERTY rows: Q-U, I-V, B-/
// Two-hand layout: Left hand (A-J) = Octave 3, Right hand (K-') = Octave 4
// White keys on home row, black keys on row above
const pianoKeys: PianoKey[] = [
  // ===== OCTAVE 3 (Left hand: ASDFGHJ with WETYU for black keys) =====
  { note: "C", octave: 3, type: "white", keyboardKey: "A", frequency: 130.81 },
  { note: "C#", octave: 3, type: "black", keyboardKey: "W", frequency: 138.59 },
  { note: "D", octave: 3, type: "white", keyboardKey: "S", frequency: 146.83 },
  { note: "D#", octave: 3, type: "black", keyboardKey: "E", frequency: 155.56 },
  { note: "E", octave: 3, type: "white", keyboardKey: "D", frequency: 164.81 },
  { note: "F", octave: 3, type: "white", keyboardKey: "F", frequency: 174.61 },
  { note: "F#", octave: 3, type: "black", keyboardKey: "T", frequency: 185.0 },
  { note: "G", octave: 3, type: "white", keyboardKey: "G", frequency: 196.0 },
  { note: "G#", octave: 3, type: "black", keyboardKey: "Y", frequency: 207.65 },
  { note: "A", octave: 3, type: "white", keyboardKey: "H", frequency: 220.0 },
  { note: "A#", octave: 3, type: "black", keyboardKey: "U", frequency: 233.08 },
  { note: "B", octave: 3, type: "white", keyboardKey: "J", frequency: 246.94 },

  // ===== OCTAVE 4 (Right hand: KL;' with IOP] for black keys) =====
  { note: "C", octave: 4, type: "white", keyboardKey: "K", frequency: 261.63 },
  { note: "C#", octave: 4, type: "black", keyboardKey: "I", frequency: 277.18 },
  { note: "D", octave: 4, type: "white", keyboardKey: "L", frequency: 293.66 },
  { note: "D#", octave: 4, type: "black", keyboardKey: "O", frequency: 311.13 },
  { note: "E", octave: 4, type: "white", keyboardKey: ";", frequency: 329.63 },
  { note: "F", octave: 4, type: "white", keyboardKey: "'", frequency: 349.23 },
  { note: "F#", octave: 4, type: "black", keyboardKey: "]", frequency: 369.99 },
  {
    note: "G",
    octave: 4,
    type: "white",
    keyboardKey: "Enter",
    frequency: 392.0,
  },

  // ===== OCTAVE 5 (Extended range: ZXCV with QB for black keys) =====
  { note: "C", octave: 5, type: "white", keyboardKey: "Z", frequency: 523.25 },
  { note: "C#", octave: 5, type: "black", keyboardKey: "Q", frequency: 554.37 },
  { note: "D", octave: 5, type: "white", keyboardKey: "X", frequency: 587.33 },
  { note: "D#", octave: 5, type: "black", keyboardKey: "2", frequency: 622.25 },
  { note: "E", octave: 5, type: "white", keyboardKey: "C", frequency: 659.25 },
  { note: "F", octave: 5, type: "white", keyboardKey: "V", frequency: 698.46 },
  { note: "F#", octave: 5, type: "black", keyboardKey: "3", frequency: 739.99 },
  { note: "G", octave: 5, type: "white", keyboardKey: "B", frequency: 783.99 },
  { note: "G#", octave: 5, type: "black", keyboardKey: "5", frequency: 830.61 },
  { note: "A", octave: 5, type: "white", keyboardKey: "N", frequency: 880.0 },
  { note: "A#", octave: 5, type: "black", keyboardKey: "6", frequency: 932.33 },
  { note: "B", octave: 5, type: "white", keyboardKey: "M", frequency: 987.77 },
];

// Check if a key is currently pressed by user
const isKeyPressed = (key: PianoKey) => {
  const noteName = `${key.note}${key.octave}`;
  return props.activeKeys?.includes(noteName) || false;
};

// Check if key is part of the active chord (should be played now)
const isKeyInActiveChord = (key: PianoKey) => {
  if (!props.currentChord) return false;
  const noteName = `${key.note}${key.octave}`;
  return props.currentChord.keys.includes(noteName);
};

// Check if key is part of the next upcoming chord (preview)
const isKeyInNextChord = (key: PianoKey) => {
  if (!props.nextChord) return false;
  const noteName = `${key.note}${key.octave}`;
  return props.nextChord.keys.includes(noteName);
};

// Check if key is correctly pressed (for practice mode feedback)
const isKeyCorrect = (key: PianoKey) => {
  if (!props.chordMatch) return false;
  const noteName = `${key.note}${key.octave}`;
  return props.chordMatch.matchedKeys.includes(noteName);
};

// Check if key is missing (should be pressed but isn't)
const isKeyMissing = (key: PianoKey) => {
  if (!props.chordMatch) return false;
  const noteName = `${key.note}${key.octave}`;
  return props.chordMatch.missingKeys.includes(noteName);
};

// Get dynamic styling for chord highlighting
const getKeyStyle = (key: PianoKey) => {
  if (props.currentChord && isKeyInActiveChord(key)) {
    return {
      backgroundColor: props.currentChord.color,
      boxShadow: `0 0 20px ${props.currentChord.color}`,
    };
  }
  return {};
};

const handleMouseDown = (key: PianoKey, e: Event) => {
  e.preventDefault();
  const noteName = `${key.note}${key.octave}`;
  emit("keyDown", noteName);
};

const handleMouseUp = (key: PianoKey) => {
  const noteName = `${key.note}${key.octave}`;
  emit("keyUp", noteName);
};

// Number of white keys (used for responsive sizing)
const whiteCount = pianoKeys.filter((k) => k.type === "white").length;
</script>

<style scoped>
.piano-container {
  width: 100%;
  padding: 15px 0;
  background: linear-gradient(to bottom, #f5f5f5, #ffffff);
  border-top: 3px solid #e5e5e5;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
}

.piano-keyboard {
  /* Desktop / large screens: keep original layout and sizing */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  height: 200px;
  max-width: 1400px;
  margin: 0 auto;
}

.white-key,
.black-key {
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 15px;
  gap: 8px;
}

.white-key {
  width: 50px;
  height: 200px;
  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);
  border: 2px solid #d0d0d0;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.black-key {
  width: 32px;
  height: 130px;
  background: linear-gradient(to bottom, #1a1a1a 0%, #000000 100%);
  border: 2px solid #000;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  margin-left: -16px;
  margin-right: -16px;
  z-index: 2;
  color: white;
}

/* Responsive styles for small screens: make keys scale and allow horizontal scroll */
@media (max-width: 1024px) {
  .piano-keyboard {
    /* responsive height: adapt to viewport but keep reasonable min/max */
    height: clamp(140px, 20vh, 220px);
    width: 100%;
    max-width: none;
    margin: 0 auto;
    padding: 0 8px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .white-key {
    /* size white keys proportionally to container and number of white keys */
    flex: 0 0 calc(100% / var(--white-count));
    min-width: 36px;
    max-width: 80px;
    height: 100%;
  }

  .black-key {
    /* black keys are smaller and overlap white keys */
    flex: 0 0 calc((100% / var(--white-count)) * 0.64);
    min-width: 22px;
    max-width: 56px;
    height: 65%;
    margin-left: calc((100% / var(--white-count)) * -0.32);
    margin-right: calc((100% / var(--white-count)) * -0.32);
  }
}

/* Pressed by user */
.white-key.active {
  background: linear-gradient(to bottom, #fed7aa 0%, #fdba74 50%, #fb923c 100%);
  transform: translateY(2px);
  box-shadow: 0 4px 12px rgba(251, 146, 60, 0.4),
    inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.black-key.active {
  background: linear-gradient(to bottom, #fdba74 0%, #fb923c 50%, #f97316 100%);
  transform: translateY(2px);
  box-shadow: 0 4px 12px rgba(251, 146, 60, 0.4);
}

/* Part of active chord (should be played now) */
.white-key.chord-highlight {
  animation: pulse-chord 0.6s ease-in-out infinite;
  border: 3px solid #d97757;
}

.black-key.chord-highlight {
  animation: pulse-chord 0.6s ease-in-out infinite;
  border: 3px solid #d97757;
}

/* Part of next chord (preview) */
.white-key.chord-preview {
  box-shadow: 0 0 15px rgba(217, 119, 87, 0.4);
  border: 2px solid rgba(217, 119, 87, 0.5);
}

.black-key.chord-preview {
  box-shadow: 0 0 15px rgba(217, 119, 87, 0.4);
  border: 2px solid rgba(217, 119, 87, 0.5);
}

/* Correct key in practice mode */
.white-key.correct {
  background: linear-gradient(to bottom, #86efac, #4ade80);
  border-color: #22c55e;
}

.black-key.correct {
  background: linear-gradient(to bottom, #4ade80, #16a34a);
  border-color: #22c55e;
}

/* Missing key (should be pressed) */
.white-key.missing {
  background: linear-gradient(to bottom, #fde047, #facc15);
  border-color: #eab308;
  animation: pulse-missing 0.5s ease-in-out infinite;
}

.black-key.missing {
  background: linear-gradient(to bottom, #facc15, #eab308);
  border-color: #eab308;
  animation: pulse-missing 0.5s ease-in-out infinite;
}

@keyframes pulse-chord {
  0%,
  100% {
    box-shadow: 0 0 20px currentColor;
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 40px currentColor;
    opacity: 0.85;
  }
}

@keyframes pulse-missing {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.key-label {
  font-size: 14px;
  font-weight: 600;
  color: inherit;
  opacity: 0.7;
}

.keyboard-hint {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  background: rgba(217, 119, 87, 0.15);
  color: #d97757;
  border-radius: 4px;
  opacity: 0.8;
}

.black-key .keyboard-hint {
  background: rgba(217, 119, 87, 0.3);
  color: #fb923c;
}

.white-key:hover,
.black-key:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}
</style>
