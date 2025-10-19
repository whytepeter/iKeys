import * as Tone from 'tone'

export class AudioEngine {
  private sampler: Tone.Sampler | null = null
  private isInitialized: boolean = false
  private volume: Tone.Volume
  private activeNotes: Map<string, { sources: any[] }> = new Map()

  constructor() {
    this.volume = new Tone.Volume(-6).toDestination()
    this.initializeSampler()
  }

  private async initializeSampler() {
    // Use Tone.js Sampler with piano samples from a CDN
    // These are high-quality sampled piano notes
    this.sampler = new Tone.Sampler({
      urls: {
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        this.isInitialized = true
        console.log('Piano samples loaded successfully!')
      },
      onerror: (error) => {
        console.error('Error loading piano samples:', error)
        // Fallback to basic synthesis if samples fail to load
        this.initializeFallback()
      }
    }).connect(this.volume)
  }

  private initializeFallback() {
    // Fallback synth if samples don't load
    const synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'triangle' },
      envelope: {
        attack: 0.002,
        decay: 0.3,
        sustain: 0.7,
        release: 1.5,
      },
    }).connect(this.volume)

    this.sampler = synth as any
    this.isInitialized = true
  }

  async ensureStarted() {
    await Tone.start()
    // Set context to running state
    if (Tone.context.state !== 'running') {
      await Tone.context.resume()
    }
  }

  setVolume(volumePercent: number) {
    // Convert percentage to decibels (-40 to 0 dB range)
    const db = (volumePercent / 100) * 40 - 40
    this.volume.volume.rampTo(db, 0.1)
  }

  /**
   * Press a key - starts the note and sustains it
   * Call this on mousedown/keydown
   */
  async pressKey(note: string, velocity: number = 0.8) {
    await this.ensureStarted()

    if (!this.sampler || !this.isInitialized) {
      console.warn('Sampler not ready yet')
      return
    }

    // If note is already playing, release it first for clean restart
    if (this.activeNotes.has(note)) {
      this.releaseKey(note)
    }

    try {
      // Play note with sustain - it will continue until released
      // The "10" means sustain for up to 10 seconds (natural decay will occur)
      this.sampler.triggerAttack(note, undefined, velocity)

      // Track active note
      this.activeNotes.set(note, { sources: [] })
    } catch (error) {
      console.error('Error playing note:', error)
    }
  }

  /**
   * Release a key - triggers natural decay and release
   * Call this on mouseup/keyup
   */
  releaseKey(note: string) {
    if (!this.sampler || !this.isInitialized) {
      return
    }

    try {
      // Release with natural envelope tail (will fade out smoothly)
      this.sampler.triggerRelease(note)

      // Remove from active notes after release time
      setTimeout(() => {
        this.activeNotes.delete(note)
      }, 2000)
    } catch (error) {
      console.error('Error releasing note:', error)
    }
  }

  /**
   * Play a note with automatic release (for auto-play mode)
   * This triggers both attack and release
   */
  async playNote(note: string, duration: number = 0.5, velocity: number = 0.8) {
    await this.ensureStarted()

    if (!this.sampler || !this.isInitialized) {
      console.warn('Sampler not ready yet')
      return
    }

    try {
      // Use triggerAttackRelease for auto-play mode
      // This will play the note and release it after duration
      this.sampler.triggerAttackRelease(note, duration, undefined, velocity)
    } catch (error) {
      console.error('Error playing note:', error)
    }
  }

  /**
   * Play note with a delayed start (for arpeggiated/rolled chords)
   * Useful for realistic chord playing with staggered note starts
   */
  async playNoteWithOffset(note: string, duration: number, offset: number, velocity: number = 0.8) {
    await this.ensureStarted()

    if (!this.sampler || !this.isInitialized) {
      console.warn('Sampler not ready yet')
      return
    }

    try {
      // Calculate the start time with offset
      const startTime = Tone.now() + offset
      // Use triggerAttackRelease with specific start time
      this.sampler.triggerAttackRelease(note, duration, startTime, velocity)
    } catch (error) {
      console.error('Error playing note with offset:', error)
    }
  }

  /**
   * Stop all currently playing notes
   */
  stopAll() {
    if (!this.sampler) return

    try {
      this.sampler.releaseAll()
      this.activeNotes.clear()
    } catch (error) {
      console.error('Error stopping notes:', error)
    }
  }

  /**
   * Check if a note is currently being held
   */
  isNoteActive(note: string): boolean {
    return this.activeNotes.has(note)
  }

  /**
   * Get all currently active notes
   */
  getActiveNotes(): string[] {
    return Array.from(this.activeNotes.keys())
  }
}
