<template>
  <div class="sheet-music-container">
    <div
      class="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-orange-200 dark:border-zinc-700 p-6 overflow-hidden"
    >
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {{
            currentSong
              ? `${currentSong.title} - ${currentSong.artist}`
              : "Select a song to view sheet music"
          }}
        </h3>
        <div v-if="currentSong" class="text-sm text-muted-foreground">
          Chord {{ currentNoteIndex + 1 }} / {{ currentSong.chords.length }}
        </div>
      </div>

      <div class="staff-container" ref="staffContainer">
        <!-- Musical Staff Lines -->
        <div class="staff-lines">
          <div v-for="i in 5" :key="i" class="staff-line"></div>
        </div>

        <!-- Treble Clef -->
        <div class="treble-clef">𝄞</div>

        <!-- Notes Container with Scrolling -->
        <div
          class="notes-scroll-container"
          :style="{ transform: `translateX(${scrollOffset}px)` }"
        >
          <div
            v-for="(note, index) in displayNotes"
            :key="index"
            class="note-wrapper"
            :style="{ left: `${getNotePosition(index)}px` }"
          >
            <!-- Note on Staff -->
            <div
              v-for="(singleNote, noteIdx) in note.keys"
              :key="noteIdx"
              :class="[
                'musical-note',
                {
                  active: index === currentNoteIndex && isPlaying,
                  upcoming:
                    index > currentNoteIndex && index <= currentNoteIndex + 3,
                  next: index === currentNoteIndex + 1,
                },
              ]"
              :style="{ bottom: `${getNoteVerticalPosition(singleNote)}px` }"
            >
              <!-- Note Head -->
              <div class="note-head">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="8"
                    ry="6"
                    transform="rotate(-20 12 12)"
                  />
                </svg>
              </div>

              <!-- Note Stem -->
              <div class="note-stem"></div>

              <!-- Note Label -->
              <div class="note-label">{{ singleNote }}</div>
            </div>

            <!-- Duration indicator (note length) -->
            <div
              class="note-duration"
              :style="{ width: `${getNoteDurationWidth(note.duration)}px` }"
            ></div>
          </div>
        </div>

        <!-- Current Position Indicator (vertical line) -->
        <div v-if="isPlaying" class="position-indicator"></div>
      </div>

      <!-- Legend -->
      <div class="mt-4 flex items-center gap-6 text-xs text-muted-foreground">
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 rounded-full bg-blue-500 shadow-lg"></div>
          <span>Current Note</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 rounded-full bg-amber-400 opacity-60"></div>
          <span>Next Note</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 rounded-full bg-slate-300 opacity-40"></div>
          <span>Upcoming Notes</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import type { Song } from "../types";

const props = defineProps<{
  currentSong: Song | null;
  isPlaying: boolean;
  currentNoteIndex: number;
}>();

const staffContainer = ref<HTMLElement | null>(null);
const scrollOffset = ref(0);
const noteSpacing = 120; // pixels between notes

// Note to staff position mapping (in pixels from bottom of staff)
const notePositions: Record<string, number> = {
  C3: -40,
  "C#3": -40,
  D3: -30,
  "D#3": -30,
  E3: -20,
  F3: -10,
  "F#3": -10,
  G3: 0,
  "G#3": 0,
  A3: 10,
  "A#3": 10,
  B3: 20,
  C4: 30,
  "C#4": 30,
  D4: 40,
  "D#4": 40,
  E4: 50,
  F4: 60,
  "F#4": 60,
  G4: 70,
  "G#4": 70,
  A4: 80,
  "A#4": 80,
  B4: 90,
  C5: 100,
  "C#5": 100,
  D5: 110,
  "D#5": 110,
  E5: 120,
  F5: 130,
  "F#5": 130,
  G5: 140,
  "G#5": 140,
  A5: 150,
  "A#5": 150,
  B5: 160,
};

const displayNotes = computed(() => {
  return props.currentSong?.chords || [];
});

const getNotePosition = (index: number): number => {
  return 200 + index * noteSpacing; // Start 200px from left
};

const getNoteVerticalPosition = (note: string): number => {
  return notePositions[note] || 70; // Default to middle of staff
};

const getNoteDurationWidth = (duration: number): number => {
  // Scale duration to visual width
  return Math.min(duration / 10, 80);
};

// Smooth scrolling based on current note
watch(
  () => props.currentNoteIndex,
  (newIndex) => {
    if (props.isPlaying && props.currentSong) {
      // Keep current note centered at position 250px
      const targetScroll = -(newIndex * noteSpacing - 50);
      animateScroll(targetScroll);
    }
  },
  { immediate: true }
);

watch(
  () => props.isPlaying,
  (playing) => {
    if (!playing && props.currentNoteIndex === 0) {
      // Reset scroll when stopped
      animateScroll(0);
    }
  }
);

const animateScroll = (target: number) => {
  const duration = 300;
  const start = scrollOffset.value;
  const distance = target - start;
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    scrollOffset.value = start + distance * easeProgress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

onMounted(() => {
  scrollOffset.value = 0;
});

onUnmounted(() => {
  scrollOffset.value = 0;
});
</script>

<style scoped>
.sheet-music-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.staff-container {
  position: relative;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(to bottom, #fefefe 0%, #f8f9fa 100%);
  border-radius: 8px;
  padding: 40px 20px;
}

.dark .staff-container {
  background: linear-gradient(to bottom, #1e293b 0%, #0f172a 100%);
}

.staff-lines {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
}

.staff-line {
  width: 100%;
  height: 2px;
  background: #333;
  opacity: 0.3;
}

.dark .staff-line {
  background: #94a3b8;
  opacity: 0.4;
}

.treble-clef {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 120px;
  color: #333;
  opacity: 0.6;
  z-index: 1;
  font-family: serif;
}

.dark .treble-clef {
  color: #cbd5e1;
  opacity: 0.5;
}

.notes-scroll-container {
  position: relative;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.note-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.musical-note {
  position: relative;
  transition: all 0.3s ease;
  opacity: 0.4;
  transform: scale(0.9);
}

.musical-note.upcoming {
  opacity: 0.5;
  transform: scale(0.95);
}

.musical-note.next {
  opacity: 0.7;
  transform: scale(1);
  filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.6));
}

.musical-note.active {
  opacity: 1;
  transform: scale(1.15);
  animation: note-glow 0.6s ease-in-out infinite alternate;
}

.note-head {
  position: relative;
  width: 24px;
  height: 24px;
  color: #1e293b;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.dark .note-head {
  color: #e2e8f0;
}

.musical-note.active .note-head {
  color: #f97316;
  filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.8));
}

.musical-note.next .note-head {
  color: #fb923c;
}

.note-stem {
  position: absolute;
  left: 19px;
  top: 0;
  width: 2px;
  height: 40px;
  background: currentColor;
}

.note-label {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  font-weight: 600;
  color: #64748b;
  background: rgba(255, 255, 255, 0.9);
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s;
}

.dark .note-label {
  color: #cbd5e1;
  background: rgba(30, 41, 59, 0.9);
}

.musical-note:hover .note-label,
.musical-note.active .note-label,
.musical-note.next .note-label {
  opacity: 1;
}

.note-duration {
  position: absolute;
  bottom: -10px;
  left: 12px;
  height: 3px;
  background: currentColor;
  opacity: 0.3;
  border-radius: 2px;
}

.position-indicator {
  position: absolute;
  left: 250px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    #f97316 20%,
    #f97316 80%,
    transparent 100%
  );
  box-shadow: 0 0 10px rgba(249, 115, 22, 0.6);
  animation: pulse-indicator 1.5s ease-in-out infinite;
  z-index: 10;
}

@keyframes note-glow {
  0% {
    filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.6));
  }
  100% {
    filter: drop-shadow(0 0 20px rgba(249, 115, 22, 1));
  }
}

@keyframes pulse-indicator {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .staff-container {
    height: 220px;
    padding: 30px 15px;
  }

  .treble-clef {
    font-size: 80px;
    left: 10px;
  }

  .note-head {
    width: 18px;
    height: 18px;
  }

  .note-head svg {
    width: 18px;
    height: 18px;
  }

  .note-stem {
    left: 14px;
    height: 30px;
  }

  .note-label {
    font-size: 8px;
    padding: 1px 4px;
  }
}
</style>
