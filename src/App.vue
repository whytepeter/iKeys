<template>
  <div class="min-h-screen bg-zinc-950 flex flex-col overflow-hidden">
    <!-- Mobile Blocker -->
    <MobileBlocker />

    <!-- Navbar -->
    <Navbar
      :current-song="currentSong"
      :is-playing="isPlaying"
      :loop="loop"
      :play-mode="playMode"
      :play-mode-options="playModeOptions"
      :show-play-mode-menu="showPlayModeMenu"
      :show-user-menu="showUserMenu"
      :is-user-authenticated="isUserAuthenticated"
      :user-initial="userInitial"
      :user-name="userStore.profile?.name"
      :user-email="userStore.profile?.email"
      @stop="stop"
      @play="play"
      @pause="pause"
      @toggle-loop="loop = !loop"
      @toggle-play-mode-menu="togglePlayModeMenu"
      @select-play-mode="selectPlayMode"
      @close-song="closeSong"
      @toggle-user-menu="showUserMenu = !showUserMenu"
      @logout="handleLogout"
      @login="handleLogin"
    />

    <!-- Main Content -->
    <main class="flex-1 flex flex-col overflow-hidden">
      <!-- Main Content Area: Falling Chords, Song Library, Settings, OR Chord Dictionary -->
      <div
        class="flex gap-4 px-4 py-4 max-w-[1600px] mx-auto w-full"
        style="height: 420px"
      >
        <!-- Song Library (when active) -->
        <div v-if="showSongLibrary" class="flex-1 min-w-0 overflow-auto">
          <SongLibraryModal
            ref="songLibraryModalRef"
            :songs="songs"
            :current-song="currentSong"
            :current-recording="playingRecording"
            :is-playing="isPlaying && playingRecording !== null"
            @select-song="selectSong"
            @play-recording="playRecording"
            @open-auth="handleLogin"
          />
        </div>

        <!-- Settings (when active) -->
        <div v-else-if="showSettings" class="flex-1 min-w-0 overflow-auto">
          <SettingsModal
            :tempo="tempo"
            :volume="volume"
            :play-mode="playMode"
            :hand-mode="handMode"
            :loop="loop"
            @update:tempo="tempo = $event"
            @update:volume="
              (val) => {
                volume = val;
                audioEngine.setVolume(val);
              }
            "
            @update:playMode="playMode = $event"
            @update:handMode="handMode = $event"
            @update:loop="loop = $event"
          />
        </div>

        <!-- Chord Dictionary (when active) -->
        <div
          v-else-if="showChordDictionary"
          class="flex-1 min-w-0 overflow-auto"
        >
          <ChordDictionary @play-chord="handleChordDictionaryPlay" />
        </div>

        <!-- Falling Chords (Main Area - Default view) -->
        <div v-else class="flex-1 min-w-0">
          <FallingChords
            v-if="currentSong"
            :chords="currentSong.chords"
            :current-time="currentTime"
            :is-playing="isPlaying"
            :speed="speed"
          />
          <div v-else class="h-full flex items-center justify-center">
            <div class="text-center">
              <div class="text-6xl mb-4">🎵</div>
              <h3 class="text-2xl font-bold text-white mb-2">Choose a Song</h3>
              <p class="text-zinc-400 mb-6">
                Select a song from the library to start playing chords
              </p>
              <button
                @click="showSongLibrary = true"
                class="px-6 py-3 bg-gradient-to-r from-[#D97757] to-[#fb923c] text-white rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Open Song Library
              </button>
            </div>
          </div>
        </div>

        <!-- Chord Info Panel (Right Side) - Only show when playing a song -->
        <div
          v-if="
            currentSong &&
            !showSongLibrary &&
            !showSettings &&
            !showChordDictionary
          "
          class="w-72 flex-shrink-0"
        >
          <ChordInfoPanel
            :current-chord="currentChord"
            :next-chord="nextChord"
            :current-section="currentSection"
            :chord-match="chordMatch"
            :show-accuracy="playMode === 'practice' || playMode === 'wait'"
            :current-time="currentTime"
            :total-duration="currentSong.duration"
          />
        </div>
      </div>

      <!-- Piano Keyboard - Full Width -->
      <div
        class="flex-1 border-t-4 border-[#D97757] flex items-center justify-center"
      >
        <PianoKeyboard
          :active-keys="activeKeys"
          :current-chord="currentChord"
          :next-chord="nextChord"
          :chord-match="chordMatch"
          @key-down="handleKeyDown"
          @key-up="handleKeyUp"
        />
      </div>
    </main>

    <!-- Floating Action Buttons -->
    <div class="fixed top-24 right-6 flex flex-col gap-3 z-50">
      <!-- Record Button -->
      <button
        @click="toggleRecording"
        class="claude-fab"
        :class="{ 'recording-active': isRecording }"
        :title="isRecording ? '🔴 Stop Recording' : 'Start Recording'"
      >
        <svg
          v-if="!isRecording"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" stroke-width="2"></circle>
          <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
        </svg>
        <svg
          v-else
          class="w-6 h-6 animate-pulse"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="6" y="6" width="12" height="12" rx="2"></rect>
        </svg>
      </button>

      <!-- Settings Button -->
      <button
        @click="toggleView('settings')"
        class="claude-fab"
        :class="{ primary: showSettings }"
        :title="showSettings ? 'Close Settings' : 'Settings'"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      <!-- Song Library Button -->
      <button
        @click="toggleView('library')"
        class="claude-fab"
        :class="{ primary: showSongLibrary }"
        :title="showSongLibrary ? 'Close Song Library' : 'Song Library'"
      >
        <svg
          class="w-6 h-6"
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
      </button>

      <!-- Chord Dictionary Button -->
      <button
        @click="toggleView('dictionary')"
        class="claude-fab"
        :class="{ primary: showChordDictionary }"
        :title="
          showChordDictionary ? 'Close Chord Dictionary' : 'Chord Dictionary'
        "
      >
        <svg
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </button>
    </div>

    <!-- Modals -->
    <!-- Recording Title Input Modal -->
    <InputModal
      :is-open="showRecordingTitleInput"
      title="Save Recording"
      message="Enter a name for your recording:"
      :placeholder="'My Recording'"
      :default-value="`Recording ${new Date().toLocaleTimeString()}`"
      confirm-text="Save"
      :loading="isSavingRecording"
      @confirm="handleRecordingTitleConfirm"
      @cancel="handleRecordingTitleCancel"
    />

    <!-- Recording Alert Modal -->
    <AlertModal
      :is-open="showRecordingAlert"
      title="Recording"
      :message="recordingAlertMessage"
      :type="recordingAlertType"
      confirm-text="OK"
      confirm-only
      @confirm="showRecordingAlert = false"
      @cancel="showRecordingAlert = false"
    />

    <!-- Auth Modal (controlled by ?auth=login|register|forgot-password|reset-password) -->
    <AuthModal @auth-success="handleAuthSuccess" />

    <!-- Toast Notifications -->
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import MobileBlocker from "./components/MobileBlocker.vue";
import Navbar from "./components/Navbar.vue";
import PianoKeyboard from "./components/PianoKeyboard.vue";
import FallingChords from "./components/FallingChords.vue";
import ChordInfoPanel from "./components/ChordInfoPanel.vue";
import SettingsModal from "./components/SettingsModal.vue";
import SongLibraryModal from "./components/SongLibraryModal.vue";
import ChordDictionary from "./components/ChordDictionary.vue";
import InputModal from "./components/InputModal.vue";
import AlertModal from "./components/AlertModal.vue";
import AuthModal from "./components/AuthModal.vue";
import ToastContainer from "./components/ToastContainer.vue";
import { songs } from "./data/songs";
import { AudioEngine } from "./utils/audioEngine";
import { ChordDetector } from "./utils/chordDetection";
import {
  RecordingEngine,
  RecordingStorage,
  type Recording,
  type RecordedNote,
} from "./utils/recordingEngine";
import type { Song, PlayMode, Chord, ChordMatch, HandMode } from "./types";
import { useUserStore } from "./stores/user";
import { useRecordingsStore } from "./stores/recordings";
import { authService } from "./services/authService";
import { recordingsService } from "./services/recordingsService";
import { useToast } from "./composables/useToast";

// State
const currentSong = ref<Song | null>(null);
const isPlaying = ref(false);
const playMode = ref<PlayMode>("free");
const handMode = ref<HandMode>("both");
const tempo = ref(100);
const speed = computed(() => tempo.value / 100); // Convert tempo to speed multiplier
const volume = ref(70);
const loop = ref(false);
const currentTime = ref(0);
const activeKeys = ref<string[]>([]);
const showSettings = ref(false);
const showSongLibrary = ref(false);
const showChordDictionary = ref(false);

// Template refs
const songLibraryModalRef = ref<{
  refreshRecordings: () => Promise<void>;
} | null>(null);

// Recording modals
const showRecordingTitleInput = ref(false);
const showRecordingAlert = ref(false);
const recordingAlertMessage = ref("");
const recordingAlertType = ref<"alert" | "success" | "error">("alert");
const pendingRecordingNotes = ref<any[]>([]);
const showPlayModeMenu = ref(false);
const showUserMenu = ref(false);
const isSavingRecording = ref(false);

// Stores
const userStore = useUserStore();
const recordingsStore = useRecordingsStore();

// Toast
const toast = useToast();

// Safe computed properties for user
const isUserAuthenticated = computed(() => userStore?.isLoggedIn ?? false);
const userInitial = computed(() =>
  isUserAuthenticated.value && userStore?.profile?.name
    ? userStore.profile.name[0].toUpperCase()
    : "G"
);

// Close dropdowns when clicking outside
const handleDocumentClick = () => {
  if (showPlayModeMenu.value) showPlayModeMenu.value = false;
  if (showUserMenu.value) showUserMenu.value = false;
};

// Chord-specific state
const currentChord = ref<Chord | null>(null);
const nextChord = ref<Chord | null>(null);
const currentSection = ref<string>("");
const chordMatch = ref<ChordMatch | null>(null);

// Recording state
const isRecording = ref(false);
const recordingElapsedTime = ref(0);
const playingRecording = ref<Recording | null>(null);

// Audio and chord detection
let audioEngine: AudioEngine;
let chordDetector: ChordDetector;
let recordingEngine: RecordingEngine;
let animationFrameId: number | null = null;
let lastFrameTime = 0;
let recordingTimerInterval: number | null = null;

onMounted(async () => {
  audioEngine = new AudioEngine();
  chordDetector = new ChordDetector();
  recordingEngine = new RecordingEngine();
  setupKeyboardListeners();
  document.addEventListener("click", handleDocumentClick);

  // Check for existing auth session with Appwrite
  // Note: Appwrite manages authentication via HTTP-only cookies
  // We only store user profile in memory, not localStorage
  try {
    const user = await authService.getCurrentUser();
    if (user) {
      userStore.setProfile({
        id: user.$id,
        name: user.name,
        email: user.email,
        createdAt: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error("Auth check error:", error);
  }
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  document.removeEventListener("click", handleDocumentClick);
  removeKeyboardListeners();
});

// Watch for current time changes to update current/next chord
watch(currentTime, (time: number) => {
  if (!currentSong.value) return;

  // Find current chord
  const current = currentSong.value.chords.find(
    (chord: Chord) => time >= chord.time && time < chord.time + chord.duration
  );
  currentChord.value = current || null;

  // Find next chord
  const upcoming = currentSong.value.chords.filter(
    (chord: Chord) => chord.time > time
  );
  nextChord.value = upcoming.length > 0 ? upcoming[0] : null;

  // Find current section
  const section = currentSong.value.sections?.find(
    (s: { name: string; startTime: number; endTime: number }) =>
      time >= s.startTime && time < s.endTime
  );
  currentSection.value = section?.name || "";

  // Update chord match if in practice/wait mode
  if (
    (playMode.value === "practice" || playMode.value === "wait") &&
    currentChord.value
  ) {
    chordMatch.value = chordDetector.matchChord(currentChord.value);
  }
});

// Toggle between different views
const toggleView = (view: "library" | "settings" | "dictionary") => {
  if (view === "library") {
    showSongLibrary.value = !showSongLibrary.value;
    if (showSongLibrary.value) {
      showSettings.value = false;
      showChordDictionary.value = false;
    }
  } else if (view === "settings") {
    showSettings.value = !showSettings.value;
    if (showSettings.value) {
      showSongLibrary.value = false;
      showChordDictionary.value = false;
    }
  } else if (view === "dictionary") {
    showChordDictionary.value = !showChordDictionary.value;
    if (showChordDictionary.value) {
      showSongLibrary.value = false;
      showSettings.value = false;
    }
  }
};

// Handle chord play from dictionary - show keys on keyboard
const handleChordDictionaryPlay = (chordKeys: string[]) => {
  // Temporarily show the chord keys on the keyboard
  activeKeys.value = chordKeys;

  // Clear after 2 seconds
  setTimeout(() => {
    if (!isPlaying.value) {
      activeKeys.value = [];
    }
  }, 2000);
};

const selectSong = (song: Song) => {
  stop();
  playingRecording.value = null; // Clear any playing recording
  currentSong.value = song;
  playMode.value = "auto";
  // Close all views to show the song
  showSongLibrary.value = false;
  showChordDictionary.value = false;
  showSettings.value = false;
};

const closeSong = () => {
  stop();
  currentSong.value = null;
  playingRecording.value = null;
};

const playModeOptions = [
  {
    value: "auto",
    label: "Auto Play",
    icon: "▶️",
    desc: "Plays chords automatically",
  },
  {
    value: "practice",
    label: "Practice",
    icon: "🎓",
    desc: "Wait for correct chords",
  },
  {
    value: "wait",
    label: "Wait Mode",
    icon: "⏸️",
    desc: "Pause until you play",
  },
  {
    value: "free",
    label: "Free Play",
    icon: "🎹",
    desc: "Play without guidance",
  },
];

const togglePlayModeMenu = () => {
  showPlayModeMenu.value = !showPlayModeMenu.value;
};

const selectPlayMode = (mode: string) => {
  playMode.value = mode;
  showPlayModeMenu.value = false;
};

const handleLogin = () => {
  // Open auth modal with login view
  const url = new URL(window.location.href);
  url.searchParams.set("auth", "login");
  window.history.pushState({}, "", url.toString());
  // Dispatch custom event to trigger modal to check URL
  window.dispatchEvent(new Event("urlchange"));
  showUserMenu.value = false;
};

const handleLogout = async () => {
  try {
    await authService.logout();
    userStore.logout();
    recordingsStore.clearAll(); // Clear recordings on logout
    showUserMenu.value = false;
  } catch (error) {
    console.error("Logout error:", error);
  }
};

const handleAuthSuccess = () => {
  // Authentication successful - user store is already updated by the auth forms
  console.log("Authentication successful!");
};

const play = () => {
  if (!currentSong.value) return;
  isPlaying.value = true;
  lastFrameTime = performance.now();

  if (playMode.value === "auto") {
    startAutoPlayback();
  } else if (playMode.value === "practice" || playMode.value === "wait") {
    startPracticePlayback();
  }
};

const pause = () => {
  isPlaying.value = false;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

const stop = () => {
  pause();
  currentTime.value = 0;
  activeKeys.value = [];
  currentChord.value = null;
  nextChord.value = null;
  chordMatch.value = null;
  chordDetector.clear();
  playingRecording.value = null; // Clear recording state when stopping
};

// Settings are now updated directly via v-model bindings

// Auto playback - chords play automatically
const startAutoPlayback = () => {
  if (!currentSong.value) return;

  const animate = (timestamp: number) => {
    if (!isPlaying.value) return;

    const deltaTime = (timestamp - lastFrameTime) / 1000; // Convert to seconds
    lastFrameTime = timestamp;

    currentTime.value += deltaTime * speed.value;

    // Check if song is complete
    if (currentTime.value >= currentSong.value!.duration) {
      if (loop.value) {
        currentTime.value = 0;
      } else {
        stop();
        return;
      }
    }

    // Auto-play chords when they hit the timing
    if (
      currentChord.value &&
      currentTime.value >= currentChord.value.time &&
      currentTime.value < currentChord.value.time + 0.1
    ) {
      playChord(currentChord.value);
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  animationFrameId = requestAnimationFrame(animate);
};

// Practice playback - waits for user input
const startPracticePlayback = () => {
  if (!currentSong.value) return;

  const animate = (timestamp: number) => {
    if (!isPlaying.value) return;

    // In practice mode, time advances only when chord is played correctly
    if (playMode.value === "wait" && currentChord.value) {
      const match = chordDetector.matchChord(currentChord.value);
      chordMatch.value = match;

      // If chord is correct, advance time
      if (match.isCorrect) {
        const deltaTime = (timestamp - lastFrameTime) / 1000;
        lastFrameTime = timestamp;
        currentTime.value += deltaTime * speed.value;

        // Play the chord
        playChord(currentChord.value);

        // Small delay before next chord
        setTimeout(() => {
          chordDetector.clear();
          activeKeys.value = [];
        }, 500);
      }
    } else {
      // Practice mode - time advances but shows feedback
      const deltaTime = (timestamp - lastFrameTime) / 1000;
      lastFrameTime = timestamp;
      currentTime.value += deltaTime * speed.value;
    }

    // Check if song is complete
    if (currentTime.value >= currentSong.value!.duration) {
      if (loop.value) {
        currentTime.value = 0;
      } else {
        stop();
        return;
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  lastFrameTime = performance.now();
  animationFrameId = requestAnimationFrame(animate);
};

// Play all notes in a chord with individual durations and offsets
const playChord = (chord: Chord) => {
  const durations = chord.noteDurations || chord.keys.map(() => chord.duration);
  const offsets = chord.noteOffsets || chord.keys.map(() => 0);

  chord.keys.forEach((key: string, index: number) => {
    const noteDuration = durations[index] || chord.duration;
    const noteOffset = offsets[index] || 0;

    // Play note with its specific duration and offset
    audioEngine.playNoteWithOffset(key, noteDuration, noteOffset, 0.7);

    // Visual feedback with offset
    setTimeout(() => {
      if (!activeKeys.value.includes(key)) {
        activeKeys.value.push(key);
      }

      // Remove visual feedback after note's specific duration
      setTimeout(() => {
        activeKeys.value = activeKeys.value.filter((k: string) => k !== key);
      }, noteDuration * 1000 * 0.8);
    }, noteOffset * 1000);
  });
};

// Handle key down (press and hold)
const handleKeyDown = (note: string) => {
  audioEngine.pressKey(note);
  chordDetector.pressKey(note);

  // Record key press if recording
  if (isRecording.value) {
    recordingEngine.recordKeyPress(note);
  }

  if (!activeKeys.value.includes(note)) {
    activeKeys.value.push(note);
  }

  // Update chord match in practice modes
  if (
    (playMode.value === "practice" || playMode.value === "wait") &&
    currentChord.value
  ) {
    chordMatch.value = chordDetector.matchChord(currentChord.value);
  }
};

// Handle key up (release)
const handleKeyUp = (note: string) => {
  audioEngine.releaseKey(note);
  chordDetector.releaseKey(note);

  // Record key release if recording
  if (isRecording.value) {
    recordingEngine.recordKeyRelease(note);
  }

  setTimeout(() => {
    activeKeys.value = activeKeys.value.filter((k: string) => k !== note);
  }, 100);

  // Update chord match
  if (
    (playMode.value === "practice" || playMode.value === "wait") &&
    currentChord.value
  ) {
    chordMatch.value = chordDetector.matchChord(currentChord.value);
  }
};

// Keyboard mapping - Two-hand layout for intuitive playing
// Left hand (A-J) = Octave 3, Right hand (K-') = Octave 4
// White keys on home row, black keys on row above
const keyMap: Record<string, string> = {
  // ===== OCTAVE 3 (Left hand: ASDFGHJ with WETYU for black keys) =====
  a: "C3",
  w: "C#3",
  s: "D3",
  e: "D#3",
  d: "E3",
  f: "F3",
  t: "F#3",
  g: "G3",
  y: "G#3",
  h: "A3",
  u: "A#3",
  j: "B3",

  // ===== OCTAVE 4 (Right hand: KL;' with IOP] for black keys) =====
  k: "C4", // Middle C
  i: "C#4",
  l: "D4",
  o: "D#4",
  ";": "E4",
  "'": "F4",
  "]": "F#4",
  enter: "G4",

  // ===== OCTAVE 5 (Extended range: ZXCV with QB2356 for black keys) =====
  z: "C5",
  q: "C#5",
  x: "D5",
  "2": "D#5",
  c: "E5",
  v: "F5",
  "3": "F#5",
  b: "G5",
  "5": "G#5",
  n: "A5",
  "6": "A#5",
  m: "B5",
};

const handleKeyboardDown = (event: KeyboardEvent) => {
  // Ignore keyboard events when user is typing in input fields
  const target = event.target as HTMLElement;
  if (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  ) {
    return;
  }

  const key = event.key.toLowerCase();
  const note = keyMap[key];

  if (note && !event.repeat) {
    handleKeyDown(note);
  }
};

const handleKeyboardUp = (event: KeyboardEvent) => {
  // Ignore keyboard events when user is typing in input fields
  const target = event.target as HTMLElement;
  if (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  ) {
    return;
  }

  const key = event.key.toLowerCase();
  const note = keyMap[key];

  if (note) {
    handleKeyUp(note);
  }
};

const setupKeyboardListeners = () => {
  window.addEventListener("keydown", handleKeyboardDown);
  window.addEventListener("keyup", handleKeyboardUp);
};

const removeKeyboardListeners = () => {
  window.removeEventListener("keydown", handleKeyboardDown);
  window.removeEventListener("keyup", handleKeyboardUp);
};

// Recording functions
const toggleRecording = () => {
  if (isRecording.value) {
    stopRecording();
  } else {
    startRecording();
  }
};

const startRecording = () => {
  // Check if user is logged in
  if (!isUserAuthenticated.value) {
    // Show login modal if not logged in
    handleLogin();
    return;
  }

  // Stop any current playback
  if (isPlaying.value) {
    stop();
  }

  isRecording.value = true;
  recordingElapsedTime.value = 0;
  recordingEngine.startRecording();

  // Start timer to update elapsed time
  recordingTimerInterval = window.setInterval(() => {
    recordingElapsedTime.value = recordingEngine.getElapsedTime();
  }, 100);
};

const stopRecording = () => {
  isRecording.value = false;

  if (recordingTimerInterval) {
    clearInterval(recordingTimerInterval);
    recordingTimerInterval = null;
  }

  const notes = recordingEngine.stopRecording();

  if (notes.length > 0) {
    // Store notes temporarily and show title input modal
    pendingRecordingNotes.value = notes;
    showRecordingTitleInput.value = true;
  } else {
    // Show alert for no notes recorded
    recordingAlertMessage.value =
      "No notes were recorded. Try playing some keys while recording!";
    recordingAlertType.value = "error";
    showRecordingAlert.value = true;
  }

  recordingElapsedTime.value = 0;
};

// Handle recording title confirmation
const handleRecordingTitleConfirm = async (title: string) => {
  // Calculate duration from the notes (last note time + duration)
  let calculatedDuration = 0;
  if (pendingRecordingNotes.value.length > 0) {
    const lastNote = pendingRecordingNotes.value.reduce(
      (latest: RecordedNote, note: RecordedNote) => {
        const noteEnd = note.time + note.duration;
        const latestEnd = latest.time + latest.duration;
        return noteEnd > latestEnd ? note : latest;
      }
    );
    calculatedDuration = lastNote.time + lastNote.duration;
  }

  isSavingRecording.value = true;

  try {
    if (userStore.isLoggedIn && userStore.profile?.id) {
      // Save to Appwrite if user is logged in
      const savedRecording = await recordingsService.createRecording(
        userStore.profile.id,
        userStore.profile.name,
        title,
        pendingRecordingNotes.value,
        calculatedDuration
      );

      // Add to store
      recordingsStore.addRecording(savedRecording);
      console.log("✅ Recording saved to Appwrite and added to store");
    } else {
      // Save to local storage if not logged in
      const recording: Recording = {
        id: Date.now().toString(),
        title,
        date: new Date().toISOString(),
        duration: calculatedDuration,
        notes: pendingRecordingNotes.value,
      };
      RecordingStorage.save(recording);
      console.log("✅ Recording saved to local storage");
    }

    // Clear pending notes
    pendingRecordingNotes.value = [];

    // Close modal on success
    showRecordingTitleInput.value = false;

    // Show success toast
    toast.success(`Recording "${title}" saved successfully! 🎵`);
  } catch (error: any) {
    console.error("Failed to save recording:", error);

    // Show error toast with specific message
    const errorMessage =
      error?.message || "Failed to save recording. Please try again.";
    toast.error(errorMessage);
  } finally {
    isSavingRecording.value = false;
  }
};

// Handle recording title cancel
const handleRecordingTitleCancel = () => {
  showRecordingTitleInput.value = false;
  pendingRecordingNotes.value = [];
};

const playRecording = (recording: Recording) => {
  // Stop any current playback
  if (isPlaying.value) {
    stop();
  }

  // Close the song library to show the falling chords
  showSongLibrary.value = false;
  showChordDictionary.value = false;
  showSettings.value = false;

  playingRecording.value = recording;
  currentTime.value = 0;

  // Convert recording to song format for playback
  const recordingSong: Song = {
    id: recording.id,
    title: recording.title,
    artist: "Your Recording",
    tempo: 120,
    duration: recording.duration,
    difficulty: "beginner" as const,
    chords: convertNotesToChords(recording.notes),
  };

  currentSong.value = recordingSong;
  playMode.value = "auto";

  console.log(
    "🎵 Playing recording:",
    recording.title,
    "with",
    recording.notes.length,
    "notes"
  );
  console.log("Converted to", recordingSong.chords.length, "chords");

  // Start playback by calling play
  // Use setTimeout to ensure the UI has updated before starting playback
  setTimeout(() => {
    isPlaying.value = true;
    play();
  }, 100);
};

const convertNotesToChords = (notes: RecordedNote[]): Chord[] => {
  console.log("Converting recorded notes to chords:", notes);

  // Group notes that start at the same time into chords
  const chords: Chord[] = [];
  const groupedNotes = new Map<number, RecordedNote[]>();

  // Group notes by start time (with 50ms tolerance)
  notes.forEach((note) => {
    const roundedTime = Math.round(note.time * 20) / 20; // Round to 50ms
    const existing = groupedNotes.get(roundedTime) || [];
    existing.push(note);
    groupedNotes.set(roundedTime, existing);
  });

  console.log("Grouped notes by time:", Array.from(groupedNotes.entries()));

  // Convert groups to chords
  groupedNotes.forEach((groupNotes, time) => {
    const chord: Chord = {
      time,
      duration: Math.max(...groupNotes.map((n) => n.duration)),
      chordName: groupNotes.length === 1 ? groupNotes[0].note : "Chord",
      keys: groupNotes.map((n) => n.note),
      hand: "both" as const,
      color: "#D97757",
      fingers: groupNotes.map((_, i) => i + 1), // Add fingers property
      noteDurations: groupNotes.map((n) => n.duration),
    };
    chords.push(chord);
    console.log("Created chord:", chord);
  });

  const sortedChords = chords.sort((a, b) => a.time - b.time);
  console.log("Final sorted chords for playback:", sortedChords);
  return sortedChords;
};
</script>

<style scoped>
/* Claude-style FAB buttons */
.claude-fab {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(39, 39, 42, 0.8);
  color: white;
  border: 1px solid rgba(63, 63, 70, 0.8);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.claude-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  border-color: #d97757;
  background: rgba(217, 119, 87, 0.2);
}

.claude-fab.primary {
  background: linear-gradient(135deg, #d97757 0%, #fb923c 100%);
  border: none;
}

.claude-fab.primary:hover {
  transform: translateY(-2px) scale(1.05);
}

.claude-fab.recording-active {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  border: none;
  animation: recordingPulse 2s ease-in-out infinite;
}

@keyframes recordingPulse {
  0%,
  100% {
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  }
  50% {
    box-shadow: 0 4px 20px rgba(239, 68, 68, 0.8);
  }
}
</style>
