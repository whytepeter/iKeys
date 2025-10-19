<template>
  <div
    v-if="currentSong"
    class="flex items-center gap-4 bg-zinc-800/50 px-4 py-2 rounded-xl border border-zinc-700"
  >
    <!-- Transport Controls -->
    <div class="flex items-center gap-2">
      <button @click="$emit('stop')" class="nav-control-btn stop" title="Stop">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="6" width="12" height="12" rx="2"></rect>
        </svg>
      </button>

      <button
        v-if="!isPlaying"
        @click="$emit('play')"
        class="nav-control-btn play"
        title="Play"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"></path>
        </svg>
      </button>

      <button
        v-else
        @click="$emit('pause')"
        class="nav-control-btn pause"
        title="Pause"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 4h4v16H6zM14 4h4v16h-4z"></path>
        </svg>
      </button>

      <button
        @click="$emit('toggle-loop')"
        :class="[
          'nav-control-btn',
          'loop',
          { active: loop, inactive: !loop },
        ]"
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

    <!-- Divider -->
    <div class="h-8 w-px bg-zinc-700"></div>

    <!-- Play Mode Selector -->
    <PlayModeSelector
      :play-mode="playMode"
      @update:play-mode="$emit('update:play-mode', $event)"
    />

    <!-- Divider -->
    <div class="h-8 w-px bg-zinc-700"></div>

    <!-- Close Button -->
    <button
      @click="$emit('close-song')"
      class="text-zinc-400 hover:text-red-500 transition-colors"
      title="Close Song"
    >
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M18 6L6 18M6 6l12 12"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Song, PlayMode } from '../types';
import PlayModeSelector from './PlayModeSelector.vue';

interface Props {
  currentSong: Song | null;
  isPlaying: boolean;
  loop: boolean;
  playMode: PlayMode;
}

defineProps<Props>();

defineEmits<{
  play: [];
  pause: [];
  stop: [];
  'toggle-loop': [];
  'update:play-mode': [mode: PlayMode];
  'close-song': [];
}>();
</script>

<style scoped>
.nav-control-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.nav-control-btn:hover {
  transform: scale(1.05);
}

.nav-control-btn:active {
  transform: scale(0.95);
}

.nav-control-btn.play {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  width: 44px;
  height: 44px;
}

.nav-control-btn.pause {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  width: 44px;
  height: 44px;
}

.nav-control-btn.stop {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.nav-control-btn.loop {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  opacity: 0.4;
  transition: opacity 0.2s ease;
}

.nav-control-btn.loop.active {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.5);
  opacity: 1;
}

.nav-control-btn.loop.inactive {
  opacity: 0.4;
}
</style>

