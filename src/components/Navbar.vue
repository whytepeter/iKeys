<template>
  <header
    class="border-b sticky h-[4.5rem] top-0 left-0 w-full border-zinc-800 bg-zinc-900/80 backdrop-blur-sm z-50"
  >
    <div
      class="flex items-center justify-between px-2 py-2 mx-auto md:px-6 max-w-7xl"
    >
      <!-- Logo -->
      <div
        :class="[currentSong ? 'hidden md:flex' : 'flex']"
        class="items-center gap-3"
      >
        <div class="text-3xl">🎹</div>
        <div>
          <h1
            class="text-2xl font-bold bg-gradient-to-r from-[#D97757] to-[#fb923c] bg-clip-text text-transparent"
          >
            iKeys
          </h1>
          <p class="text-xs text-zinc-400">Learn chords. Play songs.</p>
        </div>
      </div>

      <!-- Playback Controls (shown when song is active) -->
      <div
        v-if="currentSong"
        class="flex items-center gap-2 px-4 py-2 md:gap-4 rounded-xl"
      >
        <!-- Transport Controls -->
        <div class="flex items-center gap-2">
          <button
            @click="$emit('stop')"
            class="nav-control-btn stop"
            title="Stop"
          >
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
        <div class="w-px h-8 bg-zinc-700"></div>

        <!-- Play Mode Selector -->
        <div class="relative">
          <button
            :class="[currentSong ? 'px-1 py-1.5' : 'px-3 py-2']"
            @click.stop="$emit('toggle-play-mode-menu')"
            class="flex items-center gap-2 rounded-lg bg-[#D97757]/20 border border-[#D97757]/40 hover:bg-[#D97757]/30 transition-colors"
            title="Change play mode"
          >
            <span class="text-xs font-medium text-white truncate">{{
              playModeLabel
            }}</span>
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

          <!-- Play Mode Dropdown -->
          <div
            v-if="showPlayModeMenu"
            @click.stop
            class="absolute right-0 z-50 w-48 py-2 mt-2 border shadow-xl top-full bg-zinc-800 rounded-xl border-zinc-700"
          >
            <button
              v-for="mode in playModeOptions"
              :key="mode.value"
              @click="$emit('select-play-mode', mode.value)"
              :class="[
                'w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-zinc-700/50 transition-colors',
                { 'bg-zinc-700/30': playMode === mode.value },
              ]"
            >
              <span class="text-lg">{{ mode.icon }}</span>
              <div class="flex flex-col">
                <span class="text-sm font-medium text-white">{{
                  mode.label
                }}</span>
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

        <!-- Divider -->
        <div class="w-px h-8 bg-zinc-700"></div>

        <!-- Close Button -->
        <button
          @click="$emit('close-song')"
          class="transition-colors text-zinc-400 hover:text-red-500"
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

      <!-- User Profile -->
      <div class="relative">
        <button
          @click.stop="$emit('toggle-user-menu')"
          :class="[currentSong ? 'p-1 gap-1' : 'px-3 py-2 gap-3']"
          class="flex items-center transition-colors border rounded-xl bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800"
          title="User profile"
        >
          <div
            class="w-8 h-8 rounded-full bg-gradient-to-br from-[#D97757] to-[#fb923c] flex items-center justify-center text-white font-semibold text-sm"
          >
            {{ userInitial }}
          </div>
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

        <!-- User Dropdown -->
        <div
          v-if="showUserMenu"
          @click.stop
          class="absolute right-0 z-50 w-64 py-2 mt-2 border shadow-xl top-full bg-zinc-800 rounded-xl border-zinc-700"
        >
          <div
            v-if="isUserAuthenticated"
            class="px-4 py-3 border-b border-zinc-700"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[#D97757] to-[#fb923c] flex items-center justify-center text-white font-semibold"
              >
                {{ userInitial }}
              </div>
              <div class="flex flex-col flex-1 min-w-0">
                <span class="text-sm font-semibold text-white truncate">{{
                  userName || "User"
                }}</span>
                <p class="text-xs truncate text-zinc-400">
                  {{ userEmail || "user@ikeys.app" }}
                </p>
              </div>
            </div>
          </div>

          <div v-else class="px-4 py-3 border-b border-zinc-700">
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-10 h-10 font-semibold rounded-full bg-zinc-700 text-zinc-400"
              >
                G
              </div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-white">Guest</span>
                <span class="text-xs text-zinc-400">Not logged in</span>
              </div>
            </div>
          </div>

          <div class="py-2">
            <button
              v-if="isUserAuthenticated"
              @click="$emit('logout')"
              class="w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-zinc-700/50 transition-colors text-red-400 hover:text-red-300"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span class="text-sm font-medium">Logout</span>
            </button>

            <button
              v-else
              @click="$emit('login')"
              class="w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-zinc-700/50 transition-colors text-[#D97757] hover:text-[#fb923c]"
            >
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span class="text-sm font-medium">Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Song, PlayMode } from "../types";

interface Props {
  currentSong: Song | null;
  isPlaying: boolean;
  loop: boolean;
  playMode: PlayMode;
  playModeOptions: Array<{
    value: PlayMode;
    label: string;
    icon: string;
    desc: string;
  }>;
  showPlayModeMenu: boolean;
  showUserMenu: boolean;
  isUserAuthenticated: boolean;
  userInitial: string;
  userName?: string;
  userEmail?: string;
}

const props = defineProps<Props>();

defineEmits<{
  (e: "stop"): void;
  (e: "play"): void;
  (e: "pause"): void;
  (e: "toggle-loop"): void;
  (e: "toggle-play-mode-menu"): void;
  (e: "select-play-mode", mode: PlayMode): void;
  (e: "close-song"): void;
  (e: "toggle-user-menu"): void;
  (e: "logout"): void;
  (e: "login"): void;
}>();

const playModeLabel = computed(() => {
  const mode = props.playModeOptions.find((m) => m.value === props.playMode);
  return mode ? `${mode.icon} ${mode.label}` : "▶️ Auto Play";
});
</script>

<style scoped>
/* Navbar control buttons */
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
