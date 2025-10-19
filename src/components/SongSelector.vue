<template>
  <div class="song-selector">
    <h2 class="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-200">
      Choose a Song
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div
        v-for="song in songs"
        :key="song.id"
        :class="['song-card', { selected: currentSong?.id === song.id }]"
        @click="selectSong(song)"
      >
        <div class="song-icon">🎵</div>
        <h3 class="song-title">{{ song.title }}</h3>
        <p class="song-artist">{{ song.artist }}</p>
        <div class="song-tempo">♩ = {{ song.tempo }} BPM</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from "../types";

defineProps<{
  songs: Song[];
  currentSong: Song | null;
}>();

const emit = defineEmits<{
  selectSong: [song: Song];
}>();

const selectSong = (song: Song) => {
  emit("selectSong", song);
};
</script>

<style scoped>
.song-selector {
  width: 100%;
}

.song-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: 2px solid transparent;
}

.dark .song-card {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.song-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border-color: #3b82f6;
}

.song-card.selected {
  border-color: #3b82f6;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.dark .song-card.selected {
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
}

.song-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.song-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.dark .song-title {
  color: #f1f5f9;
}

.song-artist {
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 8px;
}

.dark .song-artist {
  color: #94a3b8;
}

.song-tempo {
  font-size: 0.75rem;
  color: #94a3b8;
  font-family: monospace;
}

.dark .song-tempo {
  color: #cbd5e1;
}
</style>
