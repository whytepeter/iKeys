<template>
  <Modal :isOpen="isOpen" @close="$emit('close')" title="My Recordings">
    <div class="recordings-container">
      <!-- Empty State -->
      <div v-if="recordings.length === 0" class="empty-state">
        <div class="empty-icon">🎙️</div>
        <h3>No Recordings Yet</h3>
        <p>
          Press the record button to start capturing your piano performances!
        </p>
      </div>

      <!-- Recordings List -->
      <div v-else class="recordings-list">
        <div
          v-for="recording in recordings"
          :key="recording.id"
          class="recording-card"
          :class="{ active: currentRecording?.id === recording.id }"
        >
          <div class="recording-info">
            <div class="recording-header">
              <h3>{{ recording.title }}</h3>
              <span class="recording-date">{{
                formatDate(recording.date)
              }}</span>
            </div>
            <div class="recording-meta">
              <span class="meta-item">
                ⏱️ {{ formatDuration(recording.duration) }}
              </span>
              <span class="meta-item">
                🎵 {{ recording.notes.length }} notes
              </span>
            </div>
          </div>

          <div class="recording-actions">
            <button
              @click="playRecording(recording)"
              class="action-btn play-btn"
              :disabled="isPlaying && currentRecording?.id === recording.id"
            >
              {{
                isPlaying && currentRecording?.id === recording.id ? "⏸️" : "▶️"
              }}
            </button>
            <button
              @click="deleteRecording(recording.id)"
              class="action-btn delete-btn"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Modal from "./Modal.vue";
import { RecordingStorage, type Recording } from "../utils/recordingEngine";

const props = defineProps<{
  isOpen: boolean;
  currentRecording: Recording | null;
  isPlaying: boolean;
}>();

const emit = defineEmits<{
  close: [];
  playRecording: [recording: Recording];
}>();

const recordings = ref<Recording[]>([]);

const loadRecordings = () => {
  recordings.value = RecordingStorage.getAll();
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
    hour: "2-digit",
    minute: "2-digit",
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

// Reload when modal opens
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      loadRecordings();
    }
  }
);
</script>

<script lang="ts">
import { watch } from "vue";
export default {
  name: "RecordingsModal",
};
</script>

<style scoped>
.recordings-container {
  min-height: 400px;
  max-height: 600px;
  overflow-y: auto;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: #e5e7eb;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #9ca3af;
  max-width: 400px;
}

.recordings-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recording-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.recording-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #d97757;
}

.recording-card.active {
  background: rgba(217, 119, 87, 0.1);
  border-color: #d97757;
}

.recording-info {
  flex: 1;
}

.recording-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.recording-header h3 {
  font-size: 1.125rem;
  color: #e5e7eb;
  margin: 0;
}

.recording-date {
  font-size: 0.875rem;
  color: #9ca3af;
}

.recording-meta {
  display: flex;
  gap: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #9ca3af;
}

.recording-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn {
  font-size: 1.25rem;
}

.action-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: #d97757;
  transform: translateY(-2px);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.play-btn:hover:not(:disabled) {
  background: rgba(217, 119, 87, 0.2);
}

.delete-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
}

/* Dark mode scrollbar */
.recordings-container::-webkit-scrollbar {
  width: 8px;
}

.recordings-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.recordings-container::-webkit-scrollbar-thumb {
  background: rgba(217, 119, 87, 0.5);
  border-radius: 4px;
}

.recordings-container::-webkit-scrollbar-thumb:hover {
  background: rgba(217, 119, 87, 0.7);
}
</style>
