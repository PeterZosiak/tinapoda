<template>
  <div>
    <!-- Header -->
    <header class="ann-site-header">
      <div class="container">
        <div class="row align-items-center">
          <!-- Logo -->
          <div class="col-6 col-md-4 ann-site-logo-wrap">
            <nuxt-link to="/" class="ann-site-logo">
              <img src="/img/logo-dark.png" alt="Tina Poda" />
            </nuxt-link>
          </div>
          <!-- Menu Burger -->
          <div class="col-6 col-md-8">
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