<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    @click="handleCancel"
  >
    <div
      class="w-full max-w-md p-6 mx-4 border shadow-2xl bg-zinc-900 rounded-2xl border-zinc-700"
      @click.stop
    >
      <!-- Title -->
      <h2 class="mb-2 text-xl font-bold text-white">{{ title }}</h2>
      <p v-if="message" class="mb-4 text-sm text-zinc-400">{{ message }}</p>

      <!-- Input -->
      <input
        ref="inputRef"
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:border-transparent mb-6"
        @keyup.enter="handleEnterKey"
        @keyup.esc="handleCancel"
      />

      <!-- Actions -->
      <div class="flex justify-end gap-3">
        <button
          @click="handleCancel"
          :disabled="loading"
          class="px-5 py-2.5 rounded-xl font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          @click="handleConfirm"
          :disabled="loading"
          class="px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D97757] to-[#fb923c] hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
        >
          <svg
            v-if="loading"
            class="w-4 h-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>{{ loading ? "Saving..." : confirmText }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    title: string;
    message?: string;
    placeholder?: string;
    defaultValue?: string;
    confirmText?: string;
    loading?: boolean;
  }>(),
  {
    message: "",
    placeholder: "",
    defaultValue: "",
    confirmText: "Confirm",
    loading: false,
  }
);

const emit = defineEmits<{
  confirm: [value: string];
  cancel: [];
}>();

const inputValue = ref("");
const inputRef = ref<HTMLInputElement | null>(null);
// Timestamp (ms) when modal was opened - used to ignore stray Enter presses
const openedAt = ref<number | null>(null);

// Watch for modal opening to set default value and focus
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      inputValue.value = props.defaultValue;
      nextTick(() => {
        inputRef.value?.focus();
        inputRef.value?.select();
        // record open time to prevent immediate accidental Enter confirms
        openedAt.value = Date.now();
      });
    }
  }
);

function handleConfirm() {
  if (inputValue.value.trim()) {
    emit("confirm", inputValue.value.trim());
    inputValue.value = "";
  }
}

function handleEnterKey() {
  // Ignore Enter keys that happen immediately after the modal opens
  const now = Date.now();
  const threshold = 300; // ms
  if (openedAt.value && now - openedAt.value < threshold) {
    // swallow accidental Enter (likely from a held key while modal opened)
    return;
  }

  handleConfirm();
}

function handleCancel() {
  emit("cancel");
  inputValue.value = "";
}
</script>

<style scoped>
/* Smooth transitions */
.fixed {
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.bg-zinc-900 {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
