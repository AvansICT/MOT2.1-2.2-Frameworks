<script setup lang="ts">
import { useAuthService } from './services/auth.service';
import { useRouter } from 'vue-router';

const { isAuthenticated, logout } = useAuthService();
const router = useRouter();

const handleLogout = () => {
  logout();
  router.push('/login');
};
</script>

<template>
  <div id="app">
    <nav v-if="isAuthenticated" class="navbar">
      <router-link to="/dashboard">Dashboard</router-link>
      <button @click="handleLogout" class="logout-button">Logout</button>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<style>
.navbar {
  padding: 1rem;
  background-color: #42b983;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.logout-button {
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
