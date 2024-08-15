// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['bootstrap/dist/css/bootstrap.min.css', '~/assets/css/style.css'],
  modules: [
    '@vesp/nuxt-fontawesome',
    "@nuxt/scripts",
    ["@nuxtjs/google-fonts", {
      families: { 'Cormorant Garamond': '100..900', Montserrat: true }
    }],
    "@nuxt/image"
  ],
  image: {
    provider: "ipx"
  },
  fontawesome: {
    icons: {
      solid: ['cog'],
    }
  },

  compatibilityDate: '2024-07-03'
})