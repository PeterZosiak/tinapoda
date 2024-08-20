<template>
  <div> <!-- Menu -->
    <label for="menu-control" class="hamburger">
      <i class="hamburger__icon"></i>
      <i class="hamburger__icon"></i>
      <i class="hamburger__icon"></i>
    </label>
    <input type="checkbox" v-model="checked" id="menu-control" class="menu-control">
    <aside class="sidebar">
      <nav class="sidebar__menu">
        <nuxt-link @click="checked = !checked" to="/">ÚVOD</nuxt-link>
        <nuxt-link @click="checked = !checked" to="/o-mne">TINA PODA</nuxt-link>
        <nuxt-link @click="checked = !checked" to="/kontakt">KONTAKT</nuxt-link>
      </nav>
      <label for="menu-control" class="sidebar__close"></label>
    </aside>

  </div>
</template>
<script setup>
import { ref } from 'vue'
const checked = ref(false);


</script>