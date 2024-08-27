<template>

  <div>
    <NuxtLayout>
      <SpeedInsights />
      <Header></Header>
      <NuxtPage />
      <Footer></Footer>
    </NuxtLayout>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>