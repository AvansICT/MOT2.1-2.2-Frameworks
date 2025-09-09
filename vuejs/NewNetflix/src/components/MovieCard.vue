<template>
  <div
    class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative group"
  >
    <!-- Clickable card content -->
    <div 
      @click="$emit('click', film.film_id)"
      class="p-6 cursor-pointer"
    >
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ film.title }}</h3>
      <p class="text-gray-600 mb-2 line-clamp-3">{{ film.description }}</p>
      <div class="flex justify-between items-center text-sm text-gray-500">
        <span>{{ film.release_year }}</span>
        <span class="font-semibold">${{ film.rental_rate }}</span>
      </div>
      <div class="mt-2">
        <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          {{ film.rating }}
        </span>
      </div>
    </div>
    
    <!-- Delete button -->
    <button
      @click.stop="$emit('delete', film)"
      class="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all duration-200 z-10"
      title="Delete movie"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { FilmDetails } from '../types/movie';

interface Props {
  film: FilmDetails;
}

defineProps<Props>();

// Define emits
defineEmits<{
  click: [filmId: number];
  delete: [film: FilmDetails];
}>();
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
