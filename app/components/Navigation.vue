<template>
  <nav class="bg-gray-900 border-b-4 border-cyan-400 p-4">
    <div class="flex justify-center space-x-8">
      <NuxtLink
        to="/"
        :class="[
          'px-6 py-3 text-2xl font-bold rounded-lg transition-all duration-200',
          $route.path === '/' 
            ? 'bg-cyan-400 text-black' 
            : 'bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black'
        ]"
      >
        📋 Copy Tool
      </NuxtLink>
      <NuxtLink
        to="/slash-unscrambler"
        :class="[
          'px-6 py-3 text-2xl font-bold rounded-lg transition-all duration-200',
          $route.path === '/slash-unscrambler' 
            ? 'bg-cyan-400 text-black' 
            : 'bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black'
        ]"
      >
        🔗 Slash Unscrambler
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
// No props or emits needed with NuxtLink routing
</script>

<style scoped>
/* Large touch targets for VR */
button {
  min-height: 80px;
  min-width: 200px;
}
</style>
