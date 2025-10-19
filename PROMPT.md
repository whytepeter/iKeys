Based on your requirements and the technical documentation, here's a comprehensive prompt for Cursor:

---

## Prompt for Cursor AI

I need to improve the auto-play functionality in the iKeys piano app to create more realistic piano performances. Currently, auto-play presses all keys in a chord simultaneously and releases them together, which sounds robotic. I need two major improvements:

### 1. Realistic Note Release Patterns (Arpeggiation & Sustain)

**Current behavior:** All notes in a chord press/release together
**Desired behavior:** Mimic human playing with varied release timing

Implement different release patterns:

- **Full Sustain**: Hold all notes for the full duration (current behavior)
- **Arpeggiated Release**: Release notes sequentially (e.g., release keys 1 and 2 first, hold key 3 longer)
- **Staggered Sustain**: Some notes hold longer than others within the same chord
- **Early Release**: Release most notes early, sustain the last note into the next chord

**Example pattern for a 3-note chord:**
```typescript
// Instead of all notes: time=0, duration=2
// Do this:
keys[0]: time=0, duration=1.5  // Release early
keys[1]: time=0, duration=1.7  // Release slightly later  
keys[2]: time=0, duration=2.0  // Hold full duration
```

### 2. Add Per-Note Timing Configuration to Chord Structure

Update the `Chord` interface in `src/types/index.ts` to support individual note durations:

```typescript
interface Chord {
  time: number;
  duration: number;  // Default duration for all notes
  chordName: string;
  keys: string[];
  hand: 'left' | 'right' | 'both';
  color: string;
  fingers?: number[];
  
  // NEW: Optional per-note durations (overrides default duration)
  noteDurations?: number[];  // Array matching keys.length
  
  // NEW: Optional per-note timing offsets for rolled chords
  noteOffsets?: number[];    // Delay each note (e.g., [0, 0.05, 0.1])
}
```

### 3. Update Auto-Play Logic

Modify the audio playback in `src/App.vue` and `src/utils/audioEngine.ts`:

- Check if `noteDurations` exists, use those instead of the default `duration`
- Apply `noteOffsets` for rolled/arpeggiated chord entry
- Update `releaseKey()` calls to happen at the correct time for each note

### 4. Update the "John Legend - All of Me" Song

The song currently uses only chord progressions. Update `src/data/songs.ts` to include:

- **Mixed content**: Both chords (left hand) and melody notes (right hand)
- **Realistic durations**: Use `noteDurations` to create natural sustain patterns
- **Single melody notes**: Many parts should be single-note entries (`keys: ['E4']`)
- **Overlapping timing**: Left hand chords with longer durations, right hand melody with shorter notes

**Example structure:**
```typescript
{
  id: 'all-of-me',
  title: 'All of Me',
  artist: 'John Legend',
  chords: [
    // Left hand bass chord (hold full duration)
    {
      time: 0,
      duration: 4,
      chordName: 'Ab',
      keys: ['Ab2', 'C3', 'Eb3'],
      hand: 'left',
      color: '#4A90E2',
      noteDurations: [4, 4, 4]  // All sustain
    },
    
    // Right hand melody (staggered releases)
    {
      time: 0,
      duration: 2,
      chordName: 'Eb',
      keys: ['Eb4', 'G4', 'Bb4'],
      hand: 'right',
      color: '#50C878',
      noteDurations: [1.5, 1.8, 2.0],  // Staggered
      noteOffsets: [0, 0.05, 0.1]       // Slight roll
    },
    
    // Single melody note
    {
      time: 2,
      duration: 0.5,
      chordName: 'C',
      keys: ['C5'],
      hand: 'right',
      color: '#F5A623',
      fingers: [1]
    },
    // ... more
  ]
}
```

### 5. Update FallingChords Visual Component

Ensure `src/components/FallingChords.vue` correctly renders:
- Different bar heights when `noteDurations` varies per note
- Individual bars for each note (already done, but verify it respects `noteDurations`)

### Implementation Checklist:

- [ ] Update `Chord` interface with `noteDurations` and `noteOffsets`
- [ ] Modify `audioEngine.ts` `playChord()` to use per-note durations
- [ ] Update auto-play loop to schedule individual note releases
- [ ] Rewrite "All of Me" song with realistic timing and melody notes
- [ ] Test in auto-play mode to verify natural sound
- [ ] Ensure falling bars visually match the new durations

### Expected Result:

When I click auto-play on "All of Me", it should sound like a human pianist:
- Some notes release early while others sustain
- Melody notes are distinct from held chords
- Natural flow between chord changes with overlapping sustain

---

Let me know if you need any clarification on these changes!