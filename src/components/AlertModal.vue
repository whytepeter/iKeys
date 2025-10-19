<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    @click="handleBackdropClick"
  >
    <div
      class="bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-700 max-w-md w-full mx-4 p-6 animate-slideUp"
      @click.stop
    >
      <!-- Icon -->
      <div class="flex justify-center mb-4">
        <div
          :class="[
            'w-16 h-16 rounded-full flex items-center justify-center text-3xl',
            iconClasses,
          ]"
        >
          {{ icon }}
        </div>
      </div>

      <!-- Title -->
      <h2 class="text-xl font-bold text-white text-center mb-2">{{ title }}</h2>

      <!-- Message -->
      <p v-if="message" class="text-zinc-400 text-center mb-6">
        {{ message }}
      </p>

      <!-- Actions -->
      <div :class="['flex gap-3', confirmOnly ? 'justify-center' : 'justify-end']">
        <button
          v-if="!confirmOnly"
          @click="handleCancel"
          class="px-5 py-2.5 rounded-xl font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
        >
          {{ cancelText }}
        </button>
        <button
          @click="handleConfirm"
          :class="[
            'px-5 py-2.5 rounded-xl font-semibold text-white transition-transform hover:scale-105',
            confirmButtonClass,
          ]"
        >
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    title: string;
    message?: string;
    type?: "alert" | "success" | "error" | "confirm";
    confirmText?: string;
    cancelText?: string;
    confirmOnly?: boolean;
  }>(),
  {
    message: "",
    type: "alert",
    confirmText: "OK",
    cancelText: "Cancel",
    confirmOnly: false,
  }
);

const emit = defineEmits<{
  confirm: [];
  cancel: [];
}>();

const icon = computed(() => {
  switch (props.type) {
    case "success":
      return "✓";
    case "error":
      return "✕";
    case "confirm":
      return "?";
    default:
      return "ⓘ";
  }
});

const iconClasses = computed(() => {
  switch (props.type) {
    case "success":
      return "bg-green-500/20 text-green-500";
    case "error":
      return "bg-red-500/20 text-red-500";
    case "confirm":
      return "bg-orange-500/20 text-orange-500";
    default:
      return "bg-blue-500/20 text-blue-500";
  }
});

const confirmButtonClass = computed(() => {
  switch (props.type) {
    case "success":
      return "bg-gradient-to-r from-green-600 to-green-700";
    case "error":
      return "bg-gradient-to-r from-red-600 to-red-700";
    case "confirm":
      return "bg-gradient-to-r from-orange-600 to-orange-700";
    default:
      return "bg-gradient-to-r from-[#D97757] to-[#fb923c]";
  }
});

function handleConfirm() {
  emit("confirm");
}

function handleCancel() {
  emit("cancel");
}

function handleBackdropClick() {
  if (props.confirmOnly) {
    handleConfirm();
  } else {
    handleCancel();
  }
}
</script>

<style scoped>
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

.animate-slideUp {
  animation: slideUp 0.3s ease-out;
}
</style>

