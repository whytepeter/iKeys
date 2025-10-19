<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    @click="type === 'alert' ? handleConfirm() : handleCancel()"
  >
    <div
      class="bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-700 max-w-md w-full mx-4 p-6"
      @click.stop
    >
      <!-- Icon -->
      <div class="flex items-center gap-4 mb-4">
        <div
          v-if="type === 'confirm'"
          class="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0"
        >
          <svg
            class="w-6 h-6 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div
          v-else-if="type === 'success'"
          class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"
        >
          <svg
            class="w-6 h-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div
          v-else-if="type === 'error'"
          class="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0"
        >
          <svg
            class="w-6 h-6 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div
          v-else
          class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0"
        >
          <svg
            class="w-6 h-6 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <!-- Title -->
        <h2 class="text-xl font-bold text-white">{{ title }}</h2>
      </div>

      <!-- Message -->
      <p class="text-zinc-300 mb-6 ml-16">{{ message }}</p>

      <!-- Actions -->
      <div class="flex gap-3 justify-end">
        <button
          v-if="type === 'confirm'"
          @click="handleCancel"
          class="px-5 py-2.5 rounded-xl font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
        >
          {{ cancelText }}
        </button>
        <button
          @click="handleConfirm"
          class="px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D97757] to-[#fb923c] hover:scale-105 transition-transform"
        >
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    isOpen: boolean;
    title: string;
    message: string;
    type?: "alert" | "confirm" | "success" | "error";
    confirmText?: string;
    cancelText?: string;
  }>(),
  {
    type: "alert",
    confirmText: "OK",
    cancelText: "Cancel",
  }
);

const emit = defineEmits<{
  confirm: [];
  cancel: [];
}>();

function handleConfirm() {
  emit("confirm");
}

function handleCancel() {
  emit("cancel");
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
