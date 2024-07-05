// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/style.css'],
  modules: ['@vesp/nuxt-fontawesome', 'nuxt-swiper'],

  fontawesome: {
    icons: {
      solid: ['cog'],
    }
  },

  compatibilityDate: '2024-07-03'
})