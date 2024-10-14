<template>
  <div>
    <!-- Services -->
    <section class="ann-homepage-services-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center mb-40">
            <h2>Portfolio</h2>
            <p>Mé služby zahrnují komplexní kosmetické a zážitkové ošetření pleti, chemické peelingy, líčení a školení pro Kosmetičky.
              <br>Prohlédněte si mé portfolio a přesvědčte se o kvalitě mých služeb.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 single-item">
            <nuxt-link to="sluzby/ritualy">
              <div class="item e2">
                <img src="/img/ritualy.webp" alt="Tina Poda provádí PHYRIS rituál na zdravou pleť" />
                <div class="text2">
                  <h3>PHYRIS rituals</h3>
                  <p>PHYRIS rituály a kosmetické ošetření</p>
                </div>
                <div class="line top"></div>
                <div class="line bottom"></div>
                <div class="line left"></div>
                <div class="line right"></div>
              </div>
            </nuxt-link>
          </div>

          <div class="col-md-6 single-item">
            <nuxt-link to="sluzby/peelingy">
              <div class="item e2">
                <img src="/img/peelingy.webp" alt="Výsledek MEDICAL chemického peelingu od Tina Poda" />
                <div class="text2">
                  <h3>MEDICAL peelings</h3>
                  <p>MEDICAL chemické peelingy</p>
                </div>
                <div class="line top"></div>
                <div class="line bottom"></div>
                <div class="line left"></div>
                <div class="line right"></div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-6 single-item">
            <nuxt-link to="sluzby/doplnkove-sluzby">
              <div class="item e2">
                <img src="/img/doplnkove.webp" alt="Doplňkové služby od Tina Poda" />
                <div class="text2">
                  <h3>Doplnkové služby</h3>
                  <p>DEPILACE a OBOČÍ
                  </p>
                </div>
                <div class="line top"></div>
                <div class="line bottom"></div>
                <div class="line left"></div>
                <div class="line right"></div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-6 single-item">
            <nuxt-link to="sluzby/kurzy">
              <div class="item e2">
                <img src="/img/kurzy.webp" alt="Kurz dermaplaning vedený odbornicí Tina Poda" />
                <div class="text2">
                  <h3>Kurz DERMAPLANING </h3>
                  <p>Osobní kurzy líčení</p>
                </div>
                <div class="line top"></div>
                <div class="line bottom"></div>
                <div class="line left"></div>
                <div class="line right"></div>
              </div>
            </nuxt-link>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>