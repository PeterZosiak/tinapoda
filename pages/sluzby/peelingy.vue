<template>
  <div>
    <!-- Portfolio -->
    <section class="ann-portfolio-page-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="img-wrapper mb-5">
              <img class="ann-about-img img-fluid" src="/img/s211.webp" alt="Tina Poda - Peelings">
            </div>
          </div>
          <div class="col-md-6 col-sm-12">

            <h2 class="mb-5 text-center">ČIŠTĚNÍ PLETI a PEELING</h2>
            <span class="strong-b">Komplexní kosmetická konzultace v ceně každé procedury</span>
            <ul class="services">
              <li>Detailní analýza typu a stavu pleti</li>
              <li>Posouzení a doporučení domácí péče o pleť</li>
              <li>Výběr nejvhodnějších kosmetických produktů na míru vaší pleti</li>
              <li>Profesionální doporučení od zkušené kosmetičky pro dlouhodobě krásnou a zdravou pleť</li>
            </ul>
            <div class="mb-5"></div>

            <ServiceItem title="Hloubkové čištění pleti s ALGINAT MASKOU" price="2.200,- Kč" description="" />
            <ServiceItem title="SKIN RESULTS AHA “EXPERT" price="1.900,-Kč" description="Regulace tvorby mazu,40% AHA , 60% AHA kyseliny" />
            <ServiceItem title="DERMA CONTROL" price="2.200,-Kč" description="Mastní, aknózní a problematická pleť" />
            <ServiceItem title="PRX-T33 Biorevitalizace" price="2.300,-Kč" description="Revitalizační peeling nové generace-obličej" />
            <ServiceItem title="PRX-T33 Biorevitalizace" price="3.700,-Kč" description="Revitalizační peeling nové generace. Obličej, krk, dekolt" />
            <!-- <ServiceItem title="" price="" description="" />
            <ServiceItem title="" price="" description="" />
            <ServiceItem title="" price="" description="" />
            <ServiceItem title="" price="" description="" />
            <ServiceItem title="" price="" description="" /> -->
          </div>
        </div>
        <div class="row">
          <div class="m-5"></div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import ServiceItem from '~/components/service-item.vue';
useHead({
  title: 'Luxusní Kosmetická Ošetření pro Hydrataci a Rejuvenaci | Tina Poda',
  description: 'Objevte jedinečná kosmetická ošetření od Tiny Pody, která kombinují intenzivní hydrataci, protivráskovou péči a relaxační rituály. Vaše pleť bude svěží, rozzářená a mladistvá díky inovativním technologiím kyseliny hyaluronové, retinolu a relaxačním masážím.',
  image: '/img/s111.png',
  url: 'https://tinapoda.beauty/sluzby/peelingy',

})

useSeoMeta({
  title: 'Luxusní Kosmetická Ošetření pro Hydrataci a Rejuvenaci | Tina Poda',
  description: 'Objevte jedinečná kosmetická ošetření od Tiny Pody, která kombinují intenzivní hydrataci, protivráskovou péči a relaxační rituály. Vaše pleť bude svěží, rozzářená a mladistvá díky inovativním technologiím kyseliny hyaluronové, retinolu a relaxačním masážím.',
  image: '/img/s111.png',
  url: 'https://tinapoda.beauty/sluzby/peelingy',
})

</script>