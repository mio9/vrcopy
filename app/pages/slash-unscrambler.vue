<template>
  <div class="min-h-screen bg-black text-white p-8 flex flex-col font-sans">
    <!-- Action Buttons -->
    <div class="flex gap-4 mb-8">
      <!-- Copy Button -->
      <div
        class="bg-transparent border-4 border-cyan-400 hover:border-cyan-300 active:border-cyan-500 flex-1 cursor-pointer text-center py-8 rounded-lg transition-all duration-200 hover:bg-cyan-900/20"
        @click="copyUnscrambledText"
      >
        <h1 class="text-4xl font-bold text-cyan-400">
          <span v-if="!copied">📋 Copy</span>
          <span v-else class="text-yellow-400">✅ Copied！</span>
        </h1>
      </div>
      
      <!-- Go to Site Button -->
      <NuxtLink
        :to="unscrambledText"
        :class="[
          'flex-1 text-center py-8 rounded-lg transition-all duration-200 block',
          unscrambledText 
            ? 'bg-transparent border-4 border-green-400 hover:border-green-300 active:border-green-500 cursor-pointer hover:bg-green-900/20'
            : 'bg-transparent border-4 border-gray-600 cursor-not-allowed opacity-50 pointer-events-none'
        ]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 :class="[
          'text-4xl font-bold',
          unscrambledText ? 'text-green-400' : 'text-gray-500'
        ]">
          🌐 Go to Site
        </h1>
      </NuxtLink>
    </div>

    <!-- Large Text Input Area -->
    <div class="mb-8 flex-grow flex flex-col">
      <h2 class="text-4xl font-semibold mb-4 text-cyan-400">Enter URL with scrambled slashes:</h2>
      <textarea
        v-model="inputText"
        class="w-full text-3xl flex-grow p-6 bg-transparent border-4 border-yellow-400 rounded-lg focus:border-yellow-300 focus:outline-none resize-none text-yellow-100 placeholder-yellow-600"
        rows="3"
        placeholder="Paste your screwed URL with ⁄ characters here..."
      ></textarea>
    </div>

    <!-- Unscrambled Output -->
    <div v-if="unscrambledText" class="mb-8">
      <h3 class="text-3xl font-semibold mb-4 text-green-400">Unscrambled URL:</h3>
      <div class="w-full text-2xl p-6 bg-transparent border-4 border-green-400 rounded-lg text-green-100 break-all">
        {{ unscrambledText }}
      </div>
    </div>

    <!-- Browser Support Warning -->
    <div v-if="!isSupported" class="bg-transparent border-4 border-red-500 p-6 rounded-lg">
      <h3 class="text-2xl font-semibold mb-2 text-red-400">⚠️ Browser Not Supported</h3>
      <p class="text-xl text-red-300">Your browser does not support the Clipboard API. Please use a modern browser.</p>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useClipboard } from '@vueuse/core'

const inputText = ref('')
const { copy, copied, isSupported } = useClipboard()

const unscrambledText = computed(() => {
  if (!inputText.value) return ''
  return inputText.value.replace(/[⁄]/g, '/').replace(/˸/g, ':').replace(/＝/g, '=').replace(/？/g, '?').replace(/％/g, '%').replace(/＋/g, '+').replace(/․/g, '.')
})
const copyUnscrambledText = () => {
  if (unscrambledText.value.trim()) {
    copy(unscrambledText.value)
  }
}

</script>

<style scoped>
/* Ensure text is readable in VR */
textarea {
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
