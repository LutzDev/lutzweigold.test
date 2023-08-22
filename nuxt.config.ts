// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image', 'nuxt-icon', '@pinia/nuxt'],
  css: ['@/assets/css/main.css'],
  alias: {
    '@Types': './types',
  },
});
