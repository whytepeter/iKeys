// ===== KEYBOARD LAYOUT =====
// This layout provides an intuitive two-hand piano keyboard mapping
export const KEYBOARD_MAP: Record<string, string> = {
  // ===== OCTAVE 3 (Left hand: ASDFGHJ with WETYU for black keys) =====
  a: "C3", w: "C#3", s: "D3", e: "D#3", d: "E3", 
  f: "F3", t: "F#3", g: "G3", y: "G#3", h: "A3", 
  u: "A#3", j: "B3",
  
  // ===== OCTAVE 4 (Right hand: KL;' with IOP] for black keys) =====
  k: "C4", i: "C#4", l: "D4", o: "D#4", ";": "E4", 
  "'": "F4", "]": "F#4", enter: "G4",
  
  // ===== OCTAVE 5 (Extended range: ZXCV with QB2356 for black keys) =====
  z: "C5", q: "C#5", x: "D5", "2": "D#5", c: "E5", 
  v: "F5", "3": "F#5", b: "G5", "5": "G#5", n: "A5", 
  "6": "A#5", m: "B5",
};

// Reverse mapping: Note -> Keyboard Key
export const NOTE_TO_KEYBOARD_KEY: Record<string, string> = {
  // Octave 3
  C3: "A", "C#3": "W", D3: "S", "D#3": "E", E3: "D", 
  F3: "F", "F#3": "T", G3: "G", "G#3": "Y", A3: "H", 
  "A#3": "U", B3: "J",
  
  // Octave 4
  C4: "K", "C#4": "I", D4: "L", "D#4": "O", E4: ";", 
  F4: "'", "F#4": "]", G4: "↵",
  
  // Octave 5
  C5: "Z", "C#5": "Q", D5: "X", "D#5": "2", E5: "C", 
  F5: "V", "F#5": "3", G5: "B", "G#5": "5", A5: "N", 
  "A#5": "6", B5: "M",
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

