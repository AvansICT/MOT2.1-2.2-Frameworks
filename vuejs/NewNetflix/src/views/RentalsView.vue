<template>
  <div class="p-6 bg-gray-50 min-h-full">
    <h1 class="text-3xl font-bold text-blue-700 mb-6">Rentals</h1>

    <!-- Loading state -->
    <div v-if="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p class="mt-2 text-gray-600">Loading rentals...</p>
    </div>

    <!-- Error state -->
    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {{ error }}
    </div>

    <!-- Rentals table -->
    <div v-if="!loading && !error" class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rental ID
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer ID
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rental Date
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Return Date
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="rental in rentals" :key="rental.rental_id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ rental.rental_id }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ rental.customer_id }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ formatDate(rental.rental_date) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ rental.return_date ? formatDate(rental.return_date) : 'Not returned' }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="rental.return_date 
                  ? 'inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800' 
                  : 'inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800'"
              >
                {{ rental.return_date ? 'Returned' : 'Active' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty state -->
    <div v-if="!loading && !error && rentals.length === 0" class="text-center py-8">
      <p class="text-gray-500">No rentals found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRentalService } from '../services/movie.service';

const { rentals, loading, error, getAllRentals } = useRentalService();

// Load all rentals on component mount
onMounted(async () => {
  await getAllRentals();
});

// Format date helper function
const formatDate = (date: Date | string) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
