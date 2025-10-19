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
            v-for="(key, i) in formatKeys(currentChord.keys)"
            :key="i"
            class="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-semibold text-white"
          >
            {{ key }}
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
        <div class="flex gap-1.5 text-[11px] text-white/70">
          <span v-for="(key, i) in formatKeys(nextChord.keys)" :key="i">
            {{ key }}
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
}

const props = withDefaults(defineProps<Props>(), {
  showAccuracy: false,
});

const progress = computed(() => {
  if (props.totalDuration === 0) return 0;
  return (props.currentTime / props.totalDuration) * 100;
});

function formatKeys(keys: string[]): string[] {
  return keys.map((key) => key.replace(/\d+/, ""));
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
