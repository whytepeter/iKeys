<template>
  <div
    class="bg-black/80 backdrop-blur-xl rounded-2xl p-5 flex flex-col gap-4 text-white h-full overflow-y-auto"
  >
    <!-- Current Section -->
    <div
      v-if="currentSection"
      class="text-[13px] font-semibold text-white/70 uppercase tracking-wider text-center py-1.5 px-3 bg-[#D97757]/15 rounded-lg"
    >
      {{ currentSection }}
    </div>

    <!-- Current Chord Display -->
    <div class="flex justify-center" v-if="currentChord">
      <div
        class="p-6 rounded-2xl flex flex-col items-center gap-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full max-w-[240px]"
        :style="{ backgroundColor: currentChord.color }"
      >
        <div
          class="text-[40px] font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] font-['Inter'] leading-none"
        >
          {{ currentChord.chordName }}
        </div>
        <div class="flex gap-2 flex-wrap justify-center">
          <span
            v-for="(keyInfo, i) in formatKeysWithNotes(currentChord.keys)"
            :key="i"
            class="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-semibold text-white flex flex-col items-center gap-0.5"
          >
            <span class="text-base leading-none">{{ keyInfo.keyboard }}</span>
            <!-- <span class="text-[10px] opacity-80 leading-none">{{
              keyInfo.note
            }}</span> -->
          </span>
        </div>
        <div class="text-[13px] text-white/90 font-medium mt-1">
          {{ formatHand(currentChord.hand) }}
        </div>
      </div>
    </div>

    <!-- Next Chord Preview -->
    <div class="flex items-center gap-3 justify-center" v-if="nextChord">
      <div class="text-[13px] text-white/60 font-medium">Up Next</div>
      <div
        class="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border-2 flex flex-col items-center gap-1 flex-1"
        :style="{ borderColor: nextChord.color }"
      >
        <span
          class="text-xl font-bold leading-none"
          :style="{ color: nextChord.color }"
        >
          {{ nextChord.chordName }}
        </span>
        <div
          class="flex gap-1.5 text-[11px] text-white/70 flex-wrap justify-center"
        >
          <span
            v-for="(keyInfo, i) in formatKeysWithNotes(nextChord.keys)"
            :key="i"
            class="flex flex-col items-center"
          >
            <span class="text-sm font-bold text-white leading-none">{{
              keyInfo.keyboard
            }}</span>
            <!-- <span class="text-[9px] opacity-70 leading-none">{{
              keyInfo.note
            }}</span> -->
          </span>
        </div>
      </div>
    </div>

    <!-- Accuracy Display (Practice Mode) -->
    <div class="flex flex-col gap-2.5" v-if="chordMatch && showAccuracy">
      <div class="h-2 bg-white/20 rounded overflow-hidden">
        <div
          class="h-full rounded transition-all duration-300 ease-in-out"
          :style="{ width: `${chordMatch.accuracy}%` }"
          :class="{
            'bg-gradient-to-r from-green-500 to-green-600':
              chordMatch.accuracy >= 90,
            'bg-gradient-to-r from-lime-500 to-lime-600':
              chordMatch.accuracy >= 70 && chordMatch.accuracy < 90,
            'bg-gradient-to-r from-amber-500 to-orange-600':
              chordMatch.accuracy >= 50 && chordMatch.accuracy < 70,
            'bg-gradient-to-r from-red-500 to-red-600':
              chordMatch.accuracy < 50,
          }"
        ></div>
      </div>
      <div class="text-lg font-bold text-center text-white">
        {{ Math.round(chordMatch.accuracy) }}%
      </div>

      <!-- Missing Keys Indicator -->
      <div
        v-if="chordMatch.missingKeys.length > 0"
        class="flex items-center gap-2 px-3 py-2 bg-red-500/20 border border-red-500/40 rounded-lg text-[13px] text-red-300"
      >
        <span class="text-base">⚠️</span>
        Missing: {{ formatKeys(chordMatch.missingKeys).join(", ") }}
      </div>

      <!-- Extra Keys Indicator -->
      <div
        v-if="chordMatch.extraKeys.length > 0"
        class="flex items-center gap-2 px-3 py-2 bg-red-500/20 border border-red-500/40 rounded-lg text-[13px] text-red-300"
      >
        <span class="text-base">❌</span>
        Extra: {{ formatKeys(chordMatch.extraKeys).join(", ") }}
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="flex flex-col gap-2">
      <div class="h-1.5 bg-white/15 rounded-sm overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-[#D97757] to-[#fb923c] rounded-sm transition-all duration-100 linear"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
      <div class="text-xs text-white/60 text-center font-medium">
        {{ formatTime(currentTime) }} / {{ formatTime(totalDuration) }}
      </div>
    </div>

    <!-- Playback Controls -->
    <div class="flex flex-col gap-3 pt-3 border-t border-white/10">
      <!-- Transport Controls -->
      <div class="flex items-center justify-center gap-2">
        <button @click="$emit('stop')" class="control-btn stop" title="Stop">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="6" width="12" height="12" rx="2"></rect>
          </svg>
        </button>

        <button
          v-if="!isPlaying"
          @click="$emit('play')"
          class="control-btn play"
          title="Play"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </button>

        <button
          v-else
          @click="$emit('pause')"
          class="control-btn pause"
          title="Pause"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6zM14 4h4v16h-4z"></path>
          </svg>
        </button>

        <button
          @click="$emit('toggleLoop')"
          :class="['control-btn', 'loop', { active: loop }]"
          title="Loop"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M17 1l4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="M7 23l-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
        </button>
      </div>

      <!-- Play Mode -->
      <div class="text-[11px] text-center text-white/60 font-medium">
        {{ playModeLabel }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Chord, ChordMatch } from "../types";

interface Props {
  currentChord?: Chord | null;
  nextChord?: Chord | null;
  currentSection?: string;
  chordMatch?: ChordMatch | null;
  showAccuracy?: boolean;
  currentTime: number;
  totalDuration: number;
  isPlaying?: boolean;
  playMode?: string;
  loop?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showAccuracy: false,
  isPlaying: false,
  playMode: "auto",
  loop: false,
});

defineEmits<{
  play: [];
  pause: [];
  stop: [];
  toggleLoop: [];
}>();

const playModeLabel = computed(() => {
  const labels: Record<string, string> = {
    free: "🎹 Free Play",
    auto: "▶️ Auto Play",
    practice: "🎓 Practice",
    wait: "⏸️ Wait Mode",
  };
  return labels[props.playMode || "auto"] || "Auto Play";
});

const progress = computed(() => {
  if (props.totalDuration === 0) return 0;
  return (props.currentTime / props.totalDuration) * 100;
});

// Keyboard mapping for notes
const noteToKeyboardKey: Record<string, string> = {
  // Octave 3
  C3: "Q",
  "C#3": "2",
  D3: "W",
  "D#3": "3",
  E3: "E",
  F3: "R",
  "F#3": "5",
  G3: "T",
  "G#3": "6",
  A3: "Y",
  "A#3": "7",
  B3: "U",

  // Octave 4
  C4: "I", // Middle C
  "C#4": "9",
  D4: "O",
  "D#4": "0",
  E4: "P",
  F4: "Z",
  "F#4": "S",
  G4: "X",
  "G#4": "D",
  A4: "C",
  "A#4": "F",
  B4: "V",

  // Octave 5
  C5: "B",
  "C#5": "H",
  D5: "N",
  "D#5": "J",
  E5: "M",
  F5: ",",
  "F#5": "L",
  G5: ".",
  "G#5": ";",
  A5: "/",
};

function formatKeys(keys: string[]): string[] {
  return keys.map((key) => {
    const noteName = key.replace(/\d+/, "");
    const keyboardKey = noteToKeyboardKey[key];
    return keyboardKey ? keyboardKey : noteName;
  });
}

function formatKeysWithNotes(
  keys: string[]
): Array<{ keyboard: string; note: string }> {
  return keys.map((key) => {
    const noteName = key.replace(/\d+/, "");
    const keyboardKey = noteToKeyboardKey[key];
    return {
      keyboard: keyboardKey || "?",
      note: noteName,
    };
  });
}

function formatHand(hand: "left" | "right" | "both"): string {
  const handMap = {
    left: "Left Hand",
    right: "Right Hand",
    both: "Both Hands",
  };
  return handMap[hand];
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
</script>

<style scoped>
.control-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  color: white;
}

.control-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.control-btn:active {
  transform: scale(0.95);
}

.control-btn.play {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  width: 48px;
  height: 48px;
}

.control-btn.pause {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  width: 48px;
  height: 48px;
}

.control-btn.stop {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.control-btn.loop {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.control-btn.loop.active {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  box-shadow: 0 0 16px rgba(99, 102, 241, 0.5);
}
</style>
