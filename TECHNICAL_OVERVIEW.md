# iKeys - Technical Overview & Architecture

## 🎯 Project Overview

**iKeys** is a chord-based piano learning web application built with Vue 3 + TypeScript. It displays falling colored bars (like Guitar Hero) that show users which piano keys to press and for how long.

**Tech Stack:**
- Vue 3 (Composition API) + TypeScript
- Vite (Build tool)
- Tailwind CSS + Shadcn Vue (UI)
- Tone.js (Professional piano audio with Salamander Grand Piano samples)

---

## 🎵 Core Concept: Chord-Based System

### What's a Chord in This App?

A **chord** is one or more piano keys that should be pressed together at a specific time. Each chord includes:

```typescript
interface Chord {
  time: number;           // When to play (seconds from start)
  duration: number;       // How long to hold (seconds)
  chordName: string;      // Display name: "C", "Am", "Em", etc.
  keys: string[];         // Piano keys to press: ["C4", "E4", "G4"]
  hand: 'left' | 'right' | 'both';
  color: string;          // Visual color for this chord
  fingers?: number[];     // Which fingers to use: [1, 3, 5] (thumb, middle, pinky)
}
```

**Key Insight:** Even single notes are stored as "chords" with one key. This unified system handles both:
- **Chords** (multiple keys): `["C4", "E4", "G4"]` for C Major
- **Single notes** (melody): `["E4"]` for just the E note

---

## 📁 Project Structure

```
src/
├── types/
│   └── index.ts                    # TypeScript interfaces (Chord, Song, etc.)
├── data/
│   ├── chords.ts                   # Chord dictionary (chord definitions)
│   └── songs.ts                    # Song library (chord progressions)
├── components/
│   ├── FallingChords.vue          # Main visual display (falling bars)
│   ├── PianoKeyboard.vue          # Interactive piano keyboard
│   ├── ChordInfoPanel.vue         # Current chord info sidebar
│   ├── ChordDictionary.vue        # Chord reference modal
│   ├── SettingsModal.vue          # Settings (tempo, mode, etc.)
│   └── SongLibraryModal.vue       # Song selection
├── utils/
│   ├── audioEngine.ts             # Tone.js audio playback
│   └── chordDetection.ts          # Detect user's played chords
└── App.vue                         # Main app orchestration
```

---

## 🎼 Song Data Structure

### Location: `src/data/songs.ts`

Each song is defined as:

```typescript
interface Song {
  id: string;
  title: string;
  artist: string;
  tempo: number;              // BPM
  duration: number;           // Total length in seconds
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  chords: Chord[];            // Array of chords with timing
  sections?: SongSection[];   // Optional: Verse, Chorus markers
}
```

### Example: "Let It Be" Song

```typescript
{
  id: 'let-it-be',
  title: 'Let It Be',
  artist: 'The Beatles',
  tempo: 72,
  duration: 32,
  difficulty: 'beginner',
  chords: [
    // Each chord specifies WHEN and WHAT to play
    { 
      time: 0,                          // Play at 0 seconds
      duration: 2,                      // Hold for 2 seconds
      chordName: 'C',                   // Display "C"
      keys: ['C4', 'E4', 'G4'],        // Press C, E, G keys
      hand: 'right',
      color: '#4A90E2',                 // Blue bars
      fingers: [1, 3, 5]                // Thumb, middle, pinky
    },
    { 
      time: 2,                          // Play at 2 seconds
      duration: 2,
      chordName: 'G',
      keys: ['G3', 'B3', 'D4'],
      hand: 'right',
      color: '#50C878',                 // Green bars
      fingers: [1, 3, 5]
    },
    // ... more chords
  ],
  sections: [
    { name: 'Verse', startTime: 0, endTime: 16 },
    { name: 'Chorus', startTime: 16, endTime: 32 }
  ]
}
```

---

## 🎨 Visual System: Falling Bars

### Location: `src/components/FallingChords.vue`

The falling bars system works like Guitar Hero:

### How It Works:

1. **Each key gets its own lane** (vertical column)
2. **Bars fall from top to bottom** toward a "hit line"
3. **Bar height = duration** (how long to hold the note)
4. **Bar position = piano key position** (horizontally aligned)

### Key Mapping System:

```typescript
const keyPositions: Record<string, number> = {
  // Maps piano keys to horizontal positions (as % of screen width)
  'C3': 15,  'C#3': 17,  'D3': 19,  // ... 
  'C4': 39,  'C#4': 41,  'D4': 43,  // ...
  'C5': 63
};
```

### Bar Creation Process:

```typescript
// Step 1: Convert each chord into individual note bars
allNoteBars = chords.forEach(chord => {
  chord.keys.forEach((key, index) => {
    bars.push({
      note: key,                      // "C4"
      startTime: chord.time,          // When to play
      duration: chord.duration,       // How long to hold
      color: chord.color,             // Bar color
      finger: chord.fingers[index],   // Finger number (1-5)
      position: keyPositions[key]     // Horizontal position %
    });
  });
});

// Step 2: Calculate bar position and height
function getNoteBarStyle(noteBar) {
  const timeUntilNote = noteBar.startTime - currentTime;
  const distanceFromHitLine = timeUntilNote * PIXELS_PER_SECOND * speed;
  const top = HIT_LINE_POSITION - distanceFromHitLine;
  const height = noteBar.duration * PIXELS_PER_SECOND * speed;
  
  return {
    top: `${top}px`,                  // Vertical position (falls down)
    left: `${noteBar.position}%`,     // Horizontal position (key lane)
    height: `${height}px`,            // Bar height (duration)
    backgroundColor: noteBar.color,
    // ... styling
  };
}
```

### Visual Layout:

```
┌─────────────────────────────────────┐
│     [Em]          [C]               │ ← Chord name labels
│   ┌──┬──┬──┐    ┌──┬──┬──┐        │
│   │①││③││⑤│     │①││③││⑤│         │ ← Finger numbers
│   │█││█││█│     │█││█││█│         │ ← Colored bars
│   │█││█││█│     │█││█││█│         │   (height = duration)
│   │█││█││█│     │█││█││█│         │
│   │█││█││█│     │█││█││█│         │
│   └┬┬┴┬┬┴┬┬┘    └┬┬┴┬┬┴┬┬┘        │
│    ▼▼ ▼▼ ▼▼      ▼▼ ▼▼ ▼▼         │ ← Falls toward...
├─────────────────────────────────────┤
│ ═══════════════════════════════════ │ ← Hit line (when to press)
└─────────────────────────────────────┘
     ┌──┬┬─┬──┬┬─┬──┬──┬┬─┬──┬┬─┐
     │C ││ │D ││ │E │F ││ │G ││ │    ← Piano keyboard
     └──┘└─┴──┘└─┴──┴──┘└─┴──┘└─┘
```

### Constants:

```typescript
const HIT_LINE_POSITION = 320;      // Pixels from top
const PIXELS_PER_SECOND = 100;      // Fall speed
const LOOKAHEAD_TIME = 5;           // Show bars up to 5 seconds ahead
```

---

## ⏱️ Timing & Playback System

### Location: `src/App.vue` (main orchestration)

### Time Tracking:

```typescript
const currentTime = ref(0);  // Current playback position (seconds)

// Animation loop (60 FPS)
function startAutoPlayback() {
  const animate = (timestamp) => {
    const deltaTime = (timestamp - lastFrameTime) / 1000;
    currentTime.value += deltaTime * speed.value;  // Advance time
    
    // Auto-play chords when they reach their time
    if (currentChord.value && currentTime.value >= currentChord.value.time) {
      playChord(currentChord.value);  // Trigger audio
    }
    
    requestAnimationFrame(animate);  // Continue loop
  };
}
```

### Play Modes:

1. **Free Play**: No guidance, play anything
2. **Auto Play**: Chords play automatically (watch & learn)
3. **Practice Mode**: Follow along with visual feedback
4. **Wait Mode**: Song pauses until correct chord is played

---

## 🎹 Piano Key Notation

### Piano keys are labeled: `<Note><Octave>`

Examples:
- `C4` = Middle C (4th octave)
- `C#4` = C sharp above middle C
- `G3` = G below middle C
- `E4`, `G4`, `B4` = Notes in an E minor chord

### Keyboard Range:
- **25 keys total**: C3 to C5 (2+ octaves)
- **White keys**: C, D, E, F, G, A, B
- **Black keys**: C#, D#, F#, G#, A#

---

## 🎵 Adding New Songs - Step-by-Step Guide

### 1. Analyze the Song

Determine:
- **Chord progression** (what chords are played)
- **Timing** (when each chord happens)
- **Duration** (how long to hold each chord)

### 2. Add to `src/data/songs.ts`

```typescript
{
  id: 'my-song',
  title: 'My Song Title',
  artist: 'Artist Name',
  tempo: 120,                    // BPM
  duration: 60,                  // Total seconds
  difficulty: 'beginner',
  chords: [
    // Example: Play C major chord at start, hold for 2 seconds
    {
      time: 0,                   // When (seconds)
      duration: 2,               // Hold duration (seconds)
      chordName: 'C',            // Display name
      keys: ['C4', 'E4', 'G4'],  // Which keys
      hand: 'right',
      color: '#4A90E2',          // Choose from chordColors
      fingers: [1, 3, 5]         // Thumb, middle, pinky
    },
    
    // Example: Single melody note
    {
      time: 2,
      duration: 0.5,             // Short note (half second)
      chordName: 'E',            // Display as "E"
      keys: ['E4'],              // Just one key
      hand: 'right',
      color: '#50C878',
      fingers: [3]               // Just middle finger
    },
    
    // Add more chords...
  ],
  sections: [
    { name: 'Intro', startTime: 0, endTime: 8 },
    { name: 'Verse', startTime: 8, endTime: 24 },
    { name: 'Chorus', startTime: 24, endTime: 40 },
  ]
}
```

### 3. Available Chord Colors

Use these predefined colors from `chordColors` object:

```typescript
const chordColors = {
  'C': '#4A90E2',      // Blue
  'G': '#50C878',      // Green
  'Am': '#F5A623',     // Orange
  'F': '#D97757',      // Coral
  'Em': '#9B59B6',     // Purple
  'Dm': '#E74C3C',     // Red
  'D': '#3498DB',      // Light Blue
  'G7': '#16A085',     // Teal
  // ... more
};
```

### 4. Tips for Accurate Timing

- **Use even intervals**: Songs often use 2-second or 4-second intervals
- **Match the tempo**: If tempo is 120 BPM, each beat = 0.5 seconds
- **Test playback**: Use auto-play mode to verify timing
- **Adjust speed**: Users can slow down with tempo slider (50-150%)

---

## 🎼 Creating Mixed Chord + Melody Songs

For songs like "All of Me" that have **both chords and melody notes**:

### Approach 1: Separate Chords and Melody

```typescript
chords: [
  // Left hand chord (bass)
  { time: 0, duration: 2, chordName: 'C', keys: ['C3', 'E3', 'G3'], hand: 'left', ... },
  
  // Right hand melody (single notes)
  { time: 0, duration: 0.5, chordName: 'G', keys: ['G4'], hand: 'right', ... },
  { time: 0.5, duration: 0.5, chordName: 'E', keys: ['E4'], hand: 'right', ... },
  { time: 1, duration: 1, chordName: 'C', keys: ['C4'], hand: 'right', ... },
]
```

### Approach 2: Layer Timing

- **Bass/chords**: Longer durations (2-4 seconds)
- **Melody**: Shorter durations (0.25-1 second)
- **Overlap**: Multiple entries can have the same `time` value

---

## 🎹 Common Chord Voicings

### Basic Major Chords:
- **C Major**: `['C4', 'E4', 'G4']`
- **G Major**: `['G3', 'B3', 'D4']`
- **F Major**: `['F3', 'A3', 'C4']`

### Basic Minor Chords:
- **A Minor**: `['A3', 'C4', 'E4']`
- **E Minor**: `['E4', 'G4', 'B4']`
- **D Minor**: `['D4', 'F4', 'A4']`

### Seventh Chords (4 notes):
- **G7**: `['G3', 'B3', 'D4', 'F4']`
- **Am7**: `['A3', 'C4', 'E4', 'G4']`

---

## 🔧 Audio Engine

### Location: `src/utils/audioEngine.ts`

Uses **Tone.js** with Salamander Grand Piano samples:

```typescript
class AudioEngine {
  // Press and hold (sustain until release)
  pressKey(note: string, velocity: number = 0.8)
  
  // Release key (natural decay)
  releaseKey(note: string)
  
  // Play note with automatic release
  playNote(note: string, duration: number, velocity: number = 0.8)
  
  // Volume control
  setVolume(level: number)  // 0.0 to 1.0
}
```

### Polyphonic Support:
- Can play **10+ simultaneous notes**
- Each note has independent sustain/release
- Realistic piano timbre with natural harmonics

---

## 📊 Performance Considerations

### Optimization Tips:

1. **Lookahead filtering**: Only render bars within 5 seconds
2. **RequestAnimationFrame**: Smooth 60 FPS animation
3. **Computed properties**: Vue reactivity for efficient updates
4. **CSS transforms**: Hardware-accelerated animations

```typescript
// Only show visible bars
const visibleBars = computed(() => {
  return allBars.filter(bar => {
    const noteEnd = bar.startTime + bar.duration;
    return bar.startTime <= currentTime + LOOKAHEAD_TIME &&
           noteEnd >= currentTime - 0.5;
  });
});
```

---

## 🎯 Summary: Building a Song

**Quick Reference:**

1. **Choose notes/chords** for your song
2. **Determine timing** (when each plays)
3. **Set durations** (how long to hold)
4. **Pick colors** from `chordColors`
5. **Add to `songs.ts`** with proper structure
6. **Test in app** using auto-play mode
7. **Adjust timing** as needed

**Example Timeline:**
```
Time:     0s    2s    4s    6s    8s
Chord:    C     G     Am    F     C
Keys:     CEG   GBD   ACE   FAC   CEG
Duration: 2s    2s    2s    2s    2s
```

---

## 🔗 Key Files to Modify

| Task | File | What to Change |
|------|------|----------------|
| Add new song | `src/data/songs.ts` | Add song object to `songs` array |
| Add chord definition | `src/data/chords.ts` | Add to `chordDictionary` |
| Change colors | `src/data/songs.ts` | Modify `chordColors` object |
| Adjust timing | `src/components/FallingChords.vue` | Change `PIXELS_PER_SECOND`, `HIT_LINE_POSITION` |
| Change key positions | `src/components/FallingChords.vue` | Modify `keyPositions` mapping |

---

## 💡 Current Limitations & Notes

1. **Copyright**: App doesn't include exact note-by-note melodies of copyrighted songs
2. **Simplified**: Current songs use chord progressions, not full arrangements
3. **Manual entry**: Song data is hand-coded (no MIDI import yet)
4. **Fixed keyboard**: 25 keys (C3-C5), can't extend range easily
5. **No recording**: Can't save user performances yet

---

## 🚀 Future Enhancements (Possible)

- MIDI file import/export
- Record and playback user performances
- More songs with full melody + chords
- Different difficulty levels per song
- Achievement/scoring system
- Mobile touch support
- Sustain pedal support

---

This overview should give you everything needed to understand and extend the iKeys chord-based piano learning system! 🎹

