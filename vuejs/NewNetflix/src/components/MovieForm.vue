<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <form @submit.prevent="handleSubmit">
      <!-- Title -->
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
          Movie Title *
        </label>
        <input
          id="title"
          v-model="form.title"
          type="text"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter movie title"
        />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          v-model="form.description"
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter movie description"
        ></textarea>
      </div>

      <!-- Release Year and Rating Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="release_year" class="block text-sm font-medium text-gray-700 mb-2">
            Release Year
          </label>
          <input
            id="release_year"
            v-model.number="form.release_year"
            type="number"
            min="1900"
            max="2030"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="2024"
          />
        </div>
        <div>
          <label for="rating" class="block text-sm font-medium text-gray-700 mb-2">
            Rating
          </label>
          <select
            id="rating"
            v-model="form.rating"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </select>
        </div>
      </div>

      <!-- Language and Rental Duration Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="language_id" class="block text-sm font-medium text-gray-700 mb-2">
            Language ID
          </label>
          <input
            id="language_id"
            v-model.number="form.language_id"
            type="number"
            min="1"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="1"
          />
        </div>
        <div>
          <label for="rental_duration" class="block text-sm font-medium text-gray-700 mb-2">
            Rental Duration (days)
          </label>
          <input
            id="rental_duration"
            v-model.number="form.rental_duration"
            type="number"
            min="1"
            max="30"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="3"
          />
        </div>
      </div>

      <!-- Rental Rate and Length Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="rental_rate" class="block text-sm font-medium text-gray-700 mb-2">
            Rental Rate ($)
          </label>
          <input
            id="rental_rate"
            v-model="form.rental_rate"
            type="text"
            step="0.01"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="4.99"
          />
        </div>
        <div>
          <label for="length" class="block text-sm font-medium text-gray-700 mb-2">
            Length (minutes)
          </label>
          <input
            id="length"
            v-model.number="form.length"
            type="number"
            min="1"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="120"
          />
        </div>
      </div>

      <!-- Replacement Cost and Original Language Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="replacement_cost" class="block text-sm font-medium text-gray-700 mb-2">
            Replacement Cost ($)
          </label>
          <input
            id="replacement_cost"
            v-model="form.replacement_cost"
            type="text"
            step="0.01"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="19.99"
          />
        </div>
        <div>
          <label for="original_language_id" class="block text-sm font-medium text-gray-700 mb-2">
            Original Language ID (Optional)
          </label>
          <input
            id="original_language_id"
            v-model.number="form.original_language_id"
            type="number"
            min="1"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Leave empty if same as language"
          />
        </div>
      </div>

      <!-- Special Features -->
      <div class="mb-6">
        <label for="special_features" class="block text-sm font-medium text-gray-700 mb-2">
          Special Features (comma-separated)
        </label>
        <input
          id="special_features"
          v-model="form.special_features"
          type="text"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Trailers,Commentaries,Deleted Scenes,Behind the Scenes"
        />
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end space-x-4">
        <slot name="cancel-button">
          <button
            type="button"
            class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </slot>
        <button
          type="submit"
          :disabled="loading"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span v-if="loading" class="inline-flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ loadingText }}
          </span>
          <span v-else>{{ submitText }}</span>
        </button>
      </div>
    </form>

    <!-- Success/Error Messages -->
    <div v-if="error" class="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {{ error }}
    </div>
    <div v-if="success" class="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { FilmDetails } from '../types/movie';

// Define props
interface Props {
  initialData?: Partial<FilmDetails>;
  loading?: boolean;
  error?: string | null;
  success?: boolean;
  submitText?: string;
  loadingText?: string;
  successMessage?: string;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  error: null,
  success: false,
  submitText: 'Add Movie',
  loadingText: 'Adding...',
  successMessage: 'Movie saved successfully!',
});

// Define emits
const emit = defineEmits<{
  submit: [movieData: Omit<FilmDetails, 'film_id' | 'last_update'>];
}>();

// Form data based on FilmDetails interface
const form = reactive<Omit<FilmDetails, 'film_id' | 'last_update'>>({
  title: '',
  description: '',
  release_year: new Date().getFullYear(),
  language_id: 1,
  original_language_id: null,
  rental_duration: 3,
  rental_rate: '4.99',
  length: 120,
  replacement_cost: '19.99',
  rating: 'G',
  special_features: '',
});

// Handle form submission
const handleSubmit = () => {
  emit('submit', { ...form });
};

// Watch for initial data changes
watch(
  () => props.initialData,
  (newData) => {
    if (newData) {
      Object.assign(form, newData);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Additional styles if needed */
</style>
