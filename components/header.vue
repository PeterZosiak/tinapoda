<template>
  <div>
    <!-- Header -->
    <header class="ann-site-header">
      <div class="container">
        <div class="row align-items-center">
          <!-- Logo -->
          <div class="col col-md-4 col-sm-6 ann-site-logo-wrap">
            <nuxt-link to="/" class="ann-site-logo">
              <img src="/img/logo-dark.webp" alt="Tina Poda Logo" />
            </nuxt-link>
          </div>
          <!-- Menu Burger -->
          <div class="col col-md-8 col-sm-6">
            <SidebarMenu />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  console.log('scrolling');
  const scroll = window.scrollY;
  const blackElement = document.querySelector('header');
  if (scroll > 50) {
    blackElement.classList.add('nav-scrolled');
  } else {
    blackElement.classList.remove('nav-scrolled');
  }
};

</script>