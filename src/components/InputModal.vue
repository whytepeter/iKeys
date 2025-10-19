<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    @click="handleCancel"
  >
    <div
      class="bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-700 max-w-md w-full mx-4 p-6"
      @click.stop
    >
      <!-- Title -->
      <h2 class="text-xl font-bold text-white mb-2">{{ title }}</h2>
      <p v-if="message" class="text-zinc-400 text-sm mb-4">{{ message }}</p>

      <!-- Input -->
      <input
        ref="inputRef"
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        class="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:border-transparent mb-6"
        @keyup.enter="handleConfirm"
        @keyup.esc="handleCancel"
      />

      <!-- Actions -->
      <div class="flex gap-3 justify-end">
        <button
          @click="handleCancel"
          class="px-5 py-2.5 rounded-xl font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
        >
          Cancel
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
import { ref, watch, nextTick } from "vue";

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    title: string;
    message?: string;
    placeholder?: string;
    defaultValue?: string;
    confirmText?: string;
  }>(),
  {
    message: "",
    placeholder: "",
    defaultValue: "",
    confirmText: "Confirm",
  }
);

const emit = defineEmits<{
  confirm: [value: string];
  cancel: [];
}>();

const inputValue = ref("");
const inputRef = ref<HTMLInputElement | null>(null);

// Watch for modal opening to set default value and focus
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      inputValue.value = props.defaultValue;
      nextTick(() => {
        inputRef.value?.focus();
        inputRef.value?.select();
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
