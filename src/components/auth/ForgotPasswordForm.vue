<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <div class="info-message">
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span
        >Enter your email address and we'll send you a link to reset your
        password.</span
      >
    </div>

    <!-- Email Input -->
    <div class="form-group">
      <label for="forgot-email" class="form-label">Email Address</label>
      <input
        id="forgot-email"
        v-model="email"
        type="email"
        class="form-input"
        placeholder="your.email@example.com"
        required
        :disabled="isLoading"
      />
    </div>

    <!-- Error/Success Message -->
    <div v-if="errorMessage" class="error-message">
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <span>{{ errorMessage }}</span>
    </div>

    <div v-if="successMessage" class="success-message">
      <svg
        class="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>{{ successMessage }}</span>
    </div>

    <!-- Submit Button -->
    <button type="submit" class="submit-button" :disabled="isLoading">
      <span v-if="!isLoading">Send Reset Link</span>
      <span v-else class="loading-spinner">
        <svg class="spinner" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
            stroke-linecap="round"
          ></circle>
        </svg>
        Sending...
      </span>
    </button>

    <!-- Back to Login Link -->
    <div class="footer-link">
      <button
        type="button"
        @click="$emit('switch-to-login')"
        class="link-button-secondary"
      >
        <svg
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to login
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "switch-to-login"): void;
  (e: "reset-sent"): void;
}>();

const email = ref("");
const isLoading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

const handleSubmit = async () => {
  errorMessage.value = "";
  successMessage.value = "";
  isLoading.value = true;

  try {
    // Validation
    if (!email.value) {
      errorMessage.value = "Please enter your email address";
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    successMessage.value =
      "Reset link sent! Check your email for instructions.";

    // Wait a bit before switching to reset view
    setTimeout(() => {
      emit("reset-sent");
    }, 2000);
  } catch (error) {
    errorMessage.value = "Failed to send reset link. Please try again.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
@import "./auth-forms.css";

.info-message {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  color: #93c5fd;
  font-size: 0.875rem;
  line-height: 1.5;
}

.info-message svg {
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.link-button-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  padding: 0;
}

.link-button-secondary:hover {
  color: #d97757;
}
</style>
