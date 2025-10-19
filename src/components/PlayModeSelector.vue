<template>
  <div class="relative">
    <button
      @click.stop="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#D97757]/20 border border-[#D97757]/40 hover:bg-[#D97757]/30 transition-colors"
      title="Change play mode"
    >
      <span class="text-xs text-white font-medium">{{ currentModeLabel }}</span>
      <svg
        class="w-3 h-3 text-white/60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-if="isOpen"
      @click.stop
      class="absolute top-full mt-2 right-0 w-48 bg-zinc-800 rounded-xl border border-zinc-700 shadow-xl z-50 py-2"
    >
      <button
        v-for="mode in PLAY_MODE_OPTIONS"
        :key="mode.value"
        @click="selectMode(mode.value)"
        :class="[
          'w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-zinc-700/50 transition-colors',
          { 'bg-zinc-700/30': playMode === mode.value },
        ]"
      >
        <span class="text-lg">{{ mode.icon }}</span>
        <div class="flex flex-col">
          <span class="text-sm font-medium text-white">{{ mode.label }}</span>
          <span class="text-xs text-zinc-400">{{ mode.desc }}</span>
        </div>
        <svg
          v-if="playMode === mode.value"
          class="w-4 h-4 text-[#D97757] ml-auto"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { PLAY_MODE_OPTIONS } from '../constants';
// import { useDropdown } from '../composables/useDropdown';
import type { PlayMode } from '../types';

interface Props {
  playMode: PlayMode;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'update:play-mode': [mode: PlayMode];
}>();

// const { isOpen, toggle: toggleDropdown, close } = useDropdown();
const isOpen = ref(false);
const toggleDropdown = () => { isOpen.value = !isOpen.value; };
const close = () => { isOpen.value = false; };

const currentModeLabel = computed(() => {
  const mode = PLAY_MODE_OPTIONS.find((m) => m.value === props.playMode);
  return mode ? `${mode.icon} ${mode.label}` : '▶️ Auto Play';
});

function selectMode(mode: string) {
  emit('update:play-mode', mode as PlayMode);
  close();
}
</script>

