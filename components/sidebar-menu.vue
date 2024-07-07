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
        <nuxt-link to="/">Úvod</nuxt-link>
        <nuxt-link to="/o-mne">Tina Poda</nuxt-link>
        <nuxt-link to="/sluzby">Služby</nuxt-link>
        <nuxt-link to="/bla-bla">Ceník</nuxt-link>
        <nuxt-link to="/kontakt">Kontakt</nuxt-link>
      </nav>
      <label for="menu-control" class="sidebar__close"></label>
    </aside>

  </div>
</template>