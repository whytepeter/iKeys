<template>
  <div class="min-h-screen bg-zinc-950 flex flex-col overflow-hidden">
    <!-- Header -->
    <header
      class="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm z-50"
    >
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
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

        <!-- Song Info -->
        <div v-if="currentSong" class="flex items-center gap-4">
          <div class="text-right">
            <h2 class="text-lg font-semibold text-white">
              {{ currentSong.title }}
            </h2>
            <p class="text-sm text-zinc-400">
              {{ currentSong.artist }} · {{ currentSong.difficulty }}
            </p>
          </div>
          <div class="w-2 h-2 rounded-full bg-[#D97757] animate-pulse"></div>
        </div>
      </div>
    </header>

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
            :songs="songs"
            :current-song="currentSong"
            :current-recording="playingRecording"
            :is-playing="isPlaying && playingRecording !== null"
            @select-song="selectSong"
            @play-recording="playRecording"
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

    <!-- Playback Controls - Floating Bottom Left -->
    <div v-if="currentSong" class="fixed bottom-6 left-6 z-50">
      <div
        class="flex items-center gap-2 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-700 px-6 py-4 backdrop-blur-xl"
      >
        <button @click="stop" class="claude-control-btn stop" title="Stop">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="6" width="12" height="12" rx="2" />
          </svg>
        </button>

        <button
          v-if="!isPlaying"
          @click="play"
          class="claude-control-btn play"
          title="Play"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <button
          v-else
          @click="pause"
          class="claude-control-btn pause"
          title="Pause"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        </button>

        <div class="h-8 w-px bg-zinc-700 mx-2"></div>

        <div
          class="text-sm font-medium text-zinc-300 flex items-center gap-2 px-3"
        >
          <span class="w-2 h-2 rounded-full bg-[#D97757]"></span>
          {{ playModeLabel }}
        </div>
      </div>
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
      @confirm="handleRecordingTitleConfirm"
      @cancel="handleRecordingTitleCancel"
    />

    <!-- Recording Alert Modal -->
    <ConfirmModal
      :is-open="showRecordingAlert"
      title="Recording"
      :message="recordingAlertMessage"
      :type="recordingAlertType"
      confirm-text="OK"
      @confirm="showRecordingAlert = false"
      @cancel="showRecordingAlert = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import PianoKeyboard from "./components/PianoKeyboard.vue";
import FallingChords from "./components/FallingChords.vue";
import ChordInfoPanel from "./components/ChordInfoPanel.vue";
import SettingsModal from "./components/SettingsModal.vue";
import SongLibraryModal from "./components/SongLibraryModal.vue";
import ChordDictionary from "./components/ChordDictionary.vue";
import InputModal from "./components/InputModal.vue";
import ConfirmModal from "./components/ConfirmModal.vue";
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

// Recording modals
const showRecordingTitleInput = ref(false);
const showRecordingAlert = ref(false);
const recordingAlertMessage = ref("");
const recordingAlertType = ref<"alert" | "success" | "error">("alert");
const pendingRecordingNotes = ref<any[]>([]);

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

const playModeLabel = computed(() => {
  const labels: Record<string, string> = {
    free: "Free Play",
    auto: "Auto Play",
    practice: "Practice Mode",
    wait: "Wait Mode",
  };
  return labels[playMode.value];
});

onMounted(() => {
  audioEngine = new AudioEngine();
  chordDetector = new ChordDetector();
  recordingEngine = new RecordingEngine();
  setupKeyboardListeners();
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
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
  currentSong.value = song;
  playMode.value = "auto";
  // Close all views to show the song
  showSongLibrary.value = false;
  showChordDictionary.value = false;
  showSettings.value = false;
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
};

const changePlayMode = (mode: PlayMode) => {
  stop();
  playMode.value = mode;
};

const changeHandMode = (mode: HandMode) => {
  handMode.value = mode;
};

const changeTempo = (value: number) => {
  tempo.value = value;
};

const changeVolume = (value: number) => {
  volume.value = value;
  audioEngine.setVolume(value / 100);
};

const toggleLoop = () => {
  loop.value = !loop.value;
};

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

// Keyboard mapping - QWERTY Layout (Intuitive!)
// White keys span across QWERTY rows: Q-U, I-V, B-/
// Black keys use numbers (2,3,5,6,7,9,0) and letters (S,D,F,H,J,L,;) between white keys
const keyMap: Record<string, string> = {
  // ===== OCTAVE 3 (Top row: Q-U with numbers for black keys) =====
  q: "C3",
  "2": "C#3",
  w: "D3",
  "3": "D#3",
  e: "E3",
  r: "F3",
  "5": "F#3",
  t: "G3",
  "6": "G#3",
  y: "A3",
  "7": "A#3",
  u: "B3",

  // ===== OCTAVE 4 (Mixed: I-P, then Z-V with letters for black keys) =====
  i: "C4", // Middle C
  "9": "C#4",
  o: "D4",
  "0": "D#4",
  p: "E4",
  z: "F4",
  s: "F#4",
  x: "G4",
  d: "G#4",
  c: "A4",
  f: "A#4",
  v: "B4",

  // ===== OCTAVE 5 (Bottom row: B-/ with letters for black keys) =====
  b: "C5",
  h: "C#5",
  n: "D5",
  j: "D#5",
  m: "E5",
  ",": "F5",
  l: "F#5",
  ".": "G5",
  ";": "G#5",
  "/": "A5",
};

const handleKeyboardDown = (event: KeyboardEvent) => {
  const key = event.key.toLowerCase();
  const note = keyMap[key];

  if (note && !event.repeat) {
    handleKeyDown(note);
  }
};

const handleKeyboardUp = (event: KeyboardEvent) => {
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
const handleRecordingTitleConfirm = (title: string) => {
  showRecordingTitleInput.value = false;

  const recording: Recording = {
    id: Date.now().toString(),
    title,
    date: new Date().toISOString(),
    duration: recordingElapsedTime.value,
    notes: pendingRecordingNotes.value,
  };

  RecordingStorage.save(recording);
  console.log("✅ Recording saved:", recording);

  // Clear pending notes
  pendingRecordingNotes.value = [];

  // Show success message
  recordingAlertMessage.value = `Recording "${title}" saved successfully!`;
  recordingAlertType.value = "success";
  showRecordingAlert.value = true;
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

  playingRecording.value = recording;
  isPlaying.value = true;
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

  // Start playback by calling play
  play();
};

const convertNotesToChords = (notes: RecordedNote[]): Chord[] => {
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

  // Convert groups to chords
  groupedNotes.forEach((groupNotes, time) => {
    chords.push({
      time,
      duration: Math.max(...groupNotes.map((n) => n.duration)),
      chordName: groupNotes.length === 1 ? groupNotes[0].note : "Chord",
      keys: groupNotes.map((n) => n.note),
      hand: "both" as const,
      color: "#D97757",
      noteDurations: groupNotes.map((n) => n.duration),
    });
  });

  return chords.sort((a, b) => a.time - b.time);
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

/* Claude-style control buttons */
.claude-control-btn {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(63, 63, 70, 0.5);
  color: white;
}

.claude-control-btn:hover {
  transform: scale(1.05);
}

.claude-control-btn.play {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  width: 56px;
  height: 56px;
}

.claude-control-btn.pause {
  background: linear-gradient(135deg, #d97757 0%, #fb923c 100%);
  width: 56px;
  height: 56px;
}

.claude-control-btn.stop {
  background: rgba(63, 63, 70, 0.5);
  color: rgba(255, 255, 255, 0.6);
}

.claude-control-btn.stop:hover {
  background: #ef4444;
  color: white;
}
</style>
