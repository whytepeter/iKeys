<template>
  <div class="h-full overflow-y-auto p-5">
    <!-- Settings Title -->
    <h2
      class="text-3xl font-extrabold text-white mb-6 pb-4 border-b-2 border-[#D97757]/30"
    >
      Settings
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- LEFT COLUMN: Play Mode Selection -->
      <div class="flex flex-col gap-5">
        <section
          class="flex flex-col gap-4 bg-[#1f1f1f]/60 border-[1.5px] border-[#D97757]/30 rounded-2xl p-5"
        >
          <h3 class="text-[15px] font-semibold text-white/75 m-0">Play Mode</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              v-for="mode in playModes"
              :key="mode.value"
              :class="[
                'p-5 rounded-xl border-[1.5px] cursor-pointer transition-all duration-200',
                'flex flex-col items-center text-center',
                playMode === mode.value
                  ? 'border-[#D97757] bg-gradient-to-br from-[#D97757] to-[#f97316] text-white'
                  : 'border-zinc-700 bg-zinc-800/50 text-zinc-200 hover:border-[#D97757] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(249,115,22,0.15)]',
              ]"
              @click="$emit('update:playMode', mode.value)"
            >
              <svg
                class="w-6 h-6 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  v-if="mode.value === 'free'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
                <path
                  v-else-if="mode.value === 'auto'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span class="text-sm font-semibold mb-1">{{ mode.label }}</span>
              <p class="text-xs opacity-70 m-0 leading-snug">
                {{ mode.description }}
              </p>
            </button>
          </div>
        </section>

        <!-- Loop Option -->
        <section
          class="flex flex-col gap-4 bg-[#1f1f1f]/60 border-[1.5px] border-[#D97757]/30 rounded-2xl p-5"
        >
          <h3 class="text-[15px] font-semibold text-white/75 m-0">Options</h3>
          <button
            :class="[
              'flex items-center gap-3.5 p-4 rounded-xl border-[1.5px] cursor-pointer transition-all duration-200 text-left w-full',
              loop
                ? 'border-[#D97757] bg-gradient-to-br from-[#D97757] to-[#f97316] text-white'
                : 'border-zinc-700 bg-zinc-800/50 text-zinc-200 hover:border-[#D97757] hover:translate-x-0.5',
            ]"
            @click="$emit('update:loop', !loop)"
          >
            <svg
              class="w-5 h-5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <div class="flex-1 flex flex-col gap-0.5">
              <span class="text-sm font-semibold">Loop Mode</span>
              <span class="text-xs opacity-70">Repeat song continuously</span>
            </div>
            <span
              :class="[
                'text-xs font-bold px-3 py-1 rounded-lg',
                loop ? 'bg-white/20 text-white' : 'bg-zinc-700 text-zinc-400',
              ]"
            >
              {{ loop ? "ON" : "OFF" }}
            </span>
          </button>
        </section>
      </div>

      <!-- RIGHT COLUMN: Other Settings -->
      <div class="flex flex-col gap-5">
        <!-- Tempo Control -->
        <section
          class="flex flex-col gap-4 bg-[#1f1f1f]/60 border-[1.5px] border-[#D97757]/30 rounded-2xl p-5"
        >
          <h3 class="text-[15px] font-semibold text-white/75 m-0">Tempo</h3>
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-zinc-400">Speed</span>
              <span class="text-base font-semibold text-[#D97757] font-mono"
                >{{ tempo }}%</span
              >
            </div>
            <input
              type="range"
              min="50"
              max="150"
              :value="tempo"
              @input="updateTempo"
              class="claude-slider"
            />
            <div class="flex justify-between text-xs text-zinc-400">
              <span>Slow</span>
              <span>Normal</span>
              <span>Fast</span>
            </div>
          </div>
        </section>

        <!-- Volume Control -->
        <section
          class="flex flex-col gap-4 bg-[#1f1f1f]/60 border-[1.5px] border-[#D97757]/30 rounded-2xl p-5"
        >
          <h3 class="text-[15px] font-semibold text-white/75 m-0">Volume</h3>
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <span class="text-sm text-zinc-400">Level</span>
              <span class="text-base font-semibold text-[#D97757] font-mono"
                >{{ volume }}%</span
              >
            </div>
            <input
              type="range"
              min="0"
              max="100"
              :value="volume"
              @input="updateVolume"
              class="claude-slider"
            />
            <div class="flex justify-between text-xs text-zinc-400">
              <span>Muted</span>
              <span>Max</span>
            </div>
          </div>
        </section>

        <!-- Hand Mode Selection -->
        <section
          class="flex flex-col gap-4 bg-[#1f1f1f]/60 border-[1.5px] border-[#D97757]/30 rounded-2xl p-5"
        >
          <h3 class="text-[15px] font-semibold text-white/75 m-0">
            Hand Selection
          </h3>
          <div class="flex gap-2">
            <button
              v-for="hand in ['left', 'right', 'both']"
              :key="hand"
              :class="[
                'flex-1 py-3 px-4 rounded-xl border-[1.5px] text-sm font-semibold cursor-pointer transition-all duration-200',
                handMode === hand
                  ? 'border-[#D97757] bg-gradient-to-br from-[#D97757] to-[#f97316] text-white'
                  : 'border-zinc-700 bg-zinc-800/50 text-zinc-200 hover:border-[#D97757] hover:-translate-y-0.5',
              ]"
              @click="$emit('update:handMode', hand as HandMode)"
            >
              {{
                hand === "left"
                  ? "Left Hand"
                  : hand === "right"
                  ? "Right Hand"
                  : "Both Hands"
              }}
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlayMode, HandMode } from "../types";

defineProps<{
  playMode: PlayMode;
  tempo: number;
  volume: number;
  loop: boolean;
  handMode?: HandMode;
}>();

const emit = defineEmits<{
  "update:playMode": [value: PlayMode];
  "update:tempo": [value: number];
  "update:volume": [value: number];
  "update:loop": [value: boolean];
  "update:handMode": [value: HandMode];
}>();

const playModes = [
  {
    value: "free",
    label: "Free Play",
    description: "Play any chords freely",
  },
  {
    value: "auto",
    label: "Auto Play",
    description: "Watch chords play automatically",
  },
  {
    value: "practice",
    label: "Practice",
    description: "Follow along with feedback",
  },
  {
    value: "wait",
    label: "Wait Mode",
    description: "Song pauses until correct chord",
  },
];

const updateTempo = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:tempo", Number(target.value));
};

const updateVolume = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:volume", Number(target.value));
};
</script>

<style scoped>
/* Custom slider styles - not easily done with Tailwind utilities */
.claude-slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #3f3f46;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.claude-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d97757 0%, #f97316 100%);
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(249, 115, 22, 0.3);
  transition: transform 0.2s;
}

.claude-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 3px 8px rgba(249, 115, 22, 0.4);
}

.claude-slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d97757 0%, #f97316 100%);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(249, 115, 22, 0.3);
}
</style>
