// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/image', 'nuxt-icon', '@pinia/nuxt'],
  css: ['@/assets/css/main.css'],
  pinia: {
    autoImports: ['storeToRefs', 'defineStore', ['defineStore', 'definePiniaStore']],
  },

  imports: {
    dirs: ['stores'],
  },

  alias: {
    '@Types': './types',
  },
});
