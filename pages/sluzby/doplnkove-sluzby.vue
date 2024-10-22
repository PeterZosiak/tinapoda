<template>
  <div>
    <!-- Portfolio -->
    <section class="ann-portfolio-page-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="img-wrapper mb-5">
              <img class="ann-about-img img-fluid" src="/img/s311.webp" alt="Exkluzivní doplňkové kosmetické procedury">
            </div>
          </div>
          <div class="col-md-6 col-sm-12">

            <h2 class="mb-5 text-center">Doplňkové služby - Krása tkví v detailech
            </h2>
            <div class="px-3">
              <h3>DEPILACE VOSKEM
              </h3>
            </div>
            <div class="mb-2"></div>
            <ServiceItem title="Waxing záda celá" price="1.090,-Kč" />
            <ServiceItem title="Waxing nohy po kolena" price="590,-Kč" />
            <ServiceItem :is-last="true" title="Waxing celé nohy" price="890,-Kč" />

            <div class="px-3">
              <h3>DEPILACE CUKROVOU PASTOU
              </h3>
            </div>
            <div class="mb-2"></div>
            <ServiceItem title="Horní ret" price="250,-Kč" />
            <ServiceItem title="Brada" price="250,-Kč" />
            <ServiceItem title="Kotlety" price="od 250 do 450,-Kč" />
            <ServiceItem title="Celý obličej" price="700,-Kč" />
            <ServiceItem title="Podpaží" price="490,-Kč" />
            <ServiceItem :is-last="true" title="Brazilská depilace" price="1.400,-Kč" />

            <div class="px-3">
              <h3>OBOČÍ
              </h3>
            </div>
            <div class="mb-2"></div>
            <ServiceItem title="Barvení obočí" price="250,-Kč" />
            <ServiceItem title="Úprava obočí" price="od 300 do 600,-Kč" />
            <ServiceItem :is-last="true" title="Laminace obočí s barvením" price="1.290,-Kč" />
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <hr>
      </div>
    </div>
    <Services :is-heading="false" />
  </div>
</template>

<script setup>
useHead({
  title: 'Doplňkové Služby – Exkluzivní Kosmetické Procedury | Tina Poda - Beauty expert na krásu',
  image: 'https://tinapoda.beauty/img/s311.jpg',
  url: 'https://tinapoda.beauty/sluzby/doplnkove-sluzby',
  description: 'Objevte exkluzivní doplňkové služby od Tina Poda Beauty expert na krásu. Přizpůsobte si péči o pleť na míru s profesionálními extra procedurami pro maximální efekt a krásu. Kontaktujte nás ještě dnes a zažijte luxusní kosmetické ošetření!'
});

useSeoMeta({
  keywords: 'Doplňkové služby,Exkluzivní kosmetické procedury,Profesionální extra služby,Péče o pleť na míru,Maximální efekt a krása,Individuální kosmetické ošetření,Luxusní kosmetické služby,Přizpůsobená péče o pleť,Extra kosmetické procedury',
  image: 'https://tinapoda.beauty/img/s311.jpg',
  url: 'https://tinapoda.beauty/sluzby/doplnkove-sluzby',
  title: 'Doplňkové Služby – Exkluzivní Kosmetické Procedury | Tina Poda - Beauty expert na krásu',
  description: 'Objevte exkluzivní doplňkové služby od Tina Poda Beauty expert na krásu. Přizpůsobte si péči o pleť na míru s profesionálními extra procedurami pro maximální efekt a krásu. Kontaktujte nás ještě dnes a zažijte luxusní kosmetické ošetření!',
  ogTitle: 'Doplňkové Služby – Exkluzivní Kosmetické Procedury | Tina Poda - Beauty expert na krásu',
  ogDescription: 'Objevte exkluzivní doplňkové služby od Tina Poda Beauty expert na krásu. Přizpůsobte si péči o pleť na míru s profesionálními extra procedurami pro maximální efekt a krásu. Kontaktujte nás ještě dnes a zažijte luxusní kosmetické ošetření!',
  ogUrl: 'https://tinapoda.beauty/sluzby/doplnkove-sluzby',
  ogType: 'website',
  ogImage: 'https://tinapoda.beauty/img/s311.jpg',
  ogSiteName: 'Tina Poda | Beauty expert na krásu',
  ogLocale: 'cs_CZ',

});
</script>
