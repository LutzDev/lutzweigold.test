// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      'projects/portfolio': {
        en: '/projects/portfolio',
        de: '/projekte/portfolio',
      },
      'projects/xtrym': {
        en: '/projects/xtrym',
        de: '/projekte/xtrym',
      },
      'projects/didem': {
        en: '/projects/didem',
        de: '/projekte/didem',
      },
      'projects/pleta': {
        en: '/projects/pleta',
        de: '/projekte/pleta',
      },
      'projects/smaract': {
        en: '/projects/smaract',
        de: '/projekte/smaract',
      },
      'projects/darkpattern': {
        en: '/projects/darkpattern',
        de: '/projekte/darkpattern',
      },
      'projects/fuwacar': {
        en: '/projects/fuwacar',
        de: '/projekte/fuwacar',
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
