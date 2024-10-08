// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/style.css'],
  modules: ['nuxt-gtag', ['nuxt-mail', {
    message: {
      to: process.env.GMAIL_USER,
    },
    smtp: {
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,

      },
    },
  }], '@vesp/nuxt-fontawesome', ["@nuxtjs/google-fonts", {
    families: { 'Cormorant Garamond': '100..900', Montserrat: true }
  }], "@nuxt/image", "nuxt-mail", "nuxt-gtag", "@nuxtjs/sitemap", '@dargmuesli/nuxt-cookie-control', '@dargmuesli/nuxt-cookie-control'],
  image: {
    provider: "ipx"
  },
  plugins: ['~/plugins/vue3-google-map'],
  fontawesome: {
    icons: {
      solid: ['cog'],
      brands: ['facebook', 'instagram', 'twitter', 'linkedin']
    }
  },
  gtag: {
    id: 'G-3BEQBZNBTB'
  },

  site: {
    url: 'https://tinapoda.beauty',
    name: 'TINA PODA - Beauty expert na Krásu'
  },
  runtimeConfig: {
    public: {
      GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY ?? 'SHIT'
    }
  },

  cookieControl: {
    isControlButtonEnabled: false,
    locales: ['cs'],
    localeTexts: {

    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'cs',
      },
      charset: 'utf-8',
    }
  },



  compatibilityDate: '2024-07-03'
})