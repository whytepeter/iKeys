<template>
  <div v-if="isMobile" class="mobile-blocker">
    <div class="mobile-blocker-content">
      <div class="icon">🖥️</div>

      <h1 class="title">Desktop Only</h1>

      <p class="message">iKeys requires a desktop computer with a keyboard</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isMobile = ref(false);
const currentUrl = ref("");

const detectMobile = (): boolean => {
  // Check user agent
  const userAgent =
    navigator.userAgent || navigator.vendor || (window as any).opera;

  // Check for mobile devices
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if (mobileRegex.test(userAgent)) {
    return true;
  }

  // Check screen size (width less than 768px is typically mobile)
  if (window.innerWidth < 768) {
    return true;
  }

  // Check for touch-only devices
  if ("ontouchstart" in window && window.innerWidth < 1024) {
    return true;
  }

  return false;
};

onMounted(() => {
  isMobile.value = detectMobile();
  currentUrl.value = window.location.href;

  // Re-check on resize (for orientation changes)
  window.addEventListener("resize", () => {
    isMobile.value = detectMobile();
  });
});
</script>

<style scoped>
.mobile-blocker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.mobile-blocker-content {
  text-align: center;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.icon {
  font-size: 5rem;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 20px rgba(217, 119, 87, 0.3));
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.message {
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 400px;
  line-height: 1.6;
  margin: 0 auto;
}

/* Very small screens */
@media (max-width: 360px) {
  .icon {
    font-size: 4rem;
  }

  .title {
    font-size: 2rem;
  }

  .message {
    font-size: 1rem;
  }
}
</style>
