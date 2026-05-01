// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@nuxtjs/supabase'
  ],

  components: [
    { path: '~/components/ui', pathPrefix: false },
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components/sections', pathPrefix: false },
    '~/components'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: '/drafernandavet/',
    head: {
      title: 'Dra. Fernanda Moreno - Medicina Veterinária Integrativa',
      meta: [
        { name: 'description', content: 'Cuidado integral para animais: Acupuntura, Fisiatria, Comportamento e Reabilitação em São Paulo e região.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light'
  },

  // CP (Control Panel) rules for SPA mode
  routeRules: {
    '/cp/**': { ssr: false }
  },

  supabase: {
    redirect: false // Manual auth handling for CP
  }
})
