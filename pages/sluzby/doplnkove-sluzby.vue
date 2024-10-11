<template>
  <div>
    <!-- Portfolio -->
    <section class="ann-portfolio-page-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="img-wrapper mb-5">
              <img class="ann-about-img img-fluid" src="/img/s311.webp" alt="Tina Poda - Peelings">
            </div>
          </div>
          <div class="col-md-6 col-sm-12">

            <h2 class="mb-5 text-center">Doplňkové služby
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
  </div>
</template>
