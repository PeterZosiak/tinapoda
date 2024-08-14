<template>
  <div> <!-- Menu -->
    <label for="menu-control" class="hamburger">
      <i class="hamburger__icon"></i>
      <i class="hamburger__icon"></i>
      <i class="hamburger__icon"></i>
    </label>
    <input type="checkbox" id="menu-control" class="menu-control">
    <aside class="sidebar">
      <nav class="sidebar__menu">
        <nuxt-link to="/">ÚVOD</nuxt-link>
        <nuxt-link to="/o-mne">TINA PODA</nuxt-link>
        <!-- <nuxt-link to="/sluzby">SLUŽBY</nuxt-link>
        <nuxt-link to="/bla-bla">CENNÍK</nuxt-link> -->
        <nuxt-link to="/kontakt">KONTAKT</nuxt-link>
      </nav>
      <label for="menu-control" class="sidebar__close"></label>
    </aside>

  </div>
</template>