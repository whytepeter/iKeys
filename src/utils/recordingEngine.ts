// Recording engine for capturing piano performances

export interface RecordedNote {
    note: string
    time: number // Time from start in seconds
    duration: number // How long the note was held
    velocity: number
}

export interface Recording {
    id: string
    title: string
    date: string
    duration: number
    notes: RecordedNote[]
}

export class RecordingEngine {
    private isRecording = false
    private startTime: number = 0
    private recordedNotes: RecordedNote[] = []
    private activeNotes: Map<string, number> = new Map() // note -> press time

    public startRecording() {
        this.isRecording = true
        this.startTime = performance.now()
        this.recordedNotes = []
        this.activeNotes.clear()
        console.log('🔴 Recording started')
    }

    public stopRecording(): RecordedNote[] {
        this.isRecording = false

        // Release any notes that are still held
        this.activeNotes.forEach((pressTime, note) => {
            const currentTime = (performance.now() - this.startTime) / 1000
            this.recordedNotes.push({
                note,
                time: pressTime,
                duration: currentTime - pressTime,
                velocity: 0.8,
            })
        })

        this.activeNotes.clear()
        console.log('⏹️ Recording stopped:', this.recordedNotes.length, 'notes')
        return this.recordedNotes
    }

    public recordKeyPress(note: string, _velocity: number = 0.8) {
        if (!this.isRecording) return

        const currentTime = (performance.now() - this.startTime) / 1000
        this.activeNotes.set(note, currentTime)
    }

    public recordKeyRelease(note: string) {
        if (!this.isRecording) return

        const pressTime = this.activeNotes.get(note)
        if (pressTime === undefined) return

        const currentTime = (performance.now() - this.startTime) / 1000
        const duration = currentTime - pressTime

        this.recordedNotes.push({
            note,
            time: pressTime,
            duration,
            velocity: 0.8,
        })

        this.activeNotes.delete(note)
    }

    public isCurrentlyRecording(): boolean {
        return this.isRecording
    }

    public getElapsedTime(): number {
        if (!this.isRecording) return 0
        return (performance.now() - this.startTime) / 1000
    }
}

// Storage functions for recordings
export const RecordingStorage = {
    save(recording: Recording): void {
        const recordings = this.getAll()
        recordings.push(recording)
        localStorage.setItem('ikeys-recordings', JSON.stringify(recordings))
    },

    getAll(): Recording[] {
        const data = localStorage.getItem('ikeys-recordings')
        return data ? JSON.parse(data) : []
    },

    delete(id: string): void {
        const recordings = this.getAll().filter((r) => r.id !== id)
        localStorage.setItem('ikeys-recordings', JSON.stringify(recordings))
    },

    clear(): void {
        localStorage.removeItem('ikeys-recordings')
    },
}

