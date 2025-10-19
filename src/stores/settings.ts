import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { HandMode } from '../types'

export const useSettingsStore = defineStore(
  'settings',
  () => {
    // Audio settings
    const volume = ref(70)
    const tempo = ref(100)

    // Visual settings
    const showFingerNumbers = ref(true)
    const showNoteNames = ref(true)
    const showKeyLabels = ref(true)
    const fallingSpeed = ref(1.0)

    // Gameplay settings
    const handMode = ref<HandMode>('both')
    const loop = ref(false)

    // Theme settings
    const darkMode = ref(true)

    // Update functions
    function setVolume(value: number) {
      volume.value = Math.max(0, Math.min(100, value))
    }

    function setTempo(value: number) {
      tempo.value = Math.max(50, Math.min(150, value))
    }

    function setShowFingerNumbers(value: boolean) {
      showFingerNumbers.value = value
    }

    function setShowNoteNames(value: boolean) {
      showNoteNames.value = value
    }

    function setShowKeyLabels(value: boolean) {
      showKeyLabels.value = value
    }

    function setFallingSpeed(value: number) {
      fallingSpeed.value = Math.max(0.5, Math.min(2.0, value))
    }

    function setHandMode(mode: HandMode) {
      handMode.value = mode
    }

    function setLoop(value: boolean) {
      loop.value = value
    }

    function setDarkMode(value: boolean) {
      darkMode.value = value
    }

    function resetToDefaults() {
      volume.value = 70
      tempo.value = 100
      showFingerNumbers.value = true
      showNoteNames.value = true
      showKeyLabels.value = true
      fallingSpeed.value = 1.0
      handMode.value = 'both'
      loop.value = false
      darkMode.value = true
    }

    return {
      // State
      volume,
      tempo,
      showFingerNumbers,
      showNoteNames,
      showKeyLabels,
      fallingSpeed,
      handMode,
      loop,
      darkMode,
      // Actions
      setVolume,
      setTempo,
      setShowFingerNumbers,
      setShowNoteNames,
      setShowKeyLabels,
      setFallingSpeed,
      setHandMode,
      setLoop,
      setDarkMode,
      resetToDefaults,
    }
  },
  {
    persist: true,
  }
)

