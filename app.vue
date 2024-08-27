<template>
  <div>
    <NuxtLayout>
      <Header></Header>
      <NuxtPage />
      <Footer></Footer>
    </NuxtLayout>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
</script>