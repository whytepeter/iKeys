<template>
  <div class="relative">
    <button
      @click.stop="toggleDropdown"
      class="flex items-center gap-3 px-3 py-2 rounded-xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800 transition-colors"
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
      v-if="isOpen"
      @click.stop
      class="absolute top-full mt-2 right-0 w-64 bg-zinc-800 rounded-xl border border-zinc-700 shadow-xl z-50 py-2"
    >
      <!-- Authenticated User -->
      <div
        v-if="isAuthenticated"
        class="px-4 py-3 border-b border-zinc-700"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-br from-[#D97757] to-[#fb923c] flex items-center justify-center text-white font-semibold"
          >
            {{ userInitial }}
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-semibold text-white">{{
              username || 'User'
            }}</span>
            <span class="text-xs text-zinc-400">user@ikeys.app</span>
          </div>
        </div>
      </div>

      <!-- Guest User -->
      <div v-else class="px-4 py-3 border-b border-zinc-700">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-400 font-semibold"
          >
            G
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-semibold text-white">Guest</span>
            <span class="text-xs text-zinc-400">Not logged in</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="py-2">
        <button
          v-if="isAuthenticated"
          @click="handleLogout"
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
          @click="handleLogin"
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../stores/user';
import { useDropdown } from '../composables/useDropdown';

const userStore = useUserStore();
const { isOpen, toggle: toggleDropdown, close } = useDropdown();

const isAuthenticated = computed(() => userStore?.isAuthenticated ?? false);
const username = computed(() => userStore?.username);
const userInitial = computed(() =>
  isAuthenticated.value && username.value
    ? username.value[0].toUpperCase()
    : 'G'
);

function handleLogin() {
  userStore.setAuthenticated(true, 'John Doe');
  close();
}

function handleLogout() {
  userStore.setAuthenticated(false);
  close();
}
</script>

