// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/style.css'],
  modules: [
    'nuxt-gtag',
    ['nuxt-mail', {
      message: {
        from: '',
        to: 'tinapoda.beauty',
      },
      smtp: {
        service: 'gmail',
        auth: {
          user: 'tinapoda.beauty',
          pass: 'Tina123456',
        },
      },
    }],


    '@vesp/nuxt-fontawesome', ["@nuxtjs/google-fonts", {
      families: { 'Cormorant Garamond': '100..900', Montserrat: true }
    }], "@nuxt/image", "nuxt-mail", "nuxt-gtag"],
  image: {
    provider: "ipx"
  },
  plugins: ['~/plugins/vue3-google-map'],
  fontawesome: {
    icons: {
      solid: ['cog'],
    }
  },
  gtag: {
    id: 'G-3BEQBZNBTB'
  },

  runtimeConfig: {
    public: {
      GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY ?? 'SHIT'
    }
  },



  compatibilityDate: '2024-07-03'
})