<template>
  <div class="min-h-screen bg-black text-white flex flex-col font-sans">
    <!-- Navigation Bar -->
    <Navigation />
    
    <!-- Page Content -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue'
</script>

<style scoped>
/* Global styles for VR */
div {
  font-family: 'Kosugi Maru'
}
</style>