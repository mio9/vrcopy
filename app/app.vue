<template>
  <div class="min-h-screen bg-black text-white p-8 flex flex-col font-sans">
    <!-- Large Copy Button Banner -->
    <div
      class="bg-transparent border-4 border-cyan-400 hover:border-cyan-300 active:border-cyan-500 flex-0 cursor-pointer text-center py-8 mb-8 rounded-lg transition-all duration-200 hover:bg-cyan-900/20"
      @click="copyText"
    >
      <h1 class="text-6xl font-bold text-cyan-400">
        <span v-if="!copied">📋 Copy！</span>
        <span v-else class="text-yellow-400">✅ Copied！</span>
      </h1>
    </div>

    <!-- Large Text Input Area -->
    <div class="mb-8 flex-grow flex flex-col">
      <h2 class="text-4xl font-semibold mb-4 text-cyan-400">Enter your text:</h2>
      <textarea
        v-model="text"
        class="w-full text-3xl flex-grow p-6 bg-transparent border-4 border-yellow-400 rounded-lg focus:border-yellow-300 focus:outline-none resize-none text-yellow-100 placeholder-yellow-600"
        rows="3"
        placeholder="Type your text here..."
      ></textarea>
    </div>

    <!-- Browser Support Warning -->
    <div v-if="!isSupported" class="bg-transparent border-4 border-red-500 p-6 rounded-lg">
      <h3 class="text-2xl font-semibold mb-2 text-red-400">⚠️ Browser Not Supported</h3>
      <p class="text-xl text-red-300">Your browser does not support the Clipboard API. Please use a modern browser.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const text = ref('')
const { copy, copied, isSupported } = useClipboard({ source: text })

const copyText = () => {
  if (text.value.trim()) {
    copy()
  }
}
</script>

<style scoped>
/* Ensure text is readable in VR */
textarea {
  /* font-family: 'Kosugi Maru'; */
  line-height: 1.4;
}
div {
  font-family: 'Kosugi Maru'
}

/* Large touch targets for VR */
button, div[class*="cursor-pointer"] {
  min-height: 80px;
}
</style>