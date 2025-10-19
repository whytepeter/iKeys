# iKeys Pinia Stores

This directory contains Pinia stores with persistent storage for the iKeys application.

## 📦 Stores Overview

### 1. **Recordings Store** (`recordings.ts`)
Manages user recordings with automatic persistence to localStorage.

**State:**
- `recordings`: Array of all saved recordings

**Actions:**
- `addRecording(recording)`: Add a new recording
- `deleteRecording(id)`: Delete a recording by ID
- `getRecording(id)`: Get a specific recording
- `getAllRecordings()`: Get all recordings
- `clearAllRecordings()`: Delete all recordings

**Usage Example:**
```typescript
import { useRecordingsStore } from '@/stores'

const recordingsStore = useRecordingsStore()

// Add a recording
recordingsStore.addRecording({
  id: Date.now().toString(),
  title: 'My Performance',
  date: new Date().toISOString(),
  duration: 120,
  notes: [{ note: 'C4', time: 0, duration: 0.5 }]
})

// Get all recordings
const myRecordings = recordingsStore.getAllRecordings()

// Delete a recording
recordingsStore.deleteRecording('123456789')
```

---

### 2. **Settings Store** (`settings.ts`)
Manages application settings and user preferences.

**State:**
- `volume`: Audio volume (0-100)
- `tempo`: Playback tempo (50-150%)
- `showFingerNumbers`: Display finger numbers on keyboard
- `showNoteNames`: Display note names
- `showKeyLabels`: Display keyboard key labels
- `fallingSpeed`: Speed of falling notes animation (0.5-2.0)
- `handMode`: 'left' | 'right' | 'both'
- `loop`: Loop playback
- `darkMode`: Dark mode enabled

**Actions:**
- `setVolume(value)`: Update volume
- `setTempo(value)`: Update tempo
- `setShowFingerNumbers(boolean)`: Toggle finger numbers
- `setShowNoteNames(boolean)`: Toggle note names
- `setShowKeyLabels(boolean)`: Toggle key labels
- `setFallingSpeed(value)`: Update falling speed
- `setHandMode(mode)`: Update hand mode
- `setLoop(boolean)`: Toggle loop
- `setDarkMode(boolean)`: Toggle dark mode
- `resetToDefaults()`: Reset all settings to defaults

**Usage Example:**
```typescript
import { useSettingsStore } from '@/stores'

const settingsStore = useSettingsStore()

// Update settings
settingsStore.setVolume(80)
settingsStore.setTempo(120)
settingsStore.setDarkMode(true)

// Access settings in component
const volume = settingsStore.volume
const tempo = settingsStore.tempo

// Reset to defaults
settingsStore.resetToDefaults()
```

---

### 3. **User Store** (`user.ts`)
Manages user profile, progress, and achievements (future-ready for authentication).

**State:**
- `profile`: User profile data (null if not logged in)
- `isLoggedIn`: Computed boolean for login status
- `progress`: User progress tracking (songs completed, practice time, accuracy, level, XP)
- `achievements`: Array of unlocked achievements

**Actions:**

**Profile:**
- `setProfile(userProfile)`: Set user profile
- `updateProfile(updates)`: Update profile fields
- `logout()`: Clear user session

**Progress:**
- `addCompletedSong(songId)`: Mark song as completed (awards 100 XP)
- `addPracticeTime(seconds)`: Add practice time
- `updateAccuracy(newAccuracy)`: Update average accuracy
- `addXP(amount)`: Add experience points (auto-levels)

**Achievements:**
- `unlockAchievement(achievement)`: Unlock a new achievement
- `hasAchievement(achievementId)`: Check if achievement unlocked

**Reset:**
- `resetProgress()`: Reset progress and achievements
- `resetAll()`: Reset everything (profile + progress)

**Usage Example:**
```typescript
import { useUserStore } from '@/stores'

const userStore = useUserStore()

// Set user profile (future authentication)
userStore.setProfile({
  id: '123',
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: new Date().toISOString()
})

// Track progress
userStore.addCompletedSong('all-of-me')
userStore.addPracticeTime(300) // 5 minutes
userStore.updateAccuracy(95)

// Check progress
console.log(`Level: ${userStore.progress.level}`)
console.log(`XP: ${userStore.progress.xp}`)
console.log(`Songs completed: ${userStore.progress.songsCompleted.length}`)

// Unlock achievement
userStore.unlockAchievement({
  id: 'first-song',
  title: 'First Steps',
  description: 'Complete your first song',
  icon: '🎵',
  unlockedAt: new Date().toISOString()
})

// Logout
userStore.logout()
```

---

## 🔧 Setup

The stores are configured with `pinia-plugin-persistedstate` for automatic persistence to localStorage.

**In `main.ts`:**
```typescript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.mount('#app')
```

---

## 💾 Persistence

All stores automatically persist their state to `localStorage` with the following keys:
- `recordings`: Recordings store data
- `settings`: Settings store data
- `user`: User store data

**Clear stored data:**
```typescript
localStorage.removeItem('recordings')
localStorage.removeItem('settings')
localStorage.removeItem('user')
```

---

## 🚀 Migration from Legacy Code

### Before (localStorage utils):
```typescript
import { RecordingStorage } from './utils/recordingEngine'

RecordingStorage.save(recording)
const recordings = RecordingStorage.getAll()
RecordingStorage.delete(id)
```

### After (Pinia store):
```typescript
import { useRecordingsStore } from './stores'

const recordingsStore = useRecordingsStore()

recordingsStore.addRecording(recording)
const recordings = recordingsStore.getAllRecordings()
recordingsStore.deleteRecording(id)
```

---

## 📝 TypeScript Support

All stores are fully typed with TypeScript interfaces exported for use in components:

```typescript
import type { Recording, RecordedNote } from './stores/recordings'
import type { UserProfile, UserProgress, Achievement } from './stores/user'
```

---

## 🎯 Best Practices

1. **Import centrally:**
   ```typescript
   import { useRecordingsStore, useSettingsStore, useUserStore } from './stores'
   ```

2. **Use in components:**
   ```typescript
   <script setup lang="ts">
   import { useSettingsStore } from '@/stores'
   
   const settingsStore = useSettingsStore()
   </script>
   ```

3. **Computed properties:**
   ```typescript
   import { computed } from 'vue'
   
   const volume = computed(() => settingsStore.volume)
   ```

4. **Direct mutations:**
   ```typescript
   // ✅ Good: Use actions
   settingsStore.setVolume(80)
   
   // ❌ Avoid: Direct mutation (works but bypasses validation)
   settingsStore.volume = 80
   ```

---

## 🔮 Future Enhancements

- [ ] Integrate user authentication (Firebase, Auth0, etc.)
- [ ] Sync data across devices (cloud storage)
- [ ] Import/export recordings
- [ ] Social features (share recordings, leaderboards)
- [ ] Practice statistics and analytics
- [ ] Custom achievement system
- [ ] Theme customization store

