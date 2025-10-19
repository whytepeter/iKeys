<template>
  <div class="w-full h-full p-5 overflow-y-auto">
    <!-- Tabs -->
    <div class="flex gap-2 mb-6 border-b-2 border-[#D97757]/20 pb-3">
      <button
        :class="[
          'flex items-center gap-2 px-4 py-2.5 rounded-lg border-none font-semibold text-[15px] cursor-pointer transition-all duration-200',
          activeTab === 'songs'
            ? 'bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white'
            : 'bg-transparent text-zinc-400 hover:bg-[#D97757]/10 hover:text-zinc-200',
        ]"
        @click="activeTab = 'songs'"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
        Songs
        <span
          :class="[
            'inline-flex items-center justify-center min-w-[24px] h-6 px-2 rounded-xl text-xs font-bold',
            activeTab === 'songs'
              ? 'bg-white/30 text-white'
              : 'bg-white/20 text-zinc-400',
          ]"
        >
          {{ songs.length }}
        </span>
      </button>
      <button
        :class="[
          'flex items-center gap-2 px-4 py-2.5 rounded-lg border-none font-semibold text-[15px] cursor-pointer transition-all duration-200',
          activeTab === 'recordings'
            ? 'bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white'
            : 'bg-transparent text-zinc-400 hover:bg-[#D97757]/10 hover:text-zinc-200',
        ]"
        @click="activeTab = 'recordings'"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
        Recordings
        <span
          :class="[
            'inline-flex items-center justify-center min-w-[24px] h-6 px-2 rounded-xl text-xs font-bold',
            activeTab === 'recordings'
              ? 'bg-white/30 text-white'
              : 'bg-white/20 text-zinc-400',
          ]"
        >
          {{ recordings.length }}
        </span>
      </button>
    </div>

    <!-- Songs Grid -->
    <div
      v-if="activeTab === 'songs'"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div
        v-for="song in songs"
        :key="song.id"
        :class="[
          'flex flex-col gap-3 p-5 rounded-xl border-[1.5px] cursor-pointer transition-all duration-200 relative min-h-[200px]',
          currentSong?.id === song.id
            ? 'border-[#D97757] bg-[#D97757]/15 shadow-[0_4px_20px_rgba(217,119,87,0.4)]'
            : 'border-[#D97757]/30 bg-[#2d2d2d] hover:border-[#D97757] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(217,119,87,0.3)]',
        ]"
        @click="selectSong(song)"
      >
        <svg
          class="w-12 h-12 text-[#D97757] mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
        <div class="flex-1 flex flex-col gap-2">
          <h3 class="text-xl font-extrabold m-0 text-white leading-tight">
            {{ song.title }}
          </h3>
          <p class="text-sm m-0 text-white/70">{{ song.artist }}</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
            >
              {{ song.tempo }} BPM
            </span>
            <span
              :class="[
                'px-3 py-1.5 rounded-lg text-xs font-semibold',
                song.difficulty === 'beginner'
                  ? 'bg-green-500/20 text-green-500'
                  : song.difficulty === 'intermediate'
                  ? 'bg-orange-500/20 text-orange-500'
                  : 'bg-red-500/20 text-red-500',
              ]"
            >
              {{ song.difficulty }}
            </span>
            <span
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
            >
              {{ song.chords.length }} chords
            </span>
          </div>
        </div>
        <div
          v-if="currentSong?.id === song.id"
          class="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white text-[11px] font-bold shadow-[0_2px_8px_rgba(217,119,87,0.4)]"
        >
          ✓ Playing
        </div>
      </div>
    </div>

    <!-- Recordings Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div
        v-if="recordings.length === 0"
        class="col-span-full flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div class="text-6xl mb-4 opacity-50">🎙️</div>
        <h3 class="text-2xl text-zinc-200 mb-2">No Recordings Yet</h3>
        <p class="text-zinc-400 max-w-md">
          Press the record button to start capturing your piano performances!
        </p>
      </div>
      <div
        v-for="recording in recordings"
        :key="recording.id"
        :class="[
          'flex flex-col gap-3 p-5 rounded-xl border-[1.5px] transition-all duration-200 relative min-h-[200px]',
          currentRecording?.id === recording.id
            ? 'border-[#D97757] bg-[#D97757]/15 shadow-[0_4px_16px_rgba(217,119,87,0.25)]'
            : 'border-[#D97757]/30 bg-[#2d2d2d] hover:border-[#D97757] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(217,119,87,0.3)]',
        ]"
      >
        <div class="flex justify-between items-start">
          <svg
            class="w-12 h-12 text-[#D97757]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
          <button
            @click.stop="deleteRecording(recording.id)"
            class="p-2 rounded-lg border border-red-500/30 bg-red-500/10 cursor-pointer text-lg transition-all duration-200 hover:bg-red-500/25 hover:border-red-500 hover:scale-110"
            title="Delete"
          >
            🗑️
          </button>
        </div>
        <div
          class="flex-1 flex flex-col gap-2 cursor-pointer"
          @click="playRecording(recording)"
        >
          <h3 class="text-xl font-extrabold m-0 text-white leading-tight">
            {{ recording.title }}
          </h3>
          <p class="text-sm m-0 text-white/70">
            {{ formatDate(recording.date) }}
          </p>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
            >
              ⏱️ {{ formatDuration(recording.duration) }}
            </span>
            <span
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
            >
              🎵 {{ recording.notes.length }} notes
            </span>
          </div>
        </div>
        <button
          @click="playRecording(recording)"
          :class="[
            'w-full py-3 rounded-xl border-none bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white text-xl font-semibold cursor-pointer transition-all duration-200 shadow-[0_2px_8px_rgba(217,119,87,0.3)] hover:scale-105 hover:shadow-[0_4px_12px_rgba(217,119,87,0.5)]',
            isPlaying && currentRecording?.id === recording.id
              ? 'animate-pulse-slow'
              : '',
          ]"
        >
          {{ isPlaying && currentRecording?.id === recording.id ? "⏸️" : "▶️" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { Song } from "../types";
import { RecordingStorage, type Recording } from "../utils/recordingEngine";

defineProps<{
  songs: Song[];
  currentSong: Song | null;
  currentRecording?: Recording | null;
  isPlaying?: boolean;
}>();

const emit = defineEmits<{
  selectSong: [song: Song];
  playRecording: [recording: Recording];
}>();

const activeTab = ref<"songs" | "recordings">("songs");
const recordings = ref<Recording[]>([]);

const loadRecordings = () => {
  recordings.value = RecordingStorage.getAll();
};

const selectSong = (song: Song) => {
  emit("selectSong", song);
};

const playRecording = (recording: Recording) => {
  emit("playRecording", recording);
};

const deleteRecording = (id: string) => {
  if (confirm("Are you sure you want to delete this recording?")) {
    RecordingStorage.delete(id);
    loadRecordings();
  }
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

onMounted(() => {
  loadRecordings();
});

// Reload recordings when tab switches to recordings
watch(activeTab, (newTab) => {
  if (newTab === "recordings") {
    loadRecordings();
  }
});
</script>

<style scoped>
/* Custom pulse animation */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}
</style>
