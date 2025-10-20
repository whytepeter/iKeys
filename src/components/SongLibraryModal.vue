<template>
  <div class="w-full h-full p-5 overflow-y-auto">
    <!-- Search Bar -->
    <div class="mb-6">
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search songs..."
          class="w-full px-4 py-3 pl-12 rounded-xl bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:border-[#D97757] transition-colors"
        />
        <svg
          class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex gap-2 mb-6 border-b-2 border-[#D97757]/20 pb-3">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="[
          'flex items-center gap-2 px-4 py-2.5 rounded-lg border-none font-semibold text-[15px] cursor-pointer transition-all duration-200',
          activeTab === tab.id
            ? 'bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white'
            : 'bg-transparent text-zinc-400 hover:bg-[#D97757]/10 hover:text-zinc-200',
        ]"
        @click="activeTab = tab.id"
      >
        <component :is="'span'" v-html="tab.icon"></component>
        {{ tab.label }}
        <span
          :class="[
            'inline-flex items-center justify-center min-w-[24px] h-6 px-2 rounded-xl text-xs font-bold',
            activeTab === tab.id
              ? 'bg-white/30 text-white'
              : 'bg-white/20 text-zinc-400',
          ]"
        >
          {{ tab.count }}
        </span>
      </button>
    </div>

    <!-- Community Tab -->
    <div
      v-if="activeTab === 'community'"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <!-- Loading State -->
      <div
        v-if="
          recordingsStore.isLoadingPublishedSongs &&
          filteredCommunity.length === 0
        "
        class="col-span-full flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div class="loading-spinner mb-4"></div>
        <h3 class="text-xl text-zinc-200 mb-2">Loading Community Songs...</h3>
        <p class="text-zinc-400 max-w-md">
          Please wait while we fetch the latest songs
        </p>
      </div>
      <!-- Empty State -->
      <div
        v-else-if="filteredCommunity.length === 0"
        class="col-span-full flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div class="text-6xl mb-4 opacity-50">🎵</div>
        <h3 class="text-2xl text-zinc-200 mb-2">No Community Songs Found</h3>
        <p class="text-zinc-400 max-w-md">
          {{
            searchQuery
              ? "Try adjusting your search query"
              : "No published songs available yet. Be the first to share!"
          }}
        </p>
      </div>
      <div
        v-for="item in filteredCommunity"
        :key="isRegularSong(item) ? item.id : item.$id"
        :class="[
          'flex flex-col gap-3 p-5 rounded-xl border-[1.5px] cursor-pointer transition-all duration-200 relative min-h-[200px]',
          (isRegularSong(item) && currentSong?.id === item.id) ||
          (!isRegularSong(item) && currentRecording?.id === item.$id)
            ? 'border-[#D97757] bg-[#D97757]/15 shadow-[0_4px_20px_rgba(217,119,87,0.4)]'
            : 'border-[#D97757]/30 bg-[#2d2d2d] hover:border-[#D97757] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(217,119,87,0.3)]',
        ]"
        @click="handleSongOrRecordingClick(item)"
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
            :d="
              isRegularSong(item)
                ? 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
                : 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
            "
          />
        </svg>

        <div class="flex-1 flex flex-col gap-2">
          <h3 class="text-xl font-extrabold m-0 text-white leading-tight">
            {{ item.title }}
          </h3>
          <p class="text-sm m-0 text-white/70">
            {{ isRegularSong(item) ? item.artist : `by ${item.userName}` }}
          </p>
          <div class="flex flex-wrap gap-2 mt-2">
            <!-- Regular Song Details -->
            <template v-if="isRegularSong(item)">
              <span
                class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
              >
                {{ item.tempo }} BPM
              </span>
              <span
                :class="[
                  'px-3 py-1.5 rounded-lg text-xs font-semibold',
                  item.difficulty === 'beginner'
                    ? 'bg-green-500/20 text-green-500'
                    : item.difficulty === 'intermediate'
                    ? 'bg-orange-500/20 text-orange-500'
                    : 'bg-red-500/20 text-red-500',
                ]"
              >
                {{ item.difficulty }}
              </span>
              <span
                class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
              >
                {{ item.chords.length }} chords
              </span>
            </template>
            <!-- Published Recording Details -->
            <template v-else>
              <span
                class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
              >
                ⏱️ {{ formatDuration(item.duration) }}
              </span>
              <span
                class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
              >
                🎵 {{ item.notes.length }} notes
              </span>
            </template>
          </div>
        </div>
        <div
          v-if="
            (isRegularSong(item) && currentSong?.id === item.id) ||
            (!isRegularSong(item) && currentRecording?.id === item.$id)
          "
          class="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white text-[11px] font-bold shadow-[0_2px_8px_rgba(217,119,87,0.4)]"
        >
          ✓ Playing
        </div>
      </div>
    </div>

    <!-- Songs Tab (Romantic & Jazz) -->
    <div
      v-if="activeTab === 'songs'"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <!-- Empty State -->
      <div
        v-if="filteredSongs.length === 0"
        class="col-span-full flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div class="text-6xl mb-4 opacity-50">🎵</div>
        <h3 class="text-2xl text-zinc-200 mb-2">No Songs Found</h3>
        <p class="text-zinc-400 max-w-md">
          {{
            searchQuery
              ? "Try adjusting your search query"
              : "No songs available"
          }}
        </p>
      </div>
      <div
        v-for="song in filteredSongs"
        :key="song.id"
        :class="[
          'flex flex-col gap-3 p-5 rounded-xl border-[1.5px] cursor-pointer transition-all duration-200 relative min-h-[200px]',
          currentSong?.id === song.id
            ? 'border-[#D97757] bg-[#D97757]/15 shadow-[0_4px_20px_rgba(217,119,87,0.4)]'
            : 'border-[#D97757]/30 bg-[#2d2d2d] hover:border-[#D97757] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(217,119,87,0.3)]',
        ]"
        @click="selectSong(song)"
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
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>

          <!-- Difficulty Badge -->
          <span
            :class="[
              'px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider',
              song.difficulty === 'beginner'
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : song.difficulty === 'intermediate'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30',
            ]"
          >
            {{ song.difficulty }}
          </span>
        </div>

        <div class="flex-1">
          <h3 class="text-lg font-semibold text-white mb-1 leading-snug">
            {{ song.title }}
          </h3>
          <p class="text-sm m-0 text-white/70">{{ song.artist }}</p>
        </div>

        <div
          class="flex items-center justify-between pt-3 border-t border-white/10"
        >
          <div class="flex gap-5 text-xs text-white/70">
            <span class="flex items-center gap-1.5">
              ⏱️
              <span class="font-medium">{{ song.duration }}s</span>
            </span>
            <span class="flex items-center gap-1.5">
              🎵
              <span class="font-medium">{{ song.tempo }} BPM</span>
            </span>
            <span class="flex items-center gap-1.5">
              🎹
              <span class="font-medium">{{ song.chords.length }} chords</span>
            </span>
          </div>
        </div>

        <!-- Playing Badge -->
        <div
          v-if="currentSong?.id === song.id && isPlaying"
          class="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white text-[11px] font-bold shadow-[0_2px_8px_rgba(217,119,87,0.4)]"
        >
          ✓ Playing
        </div>
      </div>
    </div>

    <!-- My Songs Tab -->
    <div
      v-if="activeTab === 'my-songs'"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div
        v-if="!isAuthenticated"
        class="col-span-full flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div class="text-6xl mb-4 opacity-50">🔒</div>
        <h3 class="text-2xl text-zinc-200 mb-2">Login Required</h3>
        <p class="text-zinc-400 max-w-md mb-4">
          Sign in to view and manage your recordings
        </p>
        <button
          @click="$emit('open-auth')"
          class="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white font-semibold hover:scale-105 transition-transform"
        >
          Sign In
        </button>
      </div>
      <!-- Loading State -->
      <div
        v-else-if="
          recordingsStore.isLoadingMyRecordings &&
          filteredMyRecordings.length === 0
        "
        class="col-span-full flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div class="loading-spinner mb-4"></div>
        <h3 class="text-xl text-zinc-200 mb-2">Loading Your Recordings...</h3>
        <p class="text-zinc-400 max-w-md">
          Please wait while we fetch your songs
        </p>
      </div>
      <!-- Empty State -->
      <div
        v-else-if="filteredMyRecordings.length === 0"
        class="col-span-full flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div class="text-6xl mb-4 opacity-50">🎙️</div>
        <h3 class="text-2xl text-zinc-200 mb-2">No Recordings Yet</h3>
        <p class="text-zinc-400 max-w-md">
          {{
            searchQuery
              ? "No recordings match your search"
              : "Press the record button to start capturing your piano performances!"
          }}
        </p>
      </div>
      <div
        v-for="recording in filteredMyRecordings"
        :key="recording.$id"
        :class="[
          'flex flex-col gap-3 p-5 rounded-xl border-[1.5px] transition-all duration-200 relative min-h-[200px]',
          currentRecording?.id === recording.$id
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
            @click.stop="confirmDelete(recording)"
            :disabled="deletingRecordingId === recording.$id"
            :class="[
              'p-2 rounded-lg border text-lg transition-all duration-200',
              deletingRecordingId === recording.$id
                ? 'border-red-500/20 bg-red-500/5 cursor-not-allowed opacity-50'
                : 'border-red-500/30 bg-red-500/10 cursor-pointer hover:bg-red-500/25 hover:border-red-500 hover:scale-110',
            ]"
            title="Delete"
          >
            <span
              v-if="deletingRecordingId === recording.$id"
              class="inline-block"
            >
              <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            <span v-else>🗑️</span>
          </button>
        </div>
        <div
          class="flex-1 flex flex-col gap-2"
          :class="{ 'cursor-pointer': editingRecordingId !== recording.$id }"
          @click="
            editingRecordingId !== recording.$id && playRecording(recording)
          "
        >
          <!-- Editable Title -->
          <div
            v-if="editingRecordingId === recording.$id"
            class="flex items-center gap-2"
            @click.stop
          >
            <input
              v-model="editingTitle"
              type="text"
              class="flex-1 px-3 py-2 bg-zinc-800 border border-[#D97757] rounded-lg text-white text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#D97757]"
              @keyup.enter="saveTitle(recording.$id)"
              @keyup.esc="cancelEditing"
              autofocus
            />
            <button
              @click="saveTitle(recording.$id)"
              class="p-2 rounded-lg bg-green-500/20 text-green-500 hover:bg-green-500/30 transition-all"
              title="Save"
            >
              ✓
            </button>
            <button
              @click="cancelEditing"
              class="p-2 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-all"
              title="Cancel"
            >
              ✕
            </button>
          </div>

          <!-- Display Title -->
          <div v-else class="flex items-center gap-2">
            <h3
              class="text-xl font-extrabold m-0 text-white leading-tight flex-1"
            >
              {{ recording.title }}
            </h3>
            <button
              @click.stop="startEditing(recording)"
              class="p-1.5 rounded-lg text-zinc-400 hover:text-[#D97757] hover:bg-[#D97757]/10 transition-all"
              title="Rename"
            >
              ✏️
            </button>
          </div>

          <p class="text-sm m-0 text-white/70">
            {{ formatDate(recording.$createdAt) }}
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
            <span
              v-if="recording.isPublished"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-500/20 text-green-500 border border-green-500/30"
            >
              📤 Published
            </span>
          </div>
        </div>
        <div class="flex gap-2">
          <button
            @click.stop="togglePublish(recording)"
            :disabled="recordingsStore.isPublishing(recording.$id)"
            :class="[
              'flex-1 py-2.5 rounded-xl border-none font-semibold transition-all duration-200 flex items-center justify-center gap-2',
              recordingsStore.isPublishing(recording.$id)
                ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed opacity-60'
                : recording.isPublished
                ? 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600 cursor-pointer'
                : 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:scale-105 cursor-pointer',
            ]"
          >
            <svg
              v-if="recordingsStore.isPublishing(recording.$id)"
              class="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>
              {{
                recordingsStore.isPublishing(recording.$id)
                  ? "Processing..."
                  : recording.isPublished
                  ? "📥 Unpublish"
                  : "📤 Publish"
              }}
            </span>
          </button>
          <button
            @click="playRecording(recording)"
            class="flex-1 py-2.5 rounded-xl border-none bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white font-semibold cursor-pointer transition-all duration-200 hover:scale-105"
          >
            {{
              isPlaying && currentRecording?.id === recording.$id
                ? "⏸️ Pause"
                : "▶️ Play"
            }}
          </button>
        </div>
      </div>
    </div>

    <!-- Tutorials Tab -->
    <div
      v-if="activeTab === 'tutorials'"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <div
        v-if="filteredTutorials.length === 0"
        class="col-span-full flex flex-col items-center justify-center py-16 px-8 text-center"
      >
        <div class="text-6xl mb-4 opacity-50">🎓</div>
        <h3 class="text-2xl text-zinc-200 mb-2">No Tutorials Found</h3>
        <p class="text-zinc-400 max-w-md">Try adjusting your search query</p>
      </div>
      <div
        v-for="tutorial in filteredTutorials"
        :key="tutorial.id"
        :class="[
          'flex flex-col gap-3 p-5 rounded-xl border-[1.5px] cursor-pointer transition-all duration-200 relative min-h-[200px]',
          currentSong?.id === tutorial.id
            ? 'border-[#D97757] bg-[#D97757]/15 shadow-[0_4px_20px_rgba(217,119,87,0.4)]'
            : 'border-[#D97757]/30 bg-[#2d2d2d] hover:border-[#D97757] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(217,119,87,0.3)]',
        ]"
        @click="selectSong(tutorial)"
      >
        <div class="text-5xl mb-2">🎓</div>
        <div class="flex-1 flex flex-col gap-2">
          <h3 class="text-xl font-extrabold m-0 text-white leading-tight">
            {{ tutorial.title }}
          </h3>
          <p class="text-sm m-0 text-white/70">{{ tutorial.artist }}</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
            >
              {{ tutorial.tempo }} BPM
            </span>
            <span
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-green-500/20 text-green-500"
            >
              {{ tutorial.difficulty }}
            </span>
            <span
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-500/20 text-blue-500"
            >
              Tutorial
            </span>
          </div>
        </div>
        <div
          v-if="currentSong?.id === tutorial.id"
          class="absolute top-4 right-4 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white text-[11px] font-bold shadow-[0_2px_8px_rgba(217,119,87,0.4)]"
        >
          ✓ Playing
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <AlertModal
      :is-open="recordingToDelete !== null"
      title="Delete Recording"
      :message="`Are you sure you want to delete '${recordingToDelete?.title}'? This action cannot be undone.`"
      type="error"
      confirm-text="Delete"
      cancel-text="Cancel"
      @confirm="handleDeleteConfirm"
      @cancel="handleDeleteCancel"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import type { Song } from "../types";
import type { RecordingDocument } from "../services/recordingsService";
import { useUserStore } from "../stores/user";
import { useRecordingsStore } from "../stores/recordings";
import type { Recording } from "../utils/recordingEngine";
import { useToast } from "../composables/useToast";
import AlertModal from "./AlertModal.vue";

const props = defineProps<{
  songs: Song[];
  tutorials: Song[];
  currentSong: Song | null;
  currentRecording?: Recording | null;
  isPlaying?: boolean;
}>();

const emit = defineEmits<{
  selectSong: [song: Song];
  playRecording: [recording: any];
  "open-auth": [];
}>();

const userStore = useUserStore();
const recordingsStore = useRecordingsStore();
const toast = useToast();

const activeTab = ref<"community" | "songs" | "my-songs" | "tutorials">(
  "community"
);
const searchQuery = ref("");

const isAuthenticated = computed(() => userStore.isLoggedIn);

// Editing states
const editingRecordingId = ref<string | null>(null);
const editingTitle = ref("");

// Deleting state
const deletingRecordingId = ref<string | null>(null);

// Community tab - Only show published recordings from database
const communitySongs = computed(() => {
  return recordingsStore.publishedSongs;
});

// Filtered lists based on search
const filteredCommunity = computed(() => {
  if (!searchQuery.value) return communitySongs.value;
  const query = searchQuery.value.toLowerCase();
  return communitySongs.value.filter((song: Song | RecordingDocument) => {
    const title = "title" in song ? song.title : "";
    const artist = "artist" in song ? song.artist : "";
    return (
      title.toLowerCase().includes(query) ||
      artist.toLowerCase().includes(query)
    );
  });
});

const filteredSongs = computed(() => {
  if (!searchQuery.value) return props.songs;
  const query = searchQuery.value.toLowerCase();
  return props.songs.filter(
    (song: Song) =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
  );
});

const filteredMyRecordings = computed(() => {
  if (!searchQuery.value) return recordingsStore.myRecordings;
  const query = searchQuery.value.toLowerCase();
  return recordingsStore.myRecordings.filter((rec) =>
    rec.title.toLowerCase().includes(query)
  );
});

const filteredTutorials = computed(() => {
  if (!searchQuery.value) return props.tutorials;
  const query = searchQuery.value.toLowerCase();
  return props.tutorials.filter(
    (song: Song) =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
  );
});

const tabs = computed(() => {
  const allTabs = [
    {
      id: "community" as const,
      label: "Community",
      icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
      count: filteredCommunity.value.length,
    },
    {
      id: "songs" as const,
      label: "Songs",
      icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>',
      count: filteredSongs.value.length,
    },
    {
      id: "my-songs" as const,
      label: "My Songs",
      icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>',
      count: filteredMyRecordings.value.length,
    },
    {
      id: "tutorials" as const,
      label: "Tutorials",
      icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
      count: filteredTutorials.value.length,
    },
  ];

  // Filter out "My Songs" tab if user is not logged in
  return isAuthenticated.value
    ? allTabs
    : allTabs.filter((tab) => tab.id !== "my-songs");
});

const loadMyRecordings = async () => {
  if (!isAuthenticated.value || !userStore.profile?.id) return;
  try {
    await recordingsStore.loadMyRecordings(userStore.profile.id);
  } catch (error) {
    // Silently handle error - no toast notification
  }
};

const loadPublishedSongs = async () => {
  try {
    await recordingsStore.loadPublishedSongs(searchQuery.value || undefined);
  } catch (error) {
    // Silently handle error - no toast notification
  }
};

// Type guard to check if item is a regular song
const isRegularSong = (item: Song | RecordingDocument): item is Song => {
  return "artist" in item && "tempo" in item && "chords" in item;
};

// Handle click on song or recording
const handleSongOrRecordingClick = (item: Song | RecordingDocument) => {
  if (isRegularSong(item)) {
    selectSong(item);
  } else {
    playRecording(item);
  }
};

const selectSong = (song: Song) => {
  emit("selectSong", song);
};

const playRecording = (recording: RecordingDocument) => {
  // Convert RecordingDocument to Recording format for playback
  const playableRecording: Recording = {
    id: recording.$id,
    title: recording.title,
    notes: recording.notes,
    duration: recording.duration,
    date: recording.$createdAt,
  };
  emit("playRecording", playableRecording);
};

// Rename recording
const startEditing = (recording: RecordingDocument) => {
  editingRecordingId.value = recording.$id;
  editingTitle.value = recording.title;
};

const cancelEditing = () => {
  editingRecordingId.value = null;
  editingTitle.value = "";
};

const saveTitle = async (recordingId: string) => {
  if (!editingTitle.value.trim()) {
    toast.error("Title cannot be empty");
    return;
  }

  try {
    await recordingsStore.updateRecordingTitle(
      recordingId,
      editingTitle.value.trim()
    );
    toast.success("Title updated successfully!");
    cancelEditing();
  } catch (error) {
    toast.error("Failed to update title");
  }
};

// Toggle publish/unpublish
const togglePublish = async (recording: RecordingDocument) => {
  try {
    await recordingsStore.togglePublish(recording.$id, !recording.isPublished);
    toast.success(
      recording.isPublished
        ? "Unpublished successfully!"
        : "Published successfully!"
    );
  } catch (error) {
    toast.error("Failed to update publication status");
  }
};

// Delete recording
const recordingToDelete = ref<{ id: string; title: string } | null>(null);

const confirmDelete = (recording: RecordingDocument) => {
  recordingToDelete.value = {
    id: recording.$id,
    title: recording.title,
  };
};

const handleDeleteConfirm = async () => {
  if (!recordingToDelete.value) return;

  deletingRecordingId.value = recordingToDelete.value.id;

  try {
    await recordingsStore.deleteRecording(recordingToDelete.value.id);
    toast.success("Recording deleted successfully!");
    recordingToDelete.value = null;
  } catch (error) {
    toast.error("Failed to delete recording");
  } finally {
    deletingRecordingId.value = null;
  }
};

const handleDeleteCancel = () => {
  recordingToDelete.value = null;
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
  // Load published songs for Songs tab
  loadPublishedSongs();

  // Load user recordings if authenticated
  if (isAuthenticated.value) {
    loadMyRecordings();
  }
});

// Watch for tab changes and reload data when needed
watch(activeTab, (newTab) => {
  if (newTab === "community") {
    loadPublishedSongs();
  } else if (newTab === "my-songs" && isAuthenticated.value) {
    loadMyRecordings();
  }
});

// Watch search query and reload published songs
watch(searchQuery, () => {
  if (activeTab.value === "songs") {
    loadPublishedSongs();
  }
});

// Reload recordings when user logs in
watch(
  () => userStore.isLoggedIn,
  (loggedIn: boolean) => {
    if (loggedIn) {
      loadMyRecordings();
    } else {
      // Clear recordings on logout
      recordingsStore.clearAll();
    }
  }
);

// Expose methods for parent component to call
defineExpose({
  refreshRecordings: loadMyRecordings,
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

/* Loading Spinner */
.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(217, 119, 87, 0.2);
  border-top-color: #d97757;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
