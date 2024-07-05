<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const loaded = ref(false);
    const navToggler = ref(null);
    const navbar = ref(null);

    const smoothScroll = (hash) => {
      window.scrollTo({
        top: document.querySelector(hash).offsetTop,
        behavior: 'smooth',
      });
    };

    const handleNavClick = (e) => {
      e.preventDefault();
      const hash = e.target.hash;
      smoothScroll(hash);
    };

    const handleNavToggle = () => {
      if (document.body.classList.contains('menu-open')) {
        navToggler.value.classList.remove('active');
        const menuItems = document.querySelectorAll('.ann-site-menu .ann-site-menu-inner > ul > li');
        menuItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove('is-show');
          }, index * 100);
        });
        setTimeout(() => {
          document.querySelector('.ann-site-menu').classList.remove('ann-site-menu-show');
        }, 800);
        document.body.classList.remove('menu-open');
      } else {
        document.querySelector('.ann-site-menu').classList.add('ann-site-menu-show');
        navToggler.value.classList.add('active');
        document.body.classList.add('menu-open');
        const menuItems = document.querySelectorAll('.ann-site-menu .ann-site-menu-inner > ul > li');
        menuItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('is-show');
          }, index * 100);
        });
      }
    };

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > 150) {
        if (!navbar.value.classList.contains('scrolled')) {
          navbar.value.classList.add('scrolled');
        }
      } else {
        if (navbar.value.classList.contains('scrolled')) {
          navbar.value.classList.remove('scrolled', 'sleep');
        }
      }
      if (st > 350) {
        if (!navbar.value.classList.contains('awake')) {
          navbar.value.classList.add('awake');
        }
      } else {
        if (navbar.value.classList.contains('awake')) {
          navbar.value.classList.remove('awake');
          navbar.value.classList.add('sleep');
        }
      }
    };

    onMounted(() => {
      loaded.value = true;
      navToggler.value = document.querySelector('.ann-js-ann-site-nav-toggle');
      navbar.value = document.querySelector('.ann-site-header');
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      loaded,
      navToggler,
      navbar,
      handleNavClick,
      handleNavToggle,
    };
  },
};


</script>