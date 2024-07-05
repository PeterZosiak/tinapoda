<script setup lang="ts">

</script>
<template>
  <div>

    <!-- Menu -->


    <!-- Header -->
    <header class="ann-site-header">
      <div class="container">
        <div class="row align-items-center">
          <!-- Logo -->
          <div class="col-6 col-md-4 ann-site-logo-wrap">
            <a href="index.html" class="ann-site-logo"><img src="/img/logo-dark.png" alt="ANN"></a>
          </div>
          <!-- Menu Burger -->
          <div class="col-6 col-md-8">

            <label for="menu-control" class="hamburger">
              <i class="hamburger__icon"></i>
              <i class="hamburger__icon"></i>
              <i class="hamburger__icon"></i>
            </label>

            <input type="checkbox" id="menu-control" class="menu-control">

            <aside class="sidebar">

              <nav class="sidebar__menu">
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Services</a>
                <a href="">Products</a>
                <a href="">Contact</a>
              </nav>
              <label for="menu-control" class="sidebar__close"></label>


            </aside>



          </div>

        </div>
      </div>
    </header>

    <!-- Slider -->
    <div class="ann-slider-section">
      <div class="ann-profile-info">
        <div class="d-flex align-items-center w-100">
          <div class="mx-auto ann-profile-inner">
            <h2>TINA PODA<span>ESTHETIC</span></h2>
          </div>
        </div>
      </div>
      <!-- Carousel -->
      <div class="owl-carousel ann-main-slider">
        <div class="slide-item" style="background-image: url(/img/portraits/2.jpg);"></div>
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
            <h3>Hi, I'm Ann a Professional Makeup Artist</h3>
            <p>Nulla molestie finibus dignissim. Nunc ultrices odio mauris fermentum, gravida varius dranex the celacinia. Proin dictum nisleu scelerisque risus feugiat the amet. Vestibulum condimentum sem non dui tempoeu. Aliquam non venenatis. Donec eget neque et nulla interdum iaculis seder.</p>
            <p class="ann-signature-dark"><img src="/img/signature.png" alt="Ann Martin"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer class="ann-footer-section text-center">
    <div class="container">
      <!-- Social Link -->
      <div class="row">
        <div class="col-md-12 text-center mb-20">
          <div class="text-center">
            <ul class="ann-social-link">
              <li><a href="index.html#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="index.html#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="index.html#"><i class="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Logo -->
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="brand"><img src="/img/logo-light.png" alt="ANN"></div>
        </div>
      </div>
      <!-- Copyright -->
      <div class="row">
        <div class="col-md-12">
          <p class="copright">2021 © Ann Martin. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
