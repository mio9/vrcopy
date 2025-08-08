import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['reka-ui/nuxt', '@nuxt/fonts'],
  fonts: {
    provider: 'google',
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3890
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})