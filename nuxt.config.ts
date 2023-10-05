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
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    'nuxt-gtag',
    '@dargmuesli/nuxt-cookie-control',
  ],
  css: ['@/assets/css/main.css'],

  cookieControl: {
    barPosition: 'bottom-right',
    closeModalOnClickOutside: false,
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365,
    isControlButtonEnabled: true,
    isIframeBlocked: false,
    locales: ['en', 'de'],
    cookies: {
      necessary: [
        {
          name: {
            en: 'i18n',
            de: 'i18n',
          },
          description: {
            en: 'This cookie is necessary for the proper translation of the page.',
            de: 'Dieser Cookie ist für die einwandfreie übersetzung der Seite notwendig.',
          },
        },
        {
          name: {
            en: 'Viewport',
            de: 'Viewport',
          },
          description: {
            en: 'This cookie stores the viewport information and is necessary for resposive design.',
            de: 'Dieser Cookie speichert die Viewport-Informationen und ist für das Responsive Design der Seite erforderlich.',
          },
        },
        {
          name: {
            en: 'ncc_c | ncc_e',
            de: 'ncc_c | ncc_e',
          },
          description: {
            en: 'This cookies are necessary to mange all cookies.',
            de: 'Diese Cookies sind notwendig, um alle Cookies zu managen.',
          },
        },
      ],
      optional: [
        {
          name: {
            en: 'Google analytics',
            de: 'Google Analytics',
          },
          description: {
            en: 'This cookie helps me collect information about your interaction to constantly improve the website.',
            de: 'Dieser Cookie hilft mir dabei Informationen über Ihre Interaktion zu sammeln, um die Webseite stetig zu verbessern.',
          },
        },
      ],
    },
    localeTexts: {
      en: {
        save: 'Save',
        decline: 'Decline',
        declineAll: 'Decline all',
        manageCookies: 'Settings',
        bannerDescription:
          'I use my own cookies and third-party cookies so that this website can be displayed correctly.',
      },
      de: {
        save: 'Speichern',
        decline: 'Ablehnen',
        declineAll: 'Alle ablehnen',
        manageCookies: 'Einstellungen',
        bannerDescription:
          'Ich verwende eigene Cookies und Cookies von Drittanbietern, damit diese Webseite korrekt dargestellt werden kann.',
      },
    },
  },

  sitemap: {
    autoI18n: true,
    cacheTtl: 1000 * 60 * 60 * 24,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Hreflangs', select: 'count(xhtml)', width: '25%' },
    ],
  },

  gtag: {
    initialConsent: false,
  },

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
