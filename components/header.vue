<template>
  <div>
    <!-- Header -->
    <header class="ann-site-header">
      <div class="container">
        <div class="row align-items-center">
          <!-- Logo -->
          <div class="col col-md-4 col-sm-6 ann-site-logo-wrap">
            <nuxt-link to="/" class="ann-site-logo">
              <img src="/img/Tina_Poda_.webp" alt="Tina Poda" />
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
<script>
import SidebarMenu from '~/components/sidebar-menu.vue'
</script>