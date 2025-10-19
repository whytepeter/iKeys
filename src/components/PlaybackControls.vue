<template>
  <div class="playback-controls">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <!-- Play Mode Selection -->
      <div class="mb-6">
        <h3
          class="text-sm font-semibold mb-3 text-slate-700 dark:text-slate-200"
        >
          Play Mode
        </h3>
        <div class="flex gap-2">
          <button
            v-for="mode in playModes"
            :key="mode.value"
            :class="['mode-button', { active: playMode === mode.value }]"
            @click="changeMode(mode.value)"
          >
            <span class="mode-icon">{{ mode.icon }}</span>
            <span class="mode-label">{{ mode.label }}</span>
          </button>
        </div>
      </div>

      <!-- Transport Controls -->
      <div class="mb-6 flex items-center justify-center gap-4">
        <button class="control-button stop" @click="emit('stop')" title="Stop">
          ⏹️
        </button>
        <button
          v-if="!isPlaying"
          class="control-button play"
          @click="emit('play')"
          title="Play"
        >
          ▶️
        </button>
        <button
          v-else
          class="control-button pause"
          @click="emit('pause')"
          title="Pause"
        >
          ⏸️
        </button>
        <button
          :class="['control-button loop', { active: loop }]"
          @click="emit('toggleLoop')"
          title="Loop"
        >
          🔁
        </button>
      </div>

      <!-- Progress Bar -->
      <div class="mb-6">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>

      <!-- Sliders -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Tempo Control -->
        <div>
          <label class="slider-label">
            <span>Tempo</span>
            <span class="slider-value">{{ tempo }}%</span>
          </label>
          <input
            type="range"
            min="50"
            max="150"
            :value="tempo"
            @input="updateTempo"
            class="slider"
          />
          <div class="slider-marks">
            <span>50%</span>
            <span>100%</span>
            <span>150%</span>
          </div>
        </div>

        <!-- Volume Control -->
        <div>
          <label class="slider-label">
            <span>Volume</span>
            <span class="slider-value">{{ volume }}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            :value="volume"
            @input="updateVolume"
            class="slider"
          />
          <div class="slider-marks">
            <span>🔇</span>
            <span>🔊</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlayMode } from "../types";

defineProps<{
  isPlaying: boolean;
  playMode: PlayMode;
  tempo: number;
  volume: number;
  loop: boolean;
  progress: number;
}>();

const emit = defineEmits<{
  play: [];
  pause: [];
  stop: [];
  changeMode: [mode: PlayMode];
  changeTempo: [value: number];
  changeVolume: [value: number];
  toggleLoop: [];
}>();

const playModes = [
  { value: "free" as const, label: "Free Play", icon: "🎹" },
  { value: "auto" as const, label: "Auto Play", icon: "▶️" },
  { value: "practice" as const, label: "Practice", icon: "🎓" },
];

const changeMode = (mode: PlayMode) => {
  emit("changeMode", mode);
};

const updateTempo = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("changeTempo", Number(target.value));
};

const updateVolume = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("changeVolume", Number(target.value));
};
</script>

<style scoped>
.playback-controls {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.mode-button {
  flex: 1;
  padding: 12px 16px;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  color: #64748b;
}

.dark .mode-button {
  background: #334155;
  border-color: #475569;
  color: #cbd5e1;
}

.mode-button:hover {
  border-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.mode-button.active {
  border-color: #3b82f6;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
}

.mode-icon {
  font-size: 1.25rem;
}

.mode-label {
  font-size: 0.875rem;
}

.control-button {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.control-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.control-button:active {
  transform: scale(0.95);
}

.control-button.play {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  width: 80px;
  height: 80px;
  font-size: 2rem;
}

.control-button.pause {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  width: 80px;
  height: 80px;
  font-size: 2rem;
}

.control-button.stop {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.control-button.loop {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.control-button.loop.active {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.dark .progress-bar {
  background: #334155;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  transition: width 0.3s ease;
  border-radius: 4px;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
}

.dark .slider-label {
  color: #cbd5e1;
}

.slider-value {
  color: #3b82f6;
  font-family: monospace;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e2e8f0;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.dark .slider {
  background: #334155;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}

.slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 0.75rem;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .mode-button {
    padding: 10px 12px;
    font-size: 0.75rem;
  }

  .mode-icon {
    font-size: 1rem;
  }

  .control-button {
    width: 56px;
    height: 56px;
    font-size: 1.25rem;
  }

  .control-button.play,
  .control-button.pause {
    width: 72px;
    height: 72px;
    font-size: 1.75rem;
  }
}
</style>
