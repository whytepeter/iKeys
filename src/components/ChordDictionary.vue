<template>
  <div class="chord-dictionary">
    <!-- Filter -->
    <div class="filter-tabs">
      <button
        v-for="difficulty in ['all', 'easy', 'medium', 'hard']"
        :key="difficulty"
        @click="selectedDifficulty = difficulty"
        :class="['filter-tab', selectedDifficulty === difficulty && 'active']"
      >
        {{ difficulty.charAt(0).toUpperCase() + difficulty.slice(1) }}
      </button>
    </div>

    <!-- Chord Grid -->
    <div class="chord-grid">
      <div
        v-for="chord in filteredChords"
        :key="chord.symbol"
        class="chord-card"
        @click="selectChord(chord)"
        :class="{ selected: selectedChord?.symbol === chord.symbol }"
      >
        <div class="chord-header">
          <h3 class="chord-symbol">{{ chord.symbol }}</h3>
          <span class="chord-type-badge">{{ chord.type }}</span>
        </div>
        <p class="chord-name">{{ chord.name }}</p>

        <!-- Keys -->
        <div class="chord-keys-display">
          <span
            v-for="(key, i) in formatKeys(chord.keys)"
            :key="i"
            class="key-chip"
          >
            {{ key }}
          </span>
        </div>

        <!-- Fingers (if available) -->
        <div v-if="chord.fingers" class="chord-fingers">
          <span class="finger-label">Fingers:</span>
          <span class="finger-numbers">{{ chord.fingers.join("-") }}</span>
        </div>

        <!-- Play button -->
        <button @click.stop="playChord(chord)" class="play-chord-btn">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>
      </div>
    </div>

    <!-- Selected Chord Detail (Modal-like) -->
    <div
      v-if="selectedChord"
      class="chord-detail-overlay"
      @click="selectedChord = null"
    >
      <div class="chord-detail-card" @click.stop>
        <button @click="selectedChord = null" class="close-btn">✕</button>

        <h2 class="detail-chord-symbol">{{ selectedChord.symbol }}</h2>
        <p class="detail-chord-name">{{ selectedChord.name }}</p>

        <!-- Visual Piano -->
        <div class="mini-piano">
          <div
            v-for="key in miniPianoKeys"
            :key="key.note + key.octave"
            :class="[
              'mini-key',
              key.type,
              isKeyInChord(key, selectedChord) && 'highlighted',
            ]"
          >
            <span class="mini-key-label">{{ key.note }}</span>
          </div>
        </div>

        <!-- Keys and Fingers -->
        <div class="detail-info">
          <div class="info-row">
            <span class="info-label">Keys:</span>
            <span class="info-value">{{
              formatKeys(selectedChord.keys).join(" - ")
            }}</span>
          </div>
          <div v-if="selectedChord.fingers" class="info-row">
            <span class="info-label">Fingers:</span>
            <span class="info-value">{{
              selectedChord.fingers.join(" - ")
            }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Type:</span>
            <span class="info-value">{{ selectedChord.type }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Difficulty:</span>
            <span class="info-value">{{ selectedChord.difficulty }}</span>
          </div>
        </div>

        <button @click="playChord(selectedChord)" class="detail-play-btn">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play Chord
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { chordDictionary, getChordsByDifficulty } from "../data/chords";
import type { ChordDefinition } from "../types";
import { AudioEngine } from "../utils/audioEngine";

const emit = defineEmits<{
  playChord: [keys: string[]];
}>();

const selectedDifficulty = ref<"all" | "easy" | "medium" | "hard">("all");
const selectedChord = ref<ChordDefinition | null>(null);

const audioEngine = new AudioEngine();

const filteredChords = computed(() => {
  const allChords = Object.values(chordDictionary);
  if (selectedDifficulty.value === "all") {
    return allChords;
  }
  return getChordsByDifficulty(selectedDifficulty.value);
});

// Mini piano for visualization (1 octave)
const miniPianoKeys = [
  { note: "C", octave: 4, type: "white" },
  { note: "C#", octave: 4, type: "black" },
  { note: "D", octave: 4, type: "white" },
  { note: "D#", octave: 4, type: "black" },
  { note: "E", octave: 4, type: "white" },
  { note: "F", octave: 4, type: "white" },
  { note: "F#", octave: 4, type: "black" },
  { note: "G", octave: 4, type: "white" },
  { note: "G#", octave: 4, type: "black" },
  { note: "A", octave: 4, type: "white" },
  { note: "A#", octave: 4, type: "black" },
  { note: "B", octave: 4, type: "white" },
];

function formatKeys(keys: string[]): string[] {
  return keys.map((key) => key.replace(/\d+/, ""));
}

function isKeyInChord(
  key: { note: string; octave: number },
  chord: ChordDefinition
): boolean {
  return chord.keys.some((chordKey) => {
    const [note, octave] = [
      chordKey.replace(/\d+/, ""),
      parseInt(chordKey.match(/\d+/)?.[0] || "0"),
    ];
    return key.note === note && key.octave === octave;
  });
}

function selectChord(chord: ChordDefinition) {
  selectedChord.value = chord;
}

function playChord(chord: ChordDefinition) {
  // Emit the chord keys to highlight them on the main piano keyboard
  emit("playChord", chord.keys);

  // Play the audio
  chord.keys.forEach((key, index) => {
    setTimeout(() => {
      audioEngine.playNote(key, 1.5, 0.7);
    }, index * 50); // Slight stagger for arpeggio effect
  });
}
</script>

<style scoped>
.chord-dictionary {
  padding: 0;
  height: 100%;
  overflow-y: auto;
}

.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  border-bottom: 2px solid rgba(217, 119, 87, 0.2);
  padding-bottom: 12px;
}

.filter-tab {
  padding: 8px 16px;
  background: transparent;
  border: none;
  color: #9ca3af;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
}

.filter-tab:hover {
  background: rgba(217, 119, 87, 0.1);
  color: #e5e7eb;
}

.filter-tab.active {
  background: linear-gradient(135deg, #d97757, #fb923c);
  color: white;
}

.chord-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.chord-card {
  background: #2d2d2d;
  border: 1.5px solid rgba(217, 119, 87, 0.3);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chord-card:hover {
  border-color: #d97757;
  box-shadow: 0 4px 20px rgba(217, 119, 87, 0.4);
  transform: translateY(-2px);
  background: #353535;
}

.chord-card.selected {
  border-color: #d97757;
  background: rgba(217, 119, 87, 0.2);
  box-shadow: 0 4px 16px rgba(217, 119, 87, 0.25);
}

.chord-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chord-symbol {
  font-size: 28px;
  font-weight: 800;
  color: white;
  margin: 0;
}

.chord-type-badge {
  padding: 4px 8px;
  background: rgba(217, 119, 87, 0.2);
  color: #fb923c;
  font-size: 10px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
}

.chord-name {
  font-size: 13px;
  color: #d1d5db;
  margin: 0;
}

.chord-keys-display {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.key-chip {
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
}

.chord-fingers {
  display: flex;
  gap: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.finger-label {
  font-weight: 500;
}

.finger-numbers {
  color: #fb923c;
  font-weight: 600;
}

.play-chord-btn {
  padding: 8px 12px;
  background: linear-gradient(135deg, #d97757, #fb923c);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s;
  margin-top: auto;
}

.play-chord-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(217, 119, 87, 0.4);
}

/* Chord Detail Overlay */
.chord-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
}

.chord-detail-card {
  background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
  border: 2px solid #d97757;
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s;
}

.close-btn:hover {
  background: rgba(239, 68, 68, 0.8);
}

.detail-chord-symbol {
  font-size: 64px;
  font-weight: 900;
  color: #d97757;
  text-align: center;
  margin: 0 0 8px 0;
}

.detail-chord-name {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin: 0 0 24px 0;
}

/* Mini Piano */
.mini-piano {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100px;
  margin: 24px 0;
  gap: 2px;
  position: relative;
}

.mini-key {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 8px;
  transition: all 0.2s;
}

.mini-key.white {
  width: 32px;
  height: 100px;
  background: white;
  border: 2px solid #ccc;
  border-radius: 0 0 4px 4px;
  z-index: 1;
}

.mini-key.black {
  width: 20px;
  height: 65px;
  background: #1a1a1a;
  border: 2px solid #000;
  border-radius: 0 0 4px 4px;
  margin-left: -11px;
  margin-right: -11px;
  z-index: 2;
  color: white;
}

.mini-key.highlighted {
  background: linear-gradient(to bottom, #fb923c, #f97316);
  border-color: #d97757;
  box-shadow: 0 0 15px #d97757;
}

.mini-key-label {
  font-size: 10px;
  font-weight: 600;
}

.detail-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.info-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
}

.info-value {
  color: white;
  font-weight: 600;
}

.detail-play-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #d97757, #fb923c);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
}

.detail-play-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 24px rgba(217, 119, 87, 0.5);
}
</style>
