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
useHead({

  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.ico', sizes: "48x48" },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { name: 'apple-mobile-web-app-title', content: 'Tina Poda - Beauty expert na krásu' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
})
</script>

<style>
.cookieControl__BarButtons button:nth-child(3) {
  /* Add your styles here */
  display: none !important;
}
</style>