# iKeys Changelog

## Recent Updates (Latest Session)

### 🎮 UI/UX Improvements

#### 1. **Integrated Playback Controls into ChordInfoPanel**
- **Removed**: Floating bottom-left control buttons
- **Added**: Control buttons directly in the ChordInfoPanel sidebar
  - Play/Pause button
  - Stop button  
  - Loop toggle button
  - Play mode indicator ("▶️ Auto Play", "🎹 Free Play", etc.)
  - **NEW: "Close Song" button** to exit the current song and return to selection

**Files Modified:**
- `src/components/ChordInfoPanel.vue` - Added control buttons and styling
- `src/App.vue` - Connected event handlers, removed floating controls

**Benefits:**
- Cleaner, more organized interface
- All song controls in one place
- Better use of screen space

---

#### 2. **Created Reusable AlertModal Component**
- Replaced browser `confirm()` and `alert()` dialogs with a custom modal
- Supports multiple types: `alert`, `success`, `error`, `confirm`
- Beautiful animations and modern styling
- Used for recording confirmations and deletions

**Files Created:**
- `src/components/AlertModal.vue`

**Files Modified:**
- `src/App.vue` - Using AlertModal for recording alerts
- `src/components/RecordingsModal.vue` - Using AlertModal for delete confirmations

**Features:**
- Customizable icons and colors based on type
- Smooth animations
- Can be used in confirmation-only mode or with cancel option
- Backdrop blur effect

---

#### 3. **Mobile Device Blocker**
- Detects mobile devices and shows a desktop-only message
- Prevents the app from being used on mobile/tablet devices
- Responsive detection based on:
  - User agent (Android, iOS, etc.)
  - Screen width (< 768px)
  - Touch-only devices

**Files Created:**
- `src/components/MobileBlocker.vue`

**Files Modified:**
- `src/App.vue` - Integrated MobileBlocker component

**Features:**
- Animated desktop 🖥️ and mobile 📱 icons
- Clear messaging about desktop requirement
- Feature list (Keyboard Required, Interactive Piano, Full Song Learning)
- Shows current URL for easy access later
- Automatically hides on desktop devices
- Re-checks on window resize (orientation changes)

---

### 📦 Pinia State Management Integration

#### 4. **Pinia Stores with Persistent State**
Implemented centralized state management using Pinia with automatic localStorage persistence.

**Packages Installed:**
```bash
npm install pinia pinia-plugin-persistedstate
```

**Files Created:**
- `src/stores/recordings.ts` - Recording management store
- `src/stores/settings.ts` - App settings store
- `src/stores/user.ts` - User profile and progress store (future-ready)
- `src/stores/index.ts` - Central store exports
- `src/stores/README.md` - Comprehensive documentation

**Files Modified:**
- `src/main.ts` - Initialize Pinia and persistence plugin

#### Store Features:

**Recordings Store:**
- Add, delete, get recordings
- Automatic persistence to localStorage
- Ready to replace legacy `RecordingStorage` utils

**Settings Store:**
- Volume, tempo, visual settings
- Hand mode, loop, dark mode
- Validation built into setters
- Reset to defaults function

**User Store (Future-Ready):**
- User profile management
- Progress tracking (songs completed, practice time, accuracy, XP, level)
- Achievement system
- Level-up automation
- Ready for authentication integration

**Persistence:**
- All stores automatically save to localStorage
- Keys: `recordings`, `settings`, `user`
- Data survives page refreshes

---

### 🐛 Bug Fixes

#### 5. **Fixed Recording Playback Issues**
- Added `fingers` property to dynamically created chords from recordings
- Fixed duration calculation (was showing 0, now calculates from actual note timings)
- Ensured modals close properly when playing recordings
- Added `setTimeout` to allow UI updates before playback

**Files Modified:**
- `src/App.vue`

---

#### 6. **Fixed Keyboard Input Triggering During Text Entry**
- Prevented piano keys from triggering when typing in input fields
- Added checks for `INPUT`, `TEXTAREA`, and `contentEditable` elements

**Files Modified:**
- `src/App.vue` - `handleKeyboardDown` and `handleKeyboardUp` functions

---

### 🎹 Feature Enhancements

#### 7. **Improved Chord Info Display**
- Shows keyboard key mapping (e.g., "Q", "W", "E") instead of just note names
- Makes it easier for users to know which key to press
- Consistent across current chord and next chord displays

**Files Modified:**
- `src/components/ChordInfoPanel.vue`
- `src/components/FallingChords.vue`

---

### 📝 Documentation

#### 8. **Comprehensive Store Documentation**
- Created detailed README for Pinia stores
- Usage examples for all stores
- Migration guide from legacy localStorage utils
- TypeScript support documentation
- Best practices guide

**Files Created:**
- `src/stores/README.md`

---

## Summary of New Components

1. **AlertModal.vue** - Reusable confirmation/alert modal
2. **MobileBlocker.vue** - Desktop-only app enforcer
3. **Pinia Stores** - Centralized state management (3 stores)

## Summary of Modified Components

1. **App.vue** - Main app logic updates
2. **ChordInfoPanel.vue** - Integrated controls
3. **RecordingsModal.vue** - Delete confirmation modal
4. **main.ts** - Pinia initialization

## Breaking Changes

None - All changes are backward compatible.

## Future Enhancements

- [ ] Migrate from legacy `RecordingStorage` to Pinia `useRecordingsStore`
- [ ] Integrate user authentication (Firebase, Auth0, etc.)
- [ ] Cloud sync for recordings and settings
- [ ] Social features (sharing, leaderboards)
- [ ] Practice statistics dashboard
- [ ] Custom themes using settings store
- [ ] Mobile app version (React Native/Flutter)

---

## Technical Stack

- **Framework**: Vue 3 (Composition API)
- **State Management**: Pinia with persistence
- **Styling**: Tailwind CSS
- **Audio**: Tone.js
- **TypeScript**: Full type safety
- **Build Tool**: Vite

---

## Developer Notes

### Running the App
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### Testing Mobile Blocker
Resize browser window to < 768px or use browser DevTools device emulation.

---

**Last Updated**: Current Session
**Version**: 0.0.1

