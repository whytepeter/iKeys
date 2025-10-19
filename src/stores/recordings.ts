import { defineStore } from 'pinia'
import { ref } from 'vue'
import { recordingsService, type RecordingDocument } from '../services/recordingsService'

export const useRecordingsStore = defineStore('recordings', () => {
  // User's recordings (from Appwrite)
  const myRecordings = ref<RecordingDocument[]>([])

  // Published songs from all users (from Appwrite)
  const publishedSongs = ref<RecordingDocument[]>([])

  // Loading states
  const isLoadingMyRecordings = ref(false)
  const isLoadingPublishedSongs = ref(false)
  const publishingStates = ref<Record<string, boolean>>({}) // Track loading state per recording

  // Fetch user's recordings
  async function loadMyRecordings(userId: string) {
    isLoadingMyRecordings.value = true
    try {
      myRecordings.value = await recordingsService.getUserRecordings(userId)
    } catch (error) {
      console.error('Failed to load recordings:', error)
      throw error
    } finally {
      isLoadingMyRecordings.value = false
    }
  }

  // Fetch published songs from all users
  async function loadPublishedSongs(searchQuery?: string) {
    isLoadingPublishedSongs.value = true
    try {
      publishedSongs.value = await recordingsService.getPublishedSongs(searchQuery)
    } catch (error) {
      console.error('Failed to load published songs:', error)
      throw error
    } finally {
      isLoadingPublishedSongs.value = false
    }
  }

  // Add new recording to state (after creating in Appwrite)
  function addRecording(recording: RecordingDocument) {
    myRecordings.value.unshift(recording) // Add to beginning
  }

  // Update recording title
  async function updateRecordingTitle(recordingId: string, newTitle: string) {
    try {
      const updated = await recordingsService.updateRecording(recordingId, { title: newTitle })

      // Update in myRecordings
      const index = myRecordings.value.findIndex((r) => r.$id === recordingId)
      if (index !== -1) {
        myRecordings.value[index] = updated
      }

      // Update in publishedSongs if it exists there
      const pubIndex = publishedSongs.value.findIndex((r) => r.$id === recordingId)
      if (pubIndex !== -1) {
        publishedSongs.value[pubIndex] = updated
      }

      return updated
    } catch (error) {
      console.error('Failed to update recording title:', error)
      throw error
    }
  }

  // Toggle publish status
  async function togglePublish(recordingId: string, isPublished: boolean) {
    // Set loading state
    publishingStates.value[recordingId] = true

    try {
      const updated = await recordingsService.togglePublish(recordingId, isPublished)

      // Update in myRecordings
      const index = myRecordings.value.findIndex((r) => r.$id === recordingId)
      if (index !== -1) {
        myRecordings.value[index] = updated
      }

      // If publishing, add to publishedSongs
      if (isPublished) {
        const pubIndex = publishedSongs.value.findIndex((r) => r.$id === recordingId)
        if (pubIndex === -1) {
          publishedSongs.value.unshift(updated)
        } else {
          publishedSongs.value[pubIndex] = updated
        }
      } else {
        // If unpublishing, remove from publishedSongs
        publishedSongs.value = publishedSongs.value.filter((r) => r.$id !== recordingId)
      }

      return updated
    } catch (error) {
      console.error('Failed to toggle publish:', error)
      throw error
    } finally {
      // Clear loading state
      delete publishingStates.value[recordingId]
    }
  }

  // Delete recording
  async function deleteRecording(recordingId: string) {
    try {
      await recordingsService.deleteRecording(recordingId)

      // Remove from myRecordings
      myRecordings.value = myRecordings.value.filter((r) => r.$id !== recordingId)

      // Remove from publishedSongs
      publishedSongs.value = publishedSongs.value.filter((r) => r.$id !== recordingId)
    } catch (error) {
      console.error('Failed to delete recording:', error)
      throw error
    }
  }

  // Clear all state (on logout)
  function clearAll() {
    myRecordings.value = []
    publishedSongs.value = []
    publishingStates.value = {}
  }

  // Check if a recording is being published/unpublished
  function isPublishing(recordingId: string): boolean {
    return !!publishingStates.value[recordingId]
  }

  return {
    // State
    myRecordings,
    publishedSongs,
    isLoadingMyRecordings,
    isLoadingPublishedSongs,
    publishingStates,

    // Actions
    loadMyRecordings,
    loadPublishedSongs,
    addRecording,
    updateRecordingTitle,
    togglePublish,
    deleteRecording,
    clearAll,
    isPublishing,
  }
},
  {
    persist: true,
  }
)

