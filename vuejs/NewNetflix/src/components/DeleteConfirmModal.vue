<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h3>
      <p class="text-gray-600 mb-6">
        Are you sure you want to delete "{{ movieTitle }}"? This action cannot be undone.
      </p>
      <div class="flex justify-end space-x-4">
        <button
          @click="$emit('cancel')"
          class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          @click="$emit('confirm')"
          :disabled="loading"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span v-if="loading">Deleting...</span>
          <span v-else>Delete</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
  movieTitle: string;
  loading: boolean;
}

defineProps<Props>();

// Define emits
defineEmits<{
  cancel: [];
  confirm: [];
}>();
</script>

<style scoped>
/* Additional styles if needed */
</style>
