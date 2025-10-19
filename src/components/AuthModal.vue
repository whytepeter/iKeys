<template>
  <div v-if="isOpen" class="auth-modal-overlay" @click.self="handleClose">
    <div class="auth-modal-content">
      <!-- Close Button -->
      <button @click="handleClose" class="auth-modal-close" aria-label="Close">
        <svg
          class="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M18 6L6 18M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Modal Header -->
      <div class="auth-modal-header">
        <div class="auth-logo">🎹</div>
        <h2 class="auth-title">{{ modalTitle }}</h2>
        <p class="auth-subtitle">{{ modalSubtitle }}</p>
      </div>

      <!-- Modal Body - Switch between components -->
      <div class="auth-modal-body">
        <LoginForm
          v-if="currentView === 'login'"
          @switch-to-register="switchView('register')"
          @switch-to-forgot="switchView('forgot-password')"
          @login-success="handleAuthSuccess"
        />

        <RegisterForm
          v-else-if="currentView === 'register'"
          @switch-to-login="switchView('login')"
          @register-success="handleAuthSuccess"
        />

        <ForgotPasswordForm
          v-else-if="currentView === 'forgot-password'"
          @switch-to-login="switchView('login')"
          @reset-sent="switchView('reset-password')"
        />

        <ResetPasswordForm
          v-else-if="currentView === 'reset-password'"
          @switch-to-login="switchView('login')"
          @reset-success="handleResetSuccess"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import LoginForm from "./auth/LoginForm.vue";
import RegisterForm from "./auth/RegisterForm.vue";
import ForgotPasswordForm from "./auth/ForgotPasswordForm.vue";
import ResetPasswordForm from "./auth/ResetPasswordForm.vue";

const emit = defineEmits<{
  (e: "close"): void;
  (e: "auth-success"): void;
}>();

type AuthView = "login" | "register" | "forgot-password" | "reset-password";

const currentView = ref<AuthView>("login");
const isOpen = ref(false);

// Get URL search params
const getAuthQueryParam = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get("auth");
};

// Update URL with new auth query param
const updateURL = (view: AuthView | null) => {
  const url = new URL(window.location.href);
  if (view) {
    url.searchParams.set("auth", view);
  } else {
    url.searchParams.delete("auth");
  }
  window.history.pushState({}, "", url.toString());
  // Dispatch custom event to notify other parts of the app
  window.dispatchEvent(new Event("urlchange"));
};

// Map URL query values to internal view values
const queryToView = (query: string): AuthView => {
  const validViews: AuthView[] = [
    "login",
    "register",
    "forgot-password",
    "reset-password",
  ];
  return validViews.includes(query as AuthView) ? (query as AuthView) : "login";
};

// Check URL and update modal state
const checkURL = () => {
  const authQuery = getAuthQueryParam();
  if (authQuery) {
    currentView.value = queryToView(authQuery);
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
};

// Switch view and update URL
const switchView = (view: AuthView) => {
  currentView.value = view;
  updateURL(view);
};

// Handle browser back/forward buttons and programmatic URL changes
const handlePopState = () => {
  checkURL();
};

const handleURLChange = () => {
  checkURL();
};

onMounted(() => {
  checkURL();
  window.addEventListener("popstate", handlePopState);
  window.addEventListener("urlchange", handleURLChange);
});

onUnmounted(() => {
  window.removeEventListener("popstate", handlePopState);
  window.removeEventListener("urlchange", handleURLChange);
});

const modalTitle = computed(() => {
  switch (currentView.value) {
    case "login":
      return "Welcome Back!";
    case "register":
      return "Create Account";
    case "forgot-password":
      return "Forgot Password?";
    case "reset-password":
      return "Reset Password";
    default:
      return "Authentication";
  }
});

const modalSubtitle = computed(() => {
  switch (currentView.value) {
    case "login":
      return "Sign in to continue your piano journey";
    case "register":
      return "Join iKeys and start learning today";
    case "forgot-password":
      return "We'll send you a reset link";
    case "reset-password":
      return "Enter your new password";
    default:
      return "";
  }
});

const handleClose = () => {
  isOpen.value = false;
  updateURL(null);
  emit("close");
};

const handleAuthSuccess = () => {
  handleClose();
  emit("auth-success");
};

const handleResetSuccess = () => {
  switchView("login");
};

defineExpose({
  isOpen,
  currentView,
});
</script>

<style scoped>
.auth-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
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

.auth-modal-content {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  border-radius: 24px;
  border: 1px solid rgba(217, 119, 87, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.auth-modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.auth-modal-close:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  transform: scale(1.05);
}

.auth-modal-header {
  text-align: center;
  padding: 2.5rem 2rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.auth-logo {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 1s ease-in-out;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.auth-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.auth-subtitle {
  font-size: 0.95rem;
  color: #9ca3af;
}

.auth-modal-body {
  padding: 2rem;
}

/* Scrollbar styling */
.auth-modal-content::-webkit-scrollbar {
  width: 8px;
}

.auth-modal-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.auth-modal-content::-webkit-scrollbar-thumb {
  background: rgba(217, 119, 87, 0.5);
  border-radius: 4px;
}

.auth-modal-content::-webkit-scrollbar-thumb:hover {
  background: rgba(217, 119, 87, 0.7);
}

/* Responsive */
@media (max-width: 640px) {
  .auth-modal-content {
    max-width: 100%;
    border-radius: 16px;
  }

  .auth-modal-header {
    padding: 2rem 1.5rem 1rem;
  }

  .auth-title {
    font-size: 1.5rem;
  }

  .auth-modal-body {
    padding: 1.5rem;
  }
}
</style>
