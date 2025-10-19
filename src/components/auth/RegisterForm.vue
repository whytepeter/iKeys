<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <!-- Full Name Input -->
    <div class="form-group">
      <label for="register-name" class="form-label">Full Name</label>
      <input
        id="register-name"
        v-model="fullName"
        type="text"
        class="form-input"
        placeholder="John Doe"
        required
        :disabled="isLoading"
      />
    </div>

    <!-- Email Input -->
    <div class="form-group">
      <label for="register-email" class="form-label">Email</label>
      <input
        id="register-email"
        v-model="email"
        type="email"
        class="form-input"
        placeholder="your.email@example.com"
        required
        :disabled="isLoading"
      />
    </div>

    <!-- Password Input -->
    <div class="form-group">
      <label for="register-password" class="form-label">Password</label>
      <div class="password-input-wrapper">
        <input
          id="register-password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          class="form-input"
          placeholder="Create a strong password"
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
      <label for="register-confirm-password" class="form-label"
        >Confirm Password</label
      >
      <div class="password-input-wrapper">
        <input
          id="register-confirm-password"
          v-model="confirmPassword"
          :type="showConfirmPassword ? 'text' : 'password'"
          class="form-input"
          placeholder="Confirm your password"
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

    <!-- Terms & Conditions -->
    <div class="form-group">
      <label class="checkbox-label">
        <input v-model="acceptTerms" type="checkbox" class="form-checkbox" />
        <span
          >I agree to the
          <a href="#" class="link-button">Terms & Conditions</a> and
          <a href="#" class="link-button">Privacy Policy</a></span
        >
      </label>
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
    <button
      type="submit"
      class="submit-button"
      :disabled="isLoading || !acceptTerms"
    >
      <span v-if="!isLoading">Create Account</span>
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
        Creating account...
      </span>
    </button>

    <!-- Sign In Link -->
    <div class="footer-link">
      Already have an account?
      <button
        type="button"
        @click="$emit('switch-to-login')"
        class="link-button-primary"
      >
        Sign in
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "../../stores/user";
import { authService } from "../../services/authService";

const emit = defineEmits<{
  (e: "switch-to-login"): void;
  (e: "register-success"): void;
}>();

const userStore = useUserStore();

const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const acceptTerms = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

// Password strength calculation
const passwordStrength = computed(() => {
  let strength = 0;
  const pwd = password.value;

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
  if (password.value.length === 0) return "";
  if (passwordStrength.value < 40) return "Weak";
  if (passwordStrength.value < 70) return "Medium";
  return "Strong";
});

const handleSubmit = async () => {
  errorMessage.value = "";
  successMessage.value = "";
  isLoading.value = true;

  try {
    // Validation
    if (!fullName.value || !email.value || !password.value) {
      errorMessage.value = "Please fill in all fields";
      return;
    }

    if (password.value !== confirmPassword.value) {
      errorMessage.value = "Passwords do not match";
      return;
    }

    if (password.value.length < 8) {
      errorMessage.value = "Password must be at least 8 characters";
      return;
    }

    if (!acceptTerms.value) {
      errorMessage.value = "Please accept the terms and conditions";
      return;
    }

    // Register with Appwrite
    const user = await authService.register(
      email.value,
      password.value,
      fullName.value
    );

    // Update user store
    userStore.setProfile({
      id: user.$id,
      name: user.name,
      email: user.email,
      createdAt: new Date().toISOString(),
    });

    successMessage.value = "Account created successfully!";
    setTimeout(() => {
      emit("register-success");
    }, 1000);
  } catch (error: any) {
    console.error("Registration error:", error);

    // Handle specific Appwrite errors
    if (error.code === 409) {
      errorMessage.value = "An account with this email already exists";
    } else if (error.message?.includes("password")) {
      errorMessage.value =
        "Password must be at least 8 characters with uppercase, lowercase, and numbers";
    } else {
      errorMessage.value =
        error.message || "Failed to create account. Please try again.";
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
@import "./auth-forms.css";

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
</style>
