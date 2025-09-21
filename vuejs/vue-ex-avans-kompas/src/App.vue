<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <router-link :to="{ name: 'overview' }">Overzicht</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  background-color: gray;
}
</style>
