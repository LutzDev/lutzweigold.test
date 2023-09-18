// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  css: ['@/assets/css/main.css'],

  /*  routeRules: {
    '/': { redirect: '/en-CA' },
  }, */

  i18n: {
    customRoutes: 'config',
    pages: {
      work: {
        en: '/work',
        de: '/projekte',
      },
      skill: {
        en: '/skill',
        de: '/skill',
      },
      contact: {
        en: '/contact',
        de: '/kontakt',
      },
      /*      'projects/[slug]': {
        en: 'projects/[slug]',
        de: 'projekte/[slug]',
      }, */
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.ts',
      },
      {
        code: 'de',
        name: 'German',
        iso: 'de-DE',
        file: 'de-DE.ts',
      },
    ],
    defaultLocale: 'de',
    lazy: true,
    strategy: 'prefix',
    langDir: 'lang',
    vueI18n: './i18n.config.ts',
  },

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
