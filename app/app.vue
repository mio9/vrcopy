<template>
  <div class="flex justify-center items-center min-h-screen bg-slate-800">
    <NuxtRouteAnnouncer />
    <button class="bg-red-500 text-white px-4 py-2 rounded" @click="copy(text)">Fuck</button>
    <div v-if="isSupported">
      <button @click="copy(text)">
        <!-- by default, `copied` will be reset in 1.5s -->
        <span v-if="!copied">Copy</span>
        <span v-else>Copied!</span>
      </button>
      <p>Current copied: <code>{{ text || 'none' }}</code></p>
    </div>
    <p v-else>
      Your browser does not support Clipboard API
    </p>
    <br />
    <hr />
    <div>
      <Textarea v-model="text">asd</Textarea>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core';

const text = ref('')
const { copy, copied, isSupported } = useClipboard({ source: text })




</script>