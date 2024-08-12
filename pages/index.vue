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
            <h2 class="headline">Tina Poda<span>ESTHETIC</span></h2>
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
            <h1>About Me</h1>
            <h3>Kosmetolog & Make-up Artist</h3>
            <p>Nulla molestie finibus dignissim. Nunc ultrices odio mauris fermentum, gravida varius dranex the celacinia. Proin dictum nisleu scelerisque risus feugiat the amet. Vestibulum condimentum sem non dui tempoeu. Aliquam non venenatis. Donec eget neque et nulla interdum iaculis seder.</p>
            <p class="ann-signature-dark"><img src="/img/signature.png" alt="Ann Martin"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Services />
</template>
