<template>
  <div class="p-6 bg-gray-50 min-h-full">
    <div class="max-w-2xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-bold text-blue-700">Add New Movie</h1>
        <router-link 
          to="/movies" 
          class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          ← Back to Movies
        </router-link>
      </div>

      <!-- Movie Form Component -->
      <MovieForm
        :loading="loading"
        :error="error"
        :success="success"
        submit-text="Add Movie"
        loading-text="Adding..."
        success-message="Movie added successfully!"
        @submit="handleSubmit"
      >
        <template #cancel-button>
          <router-link 
            to="/movies"
            class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </router-link>
        </template>
      </MovieForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePost } from '../composables/axios';
import type { FilmDetails } from '../types/movie';
import MovieForm from '../components/MovieForm.vue';

const router = useRouter();

// State
const loading = ref(false);
const error = ref<string | null>(null);
const success = ref(false);

// Handle form submission
const handleSubmit = async (movieData: Omit<FilmDetails, 'film_id' | 'last_update'>) => {
  loading.value = true;
  error.value = null;
  success.value = false;

  try {
    const { execute } = usePost('/api/movies', movieData);
    const result = await execute();
    
    if (result) {
      success.value = true;
      
      // Redirect after 2 seconds
      setTimeout(() => {
        router.push('/movies');
      }, 2000);
    } else {
      error.value = 'Failed to add movie. Please try again.';
    }
  } catch (err) {
    error.value = 'Failed to add movie. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
