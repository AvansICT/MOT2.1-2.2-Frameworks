<template>
  <div class="p-6 bg-gray-50 min-h-full">
    <div class="max-w-4xl mx-auto">
      <!-- Header with back button -->
      <div class="flex items-center justify-between mb-6">
        <router-link 
          to="/movies"
          class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Movies
        </router-link>
        <div class="flex space-x-2">
          <router-link 
            :to="`/movies/${filmId}/edit`"
            class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            Edit Movie
          </router-link>
          <button
            @click="confirmDelete"
            class="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
            Delete Movie
          </button>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p class="mt-4 text-gray-600">Loading movie details...</p>
      </div>

      <!-- Error state -->
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {{ error }}
      </div>

      <!-- Movie Details -->
      <div v-if="!loading && !error && film" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Movie Header -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
          <h1 class="text-4xl font-bold mb-2">{{ film.title }}</h1>
          <div class="flex items-center space-x-4 text-blue-100">
            <span class="bg-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
              {{ film.rating }}
            </span>
            <span>{{ film.release_year }}</span>
            <span>{{ film.length }} minutes</span>
          </div>
        </div>

        <!-- Movie Content -->
        <div class="p-8">
          <!-- Description -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
            <p class="text-gray-600 leading-relaxed">{{ film.description || 'No description available.' }}</p>
          </div>

          <!-- Movie Details Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Rental Rate</h3>
              <p class="text-2xl font-bold text-green-600">${{ film.rental_rate }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Rental Duration</h3>
              <p class="text-2xl font-bold text-blue-600">{{ film.rental_duration }} days</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Replacement Cost</h3>
              <p class="text-2xl font-bold text-orange-600">${{ film.replacement_cost }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Language ID</h3>
              <p class="text-2xl font-bold text-gray-800">{{ film.language_id }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Original Language</h3>
              <p class="text-2xl font-bold text-gray-800">{{ film.original_language_id || 'Same as language' }}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Last Updated</h3>
              <p class="text-lg font-bold text-gray-800">{{ formatDate(film.last_update) }}</p>
            </div>
          </div>

          <!-- Special Features -->
          <div v-if="film.special_features" class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Special Features</h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="feature in specialFeatures"
                :key="feature"
                class="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Movie not found -->
      <div v-if="!loading && !error && !film" class="text-center py-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Movie not found</h2>
        <p class="text-gray-600 mb-6">The movie you're looking for doesn't exist.</p>
        <router-link 
          to="/movies"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Back to Movies
        </router-link>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
        <p class="text-gray-600 mb-6">
          Are you sure you want to delete "{{ film?.title }}"? This action cannot be undone.
        </p>
        <div class="flex justify-end space-x-4">
          <button
            @click="showDeleteModal = false"
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            @click="deleteMovie"
            :disabled="deleteLoading"
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span v-if="deleteLoading">Deleting...</span>
            <span v-else>Delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGet, useDelete } from '../composables/axios';
import type { FilmDetails } from '../types/movie';

const route = useRoute();
const router = useRouter();

const filmId = computed(() => route.params.id as string);
const showDeleteModal = ref(false);
const deleteLoading = ref(false);

// Fetch movie details
const { data: film, loading, error, execute } = useGet<FilmDetails>(`/api/movies/${filmId.value}`, true);

// Special features computed property
const specialFeatures = computed(() => {
  if (!film.value?.special_features) return [];
  return film.value.special_features.split(',').map(feature => feature.trim());
});

// Format date helper
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString();
};

// Delete confirmation
const confirmDelete = () => {
  showDeleteModal.value = true;
};

// Delete movie
const deleteMovie = async () => {
  deleteLoading.value = true;
  
  try {
    const { execute: executeDelete } = useDelete(`/api/movies/${filmId.value}`);
    await executeDelete();
    
    // Redirect to movies list
    router.push('/movies');
  } catch (err) {
    console.error('Error deleting movie:', err);
    // You could show an error message here
  } finally {
    deleteLoading.value = false;
    showDeleteModal.value = false;
  }
};

// Refresh data when route changes
onMounted(() => {
  if (filmId.value) {
    execute();
  }
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
