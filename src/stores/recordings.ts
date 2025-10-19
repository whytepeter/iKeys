import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface RecordedNote {
  note: string
  time: number
  duration: number
}

export interface Recording {
  id: string
  title: string
  date: string
  duration: number
  notes: RecordedNote[]
}

export const useRecordingsStore = defineStore(
  'recordings',
  () => {
    const recordings = ref<Recording[]>([])

    function addRecording(recording: Recording) {
      recordings.value.push(recording)
    }

    function deleteRecording(id: string) {
      const index = recordings.value.findIndex((r) => r.id === id)
      if (index !== -1) {
        recordings.value.splice(index, 1)
      }
    }

    function getRecording(id: string): Recording | undefined {
      return recordings.value.find((r) => r.id === id)
    }

    function getAllRecordings(): Recording[] {
      return recordings.value
    }

    function clearAllRecordings() {
      recordings.value = []
    }

    return {
      recordings,
      addRecording,
      deleteRecording,
      getRecording,
      getAllRecordings,
      clearAllRecordings,
    }
  },
  {
    persist: true,
  }
)

