<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <MovieCard
      v-for="film in films"
      :key="film.film_id"
      :film="film"
      @click="$emit('filmClick', $event)"
      @delete="$emit('filmDelete', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { FilmDetails } from '../types/movie';
import MovieCard from './MovieCard.vue';

interface Props {
  films: FilmDetails[];
}

defineProps<Props>();

// Define emits
defineEmits<{
  filmClick: [filmId: number];
  filmDelete: [film: FilmDetails];
}>();
</script>

<style scoped>
/* Additional styles if needed */
</style>
