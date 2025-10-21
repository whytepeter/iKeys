// ===== KEYBOARD LAYOUT =====
// This layout provides an intuitive two-hand piano keyboard mapping
export const KEYBOARD_MAP: Record<string, string> = {
  // Remapped: Start at A3 and ascend left->right. White keys on home row, black keys on row above.
  a: "A3", w: "A#3", s: "B3", e: "C4", d: "C#4",
  f: "D4", t: "D#4", g: "E4", y: "F4", h: "F#4",
  u: "G4", j: "G#4", k: "A4", i: "A#4", l: "B4",
  o: "C5", ";": "C#5", "'": "D5", "]": "D#5", enter: "E5",
  z: "F5", q: "F#5", x: "G5", "2": "G#5", c: "A5",
  v: "A#5", "3": "B5",
};

// Reverse mapping: Note -> Keyboard Key
export const NOTE_TO_KEYBOARD_KEY: Record<string, string> = {
  // Remapped reverse lookup (note -> displayed keyboard key)
  "A3": "A",
  "A#3": "W",
  "B3": "S",
  "C4": "E",
  "C#4": "D",
  "D4": "F",
  "D#4": "T",
  "E4": "G",
  "F4": "Y",
  "F#4": "H",
  "G4": "U",
  "G#4": "J",
  "A4": "K",
  "A#4": "I",
  "B4": "L",
  "C5": "O",
  "C#5": ";",
  "D5": "'",
  "D#5": "]",
  "E5": "Enter",
  "F5": "Z",
  "F#5": "Q",
  "G5": "X",
  "G#5": "2",
  "A5": "C",
  "A#5": "V",
  "B5": "3",
};

// ===== PLAY MODES =====
export const PLAY_MODE_OPTIONS = [
  {
    value: "auto",
    label: "Auto Play",
    icon: "▶️",
    desc: "Plays chords automatically",
  },
  {
    value: "practice",
    label: "Practice",
    icon: "🎓",
    desc: "Wait for correct chords",
  },
  {
    value: "wait",
    label: "Wait Mode",
    icon: "⏸️",
    desc: "Pause until you play",
  },
  {
    value: "free",
    label: "Free Play",
    icon: "🎹",
    desc: "Play without guidance",
  },
] as const;

// ===== TIMING CONSTANTS =====
export const TIMING = {
  LOOK_AHEAD_TIME: 2, // seconds
  MIN_NOTE_DURATION: 0.1,
  ANIMATION_INTERVAL: 16, // ~60fps
  RECORDING_TITLE_TIMEOUT: 100,
} as const;

// ===== UI CONSTANTS =====
export const UI = {
  MAX_VISIBLE_NOTES: 20,
  FALLING_NOTE_SPEED: 100, // pixels per second
  CHORD_TRANSITION_DURATION: 200, // ms
} as const;

