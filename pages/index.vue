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
            <h2 class="headline">TINA PODA<span>Beauty expert na Krásu</span></h2>
          </div>
        </div>
      </div>
      <!-- Carousel -->
      <div class="owl-carousel ann-main-slider">
        <div class="slide-item" style="background-image: url(/img/portraits/1.jpg);"></div>
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
            <p>Celý môj život je prepojený s krásou a starostlivosťou o pleť. Beauty oblasti sa venujem cez 20 rokov a postupne som vytvorila jedinečný prístup, kombinujúci rozsiahle skúsenosti, prvotriedne produkty a inovatívne techniky.</p>
            <p class="ann-signature-dark">
              <nuxt-link to="/o-mne" class="ann-btn">... viac
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
