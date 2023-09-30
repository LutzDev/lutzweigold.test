// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'noindex, noarchive, nofollow' },
      ],
    },
  },*/

  devtools: {
    enabled: false,
  },
  ssr: true,
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-viewport',
  ],
  css: ['@/assets/css/main.css'],

  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/img/**': { headers: { 'cache-control': `public,max-age=31536000},s-maxage=31536000` } },
      '/_nuxt/**': { headers: { 'cache-control': `public,max-age=31536000,s-maxage=31536000` } },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  /*  routeRules: {
    '/': { redirect: '/en-CA' },
  }, */

  image: {
    provider: 'netlify',
    netlify: {
      baseURl: process.env.IMAGES_URL,
    },
  },

  i18n: {
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en',
      redirectOn: 'root',
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      cookieSecure: false,
    },
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
      imprint: {
        en: '/imprint',
        de: '/impressum',
      },
      privacy: {
        en: '/privacy',
        de: '/datenschutz',
      },
      'projects/xtrym': {
        en: '/projects/xtrym',
        de: '/projekte/xtrym',
      },
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
    '@Types': '../types',
  },
});
