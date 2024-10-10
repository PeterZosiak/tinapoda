<template>
  <div>
    <NuxtLayout>
      <SpeedInsights />
      <Header></Header>
      <NuxtPage />
      <CookieControl locale="cs" />
      <Footer></Footer>
    </NuxtLayout>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

useHead({

  link: [
    { rel: 'icon', type: 'image/png', href: 'favicon.ico', sizes: "48x48" },
    { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' },
    { rel: 'shortcut icon', href: 'favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
    { name: 'apple-mobile-web-app-title', content: 'Tina Poda - Beauty expert na krásu' },
    { rel: 'manifest', href: 'site.webmanifest' }
  ],
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { name: 'description', content: 'Tina Poda - Beauty expert na krásu' },
  //     { name: 'author', content: 'Tina Poda' },
  //     { name: 'keywords', content: 'Tina Poda, Beauty expert, kosmetika, kosmetička, kosmetička Praha' }]
})
</script>

<style>
.cookieControl__BarButtons button:nth-child(3) {
  /* Add your styles here */
  display: none !important;
}
</style>