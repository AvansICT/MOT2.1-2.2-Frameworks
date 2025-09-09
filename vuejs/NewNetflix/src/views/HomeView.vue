<script setup lang="ts">
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-gray-100 to-blue-100 p-6">
    <div class="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
      <h1 class="text-3xl font-bold text-blue-700 mb-2 text-center">Sakila Movie Rental Dashboard</h1>
      <p class="text-gray-600 text-center mb-6">
        Welcome to <em class="text-blue-500">Nodejs Express Sakila Explorer</em>, a very basic Express website developed as a tutorial example on the Mozilla Developer Network.
      </p>
      <h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Dynamic content</h2>
      <p class="text-gray-700 mb-4">This app has the following record counts:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <li class="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
          <span class="text-lg font-semibold text-blue-600">Movies</span>
          <span class="text-2xl font-bold">1000</span>
        </li>
        <li class="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
          <span class="text-lg font-semibold text-blue-600">Actors</span>
          <span class="text-2xl font-bold">256</span>
        </li>
        <li class="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
          <span class="text-lg font-semibold text-blue-600">Rentals</span>
          <span class="text-2xl font-bold">126</span>
        </li>
      </ul>
      <p class="text-center text-green-600 font-semibold text-lg">
        Status: <span class="font-bold">Server is up and running!</span>
      </p>
    </div>
  </main>
</template>
