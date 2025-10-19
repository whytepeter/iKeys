import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface UserProfile {
  id: string
  name: string
  email?: string
  avatar?: string
  createdAt: string
}

export interface UserProgress {
  songsCompleted: string[]
  totalPracticeTime: number // in seconds
  accuracy: number // average accuracy percentage
  level: number
  xp: number
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: string
}

export const useUserStore = defineStore(
  'user',
  () => {
    // User profile
    const profile = ref<UserProfile | null>(null)
    const isLoggedIn = computed(() => profile.value !== null)

    // User progress
    const progress = ref<UserProgress>({
      songsCompleted: [],
      totalPracticeTime: 0,
      accuracy: 0,
      level: 1,
      xp: 0,
    })

    // Achievements
    const achievements = ref<Achievement[]>([])

    // Profile actions
    function setProfile(userProfile: UserProfile) {
      profile.value = userProfile
    }

    function updateProfile(updates: Partial<UserProfile>) {
      if (profile.value) {
        profile.value = { ...profile.value, ...updates }
      }
    }

    function logout() {
      profile.value = null
    }

    // Progress actions
    function addCompletedSong(songId: string) {
      if (!progress.value.songsCompleted.includes(songId)) {
        progress.value.songsCompleted.push(songId)
        addXP(100) // Award 100 XP for completing a song
      }
    }

    function addPracticeTime(seconds: number) {
      progress.value.totalPracticeTime += seconds
    }

    function updateAccuracy(newAccuracy: number) {
      // Calculate weighted average
      const totalSongs = progress.value.songsCompleted.length
      if (totalSongs === 0) {
        progress.value.accuracy = newAccuracy
      } else {
        progress.value.accuracy =
          (progress.value.accuracy * totalSongs + newAccuracy) / (totalSongs + 1)
      }
    }

    function addXP(amount: number) {
      progress.value.xp += amount
      // Level up logic (100 XP per level)
      const newLevel = Math.floor(progress.value.xp / 100) + 1
      if (newLevel > progress.value.level) {
        progress.value.level = newLevel
        // Unlock achievement for level up
        unlockAchievement({
          id: `level-${newLevel}`,
          title: `Level ${newLevel}`,
          description: `Reached level ${newLevel}!`,
          icon: '🎉',
          unlockedAt: new Date().toISOString(),
        })
      }
    }

    // Achievement actions
    function unlockAchievement(achievement: Achievement) {
      if (!achievements.value.find((a) => a.id === achievement.id)) {
        achievements.value.push(achievement)
      }
    }

    function hasAchievement(achievementId: string): boolean {
      return achievements.value.some((a) => a.id === achievementId)
    }

    // Reset all data
    function resetProgress() {
      progress.value = {
        songsCompleted: [],
        totalPracticeTime: 0,
        accuracy: 0,
        level: 1,
        xp: 0,
      }
      achievements.value = []
    }

    function resetAll() {
      profile.value = null
      resetProgress()
    }

    return {
      // State
      profile,
      isLoggedIn,
      progress,
      achievements,
      // Actions
      setProfile,
      updateProfile,
      logout,
      addCompletedSong,
      addPracticeTime,
      updateAccuracy,
      addXP,
      unlockAchievement,
      hasAchievement,
      resetProgress,
      resetAll,
    }
  },
  {
    // Only persist progress and achievements, NOT user profile
    // Appwrite manages authentication via HTTP-only cookies
    persist: {
      // paths: ['progress', 'achievements'],
    },
  }
)

