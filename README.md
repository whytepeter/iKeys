# iKeys - Chord-Based Piano Learning App

A modern, interactive piano learning application that teaches you to play songs using **chords** instead of individual notes. Built with Vue 3, TypeScript, and Tailwind CSS.

## 🎹 What Makes iKeys Different?

Unlike traditional piano apps that require you to play notes one by one, iKeys uses a **chord-based system** similar to OnlinePianist:

- **Play chords** (multiple keys together) instead of individual notes
- **Falling chord blocks** show which key combinations to press
- **Visual feedback** with multi-key highlighting
- **Beginner-friendly** - simpler and faster to learn songs

## ✨ Features

### 🎵 Chord-Based Playing System
- Colored chord blocks fall from top toward piano keyboard
- Each block shows the chord name and which keys to press simultaneously
- Block length indicates how long to hold the chord
- Real-time highlighting of chord shapes on the keyboard

### 🎮 Play Modes
- **Free Play**: Play any chords without guidance
- **Auto Play**: Watch chords play automatically
- **Practice Mode**: Follow along with visual feedback
- **Wait Mode**: Song pauses until you press the correct chord

### 📊 Interactive Chord Display
- **Falling Chords Area**: Dark canvas with colorful chord blocks scrolling down
- **Chord Info Panel**: Shows current chord, next chord preview, and accuracy
- **Progress Tracking**: Visual progress bar and timing display
- **Section Labels**: "Verse", "Chorus", "Bridge" indicators

### 🎹 Professional Piano Sound
- High-quality sampled piano sounds (Salamander Grand Piano)
- Natural sustain and release behavior
- Polyphonic support (10+ simultaneous notes)
- Realistic ADSR envelope

### 📚 Chord Dictionary
- Built-in reference for all common chords
- Visual piano diagrams
- Audio preview of each chord
- Finger position guides
- Difficulty ratings

### 🎼 Song Library
Current songs include:
- **Let It Be** - The Beatles (Beginner)
- **All of Me** - John Legend (Beginner)
- **Someone Like You** - Adele (Beginner)
- **Imagine** - John Lennon (Beginner)
- **Perfect** - Ed Sheeran (Intermediate)

Each song shows:
- Tempo (BPM)
- Difficulty level
- Number of chords
- Hand assignments

### ⚙️ Settings & Controls
- **Speed Control**: 50-150% tempo adjustment
- **Volume Control**: 0-100% with smooth fading
- **Hand Selection**: Left hand only, right hand only, or both hands
- **Loop Mode**: Repeat songs continuously
- **Keyboard Mapping**: Play piano with computer keyboard

### 🎨 Claude Design System
- Clean, modern UI with warm orange/coral accents
- Dark mode optimized for extended practice sessions
- Smooth animations and transitions
- Responsive layout for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd iKeys

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## 🎹 How to Play

1. **Select a Song**: Click the song library button (🎵) and choose a song
2. **Choose a Mode**: 
   - **Auto Play** - Watch and learn the chord progression
   - **Practice** - Play along with visual feedback
   - **Wait Mode** - Perfect each chord before advancing
3. **Play Chords**: 
   - Watch the falling chord blocks
   - When a block reaches the hit line, press all keys in that chord simultaneously
   - Hold the chord for the duration shown by the block length
   - Release and prepare for the next chord

### Keyboard Controls

**Computer Keyboard Mapping** (2 octaves):
- `A S D F G H J K L ;` - White keys
- `W E T Y U O P` - Black keys

**Playback Controls**:
- Click **Play** to start
- Click **Pause** to pause
- Click **Stop** to reset to beginning

## 📖 Understanding Chords

### What is a Chord?
A chord is multiple piano keys pressed simultaneously (e.g., C Major = C + E + G)

### Chord Types in the App
- **Major Chords** (C, G, F, D) - Happy, bright sound
- **Minor Chords** (Am, Em, Dm) - Sad, emotional sound  
- **Seventh Chords** (G7, C7, Am7) - Rich, jazzy sound

### Color-Coded System
Each unique chord in a song has its own color:
- Helps you recognize patterns
- Makes chord changes easier to anticipate
- Consistent throughout the song

## 🛠️ Technical Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Audio**: Tone.js with Salamander Grand Piano samples
- **Build Tool**: Vite
- **UI Components**: Shadcn Vue / Radix Vue

## 📁 Project Structure

```
iKeys/
├── src/
│   ├── components/
│   │   ├── FallingChords.vue       # Animated falling chord blocks
│   │   ├── ChordInfoPanel.vue      # Current chord display & accuracy
│   │   ├── PianoKeyboard.vue       # Interactive piano with multi-key highlighting
│   │   ├── ChordDictionary.vue     # Chord reference library
│   │   ├── Modal.vue               # Reusable modal component
│   │   ├── SettingsModal.vue       # Settings and controls
│   │   └── SongLibraryModal.vue    # Song selection
│   ├── data/
│   │   ├── chords.ts               # Chord definitions and dictionary
│   │   └── songs.ts                # Song library with chord progressions
│   ├── utils/
│   │   ├── audioEngine.ts          # Tone.js audio management
│   │   └── chordDetection.ts       # Chord matching engine
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── App.vue                     # Main app component
│   └── main.ts                     # App entry point
```

## 🎯 Key Algorithms

### Chord Detection
- Tracks all currently pressed keys
- Matches against target chord with tolerance for timing
- Calculates accuracy percentage
- Identifies missing and extra keys

### Falling Chord Animation
- 60 FPS smooth animation using `requestAnimationFrame`
- Time-based positioning with speed multiplier
- Lookahead rendering (shows chords 6 seconds ahead)
- Hit line detection for perfect timing

### Audio Playback
- Polyphonic sampler with independent note releases
- Natural ADSR envelope (Attack, Decay, Sustain, Release)
- Velocity-sensitive dynamics
- Fallback synthesis if samples fail to load

## 🔮 Future Enhancements

- **More Songs**: Expand library with more difficulty levels
- **Custom Songs**: Upload MIDI files or create custom chord progressions
- **Achievement System**: Earn badges for accuracy and completion
- **Multiplayer**: Challenge friends to chord battles
- **Recording**: Record and playback your performances
- **Mobile Support**: Touch-optimized interface for tablets
- **Sheet Music View**: Optional traditional notation display
- **Chord Transitions**: Practice exercises for difficult chord changes

## 📄 License

MIT License - feel free to use this for learning or your own projects!

## 🙏 Acknowledgments

- Piano samples from [Salamander Grand Piano](https://archive.org/details/SalamanderGrandPianoV3)
- Inspired by OnlinePianist, Simply Piano, and Flowkey
- Built with ❤️ using Claude's design system

---

**Happy chord playing! 🎹🎵**
