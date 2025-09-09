<template>
  <!-- Loading state -->
  <div v-if="loading" class="text-center py-8">
    <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <p class="mt-2 text-gray-600">Loading movies...</p>
  </div>

  <!-- Error state -->
  <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
    {{ error }}
  </div>

  <!-- Empty state -->
  <div v-else-if="films.length === 0" class="text-center py-8">
    <p class="text-gray-500">No movies found.</p>
  </div>
</template>

<script setup lang="ts">
import type { FilmDetails } from '../types/movie';

interface Props {
  loading: boolean;
  error: string | null;
  films: FilmDetails[];
}

defineProps<Props>();
</script>

<style scoped>
/* Additional styles if needed */
</style>
