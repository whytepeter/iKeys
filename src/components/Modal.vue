<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-overlay" @click="handleOverlayClick">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h2 class="modal-title">{{ title }}</h2>
            <button class="modal-close" @click="close">
              <svg
                class="w-5 h-5"
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
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
  title: string;
  closeOnOverlay?: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const handleOverlayClick = () => {
  if (props.closeOnOverlay !== false) {
    close();
  }
};

const close = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border: 1px solid hsl(var(--border));
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dark .modal-container {
  background: hsl(var(--card));
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  border-color: hsl(var(--border));
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  border-bottom: 1px solid hsl(var(--border));
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(var(--foreground));
  margin: 0;
}

.modal-close {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background: hsl(var(--secondary));
  color: hsl(var(--muted-foreground));
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  background: hsl(var(--accent));
  color: white;
  transform: scale(1.05);
}

.modal-body {
  padding: 24px 28px;
  overflow-y: auto;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.25s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95) translateY(10px);
}

@media (max-width: 768px) {
  .modal-container {
    max-width: 100%;
    max-height: 95vh;
    margin: 10px;
    border-radius: 16px;
  }

  .modal-header {
    padding: 18px 20px;
  }

  .modal-body {
    padding: 18px 20px;
  }

  .modal-title {
    font-size: 1.125rem;
  }
}
</style>
