<template>
  <div class="mb-6">
    <input
      :model-value="searchTerm"
      @input="handleInput"
      type="text"
      placeholder="Search movies..."
      class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  searchTerm: string;
}

defineProps<Props>();

// Define emits
const emit = defineEmits<{
  'update:searchTerm': [value: string];
  search: [];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:searchTerm', target.value);
  emit('search');
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
