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
        <path
          d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z"
        ></path>
        <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
      </svg>
      <span>Choose a strong password that you haven't used before.</span>
    </div>

    <!-- New Password Input -->
    <div class="form-group">
      <label for="reset-password" class="form-label">New Password</label>
      <div class="password-input-wrapper">
        <input
          id="reset-password"
          v-model="newPassword"
          :type="showPassword ? 'text' : 'password'"
          class="form-input"
          placeholder="Enter new password"
          required
          :disabled="isLoading"
          minlength="8"
        />
        <button
          type="button"
          @click="showPassword = !showPassword"
          class="password-toggle"
          :aria-label="showPassword ? 'Hide password' : 'Show password'"
        >
          <svg
            v-if="!showPassword"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
            ></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </button>
      </div>
      <div class="password-strength">
        <div class="strength-bar">
          <div
            class="strength-fill"
            :class="passwordStrengthClass"
            :style="{ width: passwordStrength + '%' }"
          ></div>
        </div>
        <span class="strength-text">{{ passwordStrengthText }}</span>
      </div>
    </div>

    <!-- Confirm Password Input -->
    <div class="form-group">
      <label for="reset-confirm-password" class="form-label"
        >Confirm New Password</label
      >
      <div class="password-input-wrapper">
        <input
          id="reset-confirm-password"
          v-model="confirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          class="form-input"
          placeholder="Confirm new password"
          required
          :disabled="isLoading"
        />
        <button
          type="button"
          @click="showConfirmPassword = !showConfirmPassword"
          class="password-toggle"
          :aria-label="showConfirmPassword ? 'Hide password' : 'Show password'"
        >
          <svg
            v-if="!showConfirmPassword"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
            ></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </button>
      </div>
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
      <span v-if="!isLoading">Reset Password</span>
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
        Resetting...
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
import { ref, computed, onMounted } from "vue";
import { authService } from "../../services/authService";

const emit = defineEmits<{
  (e: "switch-to-login"): void;
  (e: "reset-success"): void;
}>();

const newPassword = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
const userId = ref("");
const secret = ref("");

// Password strength calculation
const passwordStrength = computed(() => {
  let strength = 0;
  const pwd = newPassword.value;

  if (pwd.length >= 8) strength += 25;
  if (pwd.length >= 12) strength += 25;
  if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength += 25;
  if (/[0-9]/.test(pwd)) strength += 15;
  if (/[^a-zA-Z0-9]/.test(pwd)) strength += 10;

  return Math.min(strength, 100);
});

const passwordStrengthClass = computed(() => {
  if (passwordStrength.value < 40) return "strength-weak";
  if (passwordStrength.value < 70) return "strength-medium";
  return "strength-strong";
});

const passwordStrengthText = computed(() => {
  if (newPassword.value.length === 0) return "";
  if (passwordStrength.value < 40) return "Weak";
  if (passwordStrength.value < 70) return "Medium";
  return "Strong";
});

// Get reset parameters from URL on mount
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  userId.value = urlParams.get("userId") || "";
  secret.value = urlParams.get("secret") || "";

  // Check if we have the required parameters
  if (!userId.value || !secret.value) {
    errorMessage.value = "Invalid or expired reset link. Please request a new one.";
  }
});

const handleSubmit = async () => {
  errorMessage.value = "";
  successMessage.value = "";
  isLoading.value = true;

  try {
    // Validation
    if (!newPassword.value || !confirmPassword.value) {
      errorMessage.value = "Please fill in all fields";
      return;
    }

    if (newPassword.value !== confirmPassword.value) {
      errorMessage.value = "Passwords do not match";
      return;
    }

    if (newPassword.value.length < 8) {
      errorMessage.value = "Password must be at least 8 characters";
      return;
    }

    if (passwordStrength.value < 40) {
      errorMessage.value = "Please choose a stronger password";
      return;
    }

    // Check if we have the required parameters
    if (!userId.value || !secret.value) {
      errorMessage.value = "Invalid reset link. Please request a new one.";
      return;
    }

    // Reset password with Appwrite
    await authService.resetPassword(
      userId.value,
      secret.value,
      newPassword.value
    );

    successMessage.value = "Password reset successfully! Redirecting to login...";

    // Wait a bit before switching to login
    setTimeout(() => {
      emit("reset-success");
      emit("switch-to-login");
    }, 2000);
  } catch (error: any) {
    console.error("Reset password error:", error);
    
    // Handle specific Appwrite errors
    if (error.code === 401) {
      errorMessage.value = "Invalid or expired reset link. Please request a new one.";
    } else {
      errorMessage.value = error.message || "Failed to reset password. Please try again.";
    }
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

.password-strength {
  margin-top: 0.5rem;
}

.strength-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  transition: width 0.3s ease, background-color 0.3s ease;
  border-radius: 2px;
}

.strength-weak {
  background: linear-gradient(90deg, #ef4444, #dc2626);
}

.strength-medium {
  background: linear-gradient(90deg, #f59e0b, #d97706);
}

.strength-strong {
  background: linear-gradient(90deg, #10b981, #059669);
}

.strength-text {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #9ca3af;
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
