<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>
      
      <div class="form-group">
        <label for="username">Username</label>
        <input 
          type="text" 
          id="username"
          v-model="username"
          required
          placeholder="Enter username"
          :disabled="loading"
        >
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password"
          v-model="password"
          required
          placeholder="Enter password"
          :disabled="loading"
        >
      </div>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <button 
        type="submit" 
        :disabled="loading"
        class="login-button"
      >
        {{ loading ? 'Logging in...' : 'Login' }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthService } from '../services/auth.service';

const router = useRouter();
const { login } = useAuthService();

const username = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleLogin = async () => {
  loading.value = true;
  error.value = '';

  try {
    const success = await login({
      username: username.value,
      password: password.value,
    });

    if (success) {
      router.push('/dashboard');
    } else {
      error.value = 'Invalid username or password';
    }
  } catch (e) {
    error.value = 'An error occurred during login';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #42b983;
}

.error-message {
  color: #dc3545;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-button:hover {
  background-color: #3aa876;
}

.login-button:disabled {
  background-color: #a8d5c3;
  cursor: not-allowed;
}
</style>
