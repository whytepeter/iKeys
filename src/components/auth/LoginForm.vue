<template>
  <form @submit.prevent="handleSubmit" class="auth-form">
    <!-- Email Input -->
    <div class="form-group">
      <label for="login-email" class="form-label">Email</label>
      <input
        id="login-email"
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
      <label for="login-password" class="form-label">Password</label>
      <div class="password-input-wrapper">
        <input
          id="login-password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          class="form-input"
          placeholder="Enter your password"
          required
          :disabled="isLoading"
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
    </div>

    <!-- Remember Me & Forgot Password -->
    <div class="form-options">
      <label class="checkbox-label">
        <input v-model="rememberMe" type="checkbox" class="form-checkbox" />
        <span>Remember me</span>
      </label>
      <button
        type="button"
        @click="$emit('switch-to-forgot')"
        class="link-button"
      >
        Forgot password?
      </button>
    </div>

    <!-- Error Message -->
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

    <!-- Submit Button -->
    <button type="submit" class="submit-button" :disabled="isLoading">
      <span v-if="!isLoading">Sign In</span>
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
        Signing in...
      </span>
    </button>

    <!-- Sign Up Link -->
    <div class="footer-link">
      Don't have an account?
      <button
        type="button"
        @click="$emit('switch-to-register')"
        class="link-button-primary"
      >
        Sign up
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../../stores/user";

const emit = defineEmits<{
  (e: "switch-to-register"): void;
  (e: "switch-to-forgot"): void;
  (e: "login-success"): void;
}>();

const userStore = useUserStore();

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const showPassword = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");

const handleSubmit = async () => {
  errorMessage.value = "";
  isLoading.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Basic validation
    if (!email.value || !password.value) {
      errorMessage.value = "Please fill in all fields";
      return;
    }

    // For demo purposes - accept any email/password
    userStore.setProfile({
      id: "user-" + Date.now(),
      name: email.value.split("@")[0],
      email: email.value,
      createdAt: new Date().toISOString(),
    });

    emit("login-success");
  } catch (error) {
    errorMessage.value = "Invalid email or password";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
@import "./auth-forms.css";
</style>
