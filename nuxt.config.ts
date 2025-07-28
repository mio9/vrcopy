// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['reka-ui/nuxt', '@nuxtjs/tailwindcss'],
  // css: ['@/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3890
  }
})