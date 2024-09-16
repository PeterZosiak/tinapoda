<script>
import Services from '~/components/services.vue'
</script>
<template>
  <div>
    <!-- Slider -->
    <div class="ann-slider-section">
      <div class="ann-profile-info">
        <div class="d-flex align-items-center w-100">
          <div class="mx-auto ann-profile-inner">
            <!-- <h2 class="headline">TINA PODA<span>Beauty expert na Krásu</span></h2> -->
            <img src="/img/Tina_Poda.webp" alt="Tina Poda signature">
          </div>
        </div>
      </div>
      <!-- Carousel -->
      <div class="owl-carousel ann-main-slider">
        <div class="slide-item" style="background-image: url(/img/portraits/1.webp);"></div>
      </div>
    </div>
  </div>

  <!-- About Me -->
  <section class="ann-about-section-home ann-about-inner-page bg-black">
    <div class="container">
      <div class="row ann-about-inner">
        <div class="col-md-8 offset-md-2 text-center">
          <div class="ann-about-info">
            <h1>Tina Poda</h1>
            <h3>Beauty expert na Krásu</h3>
            <p class="para">Celý můj život je propojen s krásou a péčí o pleť. Beauty oblasti se věnuji přes 20 let a postupně jsem vytvořila jedinečný přístup, kombinující rozsáhlé zkušenosti, prvotřídní produkty a inovativní techniky.</p>
            <p class="ann-signature-dark">
              <nuxt-link to="/o-mne" class="ann-btn"> Více
                <!-- <img src="/img/signature.png" alt="Tina Poda" /> -->
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Services />
</template>

<script setup>


import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  const logoElement = document.querySelector('.ann-site-logo');
  if (logoElement) {
    logoElement.style.display = 'none';
  }
});

onUnmounted(() => {
  const logoElement = document.querySelector('.ann-site-logo');
  if (logoElement) {
    logoElement.style.display = 'block';
  }
});

useHead({
  title: 'Tina Poda - Beauty expert na Krásu',
  description: 'Kosmetické procedury a autentické rituály, které napomáhá maximalizovat požitek z času věnovaného sobě. Váš Beauty expert na Krásu, již 20 let.', image: '/img/portraits/1.jpg',
  url: 'https://tinapoda.beauty/',
})

useSeoMeta({
  title: 'Tina Poda - Beauty expert na Krásu',
  description: 'Kosmetické procedury a autentické rituály, které napomáhá maximalizovat požitek z času věnovaného sobě. Váš Beauty expert na Krásu, již 20 let.', image: '/img/portraits/1.jpg',
  url: 'https://tinapoda.beauty/',
})

</script>
