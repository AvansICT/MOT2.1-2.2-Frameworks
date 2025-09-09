<template>
  <div class="p-6 bg-gray-50 min-h-full">
    <!-- Header -->
    <MoviesHeader />
    
    <!-- Search bar -->
    <SearchBar 
      v-model:search-term="searchTerm"
      @search="handleSearch"
    />

    <!-- Loading, Error, and Empty States -->
    <LoadingErrorStates 
      :loading="loading"
      :error="error"
      :films="films"
    />

    <!-- Movies grid -->
    <MoviesGrid
      v-if="!loading && !error && films.length > 0"
      :films="films"
      @film-click="goToDetail"
      @film-delete="confirmDelete"
    />

    <!-- Delete Confirmation Modal -->
    <DeleteConfirmModal
      :show="showDeleteModal"
      :movie-title="movieToDelete?.title || ''"
      :loading="deleteLoading"
      @cancel="showDeleteModal = false"
      @confirm="deleteMovie"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useGet, useDelete } from '../composables/axios';
import type { FilmDetails } from '../types/movie';

// Import components
import MoviesHeader from '../components/MoviesHeader.vue';
import SearchBar from '../components/SearchBar.vue';
import LoadingErrorStates from '../components/LoadingErrorStates.vue';
import MoviesGrid from '../components/MoviesGrid.vue';
import DeleteConfirmModal from '../components/DeleteConfirmModal.vue';

const router = useRouter();
const searchTerm = ref('');

// Use the composable's reactive state directly - API CALLS STAY HERE
const { data: filmsData, loading, error, execute } = useGet('/api/movies', true);

// Create a computed property for films to handle the data transformation
const films = computed(() => filmsData.value || []);

// Delete modal state
const showDeleteModal = ref(false);
const movieToDelete = ref<FilmDetails | null>(null);
const deleteLoading = ref(false);

// Handle search input
const handleSearch = async () => {
  if (searchTerm.value.trim()) {
    // You can create a separate request for search
    // For now, this will just re-execute the original request
    await execute();
  } else {
    await execute();
  }
};

// Navigate to movie detail
const goToDetail = (filmId: number) => {
  router.push(`/movies/${filmId}`);
};

// Confirm delete
const confirmDelete = (film: FilmDetails) => {
  movieToDelete.value = film;
  showDeleteModal.value = true;
};

// Delete movie
const deleteMovie = async () => {
  if (!movieToDelete.value) return;
  
  deleteLoading.value = true;
  
  try {
    const { execute: executeDelete } = useDelete(`/api/movies/${movieToDelete.value.film_id}`);
    await executeDelete();
    
    // Refresh the movies list
    await execute();
    
    // Close modal
    showDeleteModal.value = false;
    movieToDelete.value = null;
  } catch (err) {
    console.error('Error deleting movie:', err);
    // You could show an error message here
  } finally {
    deleteLoading.value = false;
  }
};
</script>

<style scoped>
/* Styles moved to individual components */
</style>
