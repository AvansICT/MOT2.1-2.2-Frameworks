<template>
  <div class="flex items-center justify-between mb-6">
    <h1 class="text-3xl font-bold text-blue-700">Movies</h1>
    <router-link 
      to="/movies/add"
      class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
      </svg>
      Add Movie
    </router-link>
  </div>
</template>

<script setup lang="ts">
// No props or emits needed for this simple header
</script>

<style scoped>
/* Additional styles if needed */
</style>
