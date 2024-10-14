<template>
  <div>
    <!-- About Me -->
    <section class="ann-about-section ann-about-inner-page">
      <div class="container">
        <div class="row ann-about-inner">
          <div class="col-md-4">
            <div class="img-wrapper">
              <img class="ann-about-img" src="/img/t1.webp" alt="Tina Poda – beauty expertka při péči o pleť" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="ann-about-info">
              <h2>Kdo je Tina Poda</h2>
              <p>
                Celý můj život je propojen s krásou a péčí o pleť. <strong>Beauty oblasti</strong> se věnuji přes 20 let a postupně jsem vytvořila jedinečný přístup, kombinující rozsáhlé zkušenosti, prvotřídní produkty a inovativní techniky. </p>
              <p>Kosmetické procedury doplňuji o <strong>autentické rituály</strong>, což napomáhá maximalizovat požitek z času věnovaného sobě. S klienty zároveň pracuji <strong>komplexně</strong> – od konzultace, přes individuální péči o pleť podle stavu pokožky, potřeby a sezónnosti až po motivaci k budování jejich vlastních (a správných) návyků. </p>

              <p>Kariéru jsem budovala v renomovaných kosmetických salonech na Slovensku a v Česku. Podílela jsem se na velkých projektech, zaškolování týmů a vytváření nových konceptů péče o pleť. Získala jsem certifikaci různých oblastí péče o pleť a vizážistiky. Léta jsem působila jako make-up artistka: líčila slovensko-český showbyznys, modelky na soutěžích krásy, fashion weecích a jiných významných příležitostech. </p>
              <p><strong>Dnes se starám o své ctěné klienty v srdci Vinohradů v Praze.</strong> <span> <nuxt-link class="strong-b" to="/kontakt">Zjistěte více o mých službách</nuxt-link> </span>.</p>
              <p>Zároveň mi je ctí být součástí vzdělávací akademie ALMAF BEAUTY a prodávat expertní zkušenosti i kolegyním v branži. </p>
              <p class="ann-signature-dark">
                <img src="/img/logo-dark.png" alt="Tina Poda – logo" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <hr>
      </div>
    </div>
    <Services />
  </div>
</template>

<script setup>
useHead({
  title: 'O Tina Poda – Váš Beauty Expert na Péči o Pleť a Kosmetologie',
  description: 'Poznejte mne - Tina Poda, zkušenou beauty expertku s více než 20 lety v kosmetologii. Specializuje se na autentické rituály, make-up a komplexní péči o pleť. Působí v Praze na Vinohradech a je členkou akademie ALMAF BEAUTY.',
  image: 'https://tinapoda.beauty/img/t1.jpg',
  url: 'https://tinapoda.beauty/o-mne',
})

useSeoMeta({
  keywords: 'Tina Poda, Beauty expert,Kosmetologie,Péče o pleť,Kosmetické procedury,Make- up artistka,Zdravé rituály pleti,ALMAF BEAUTY,Kosmetické salóny Praha,Certifikovaná vizážistka,Kurzy kosmetologie,Vinohrady Praha',
  title: 'O Tina Poda – Váš Beauty Expert na Péči o Pleť a Kosmetologie',
  description: 'Poznejte mne - Tina Poda, zkušenou beauty expertku s více než 20 lety v kosmetologii. Specializuje se na autentické rituály, make-up a komplexní péči o pleť. Působí v Praze na Vinohradech a je členkou akademie ALMAF BEAUTY.',
  image: 'https://tinapoda.beauty/img/t1.jpg',
  url: 'https://tinapoda.beauty/o-mne',
  ogTitle: 'O Tina Poda – Váš Beauty Expert na Péči o Pleť a Kosmetologie',
  ogDescription: 'Poznejte mne - Tina Poda, zkušenou beauty expertku s více než 20 lety v kosmetologii. Specializuje se na autentické rituály, make-up a komplexní péči o pleť. Působí v Praze na Vinohradech a je členkou akademie ALMAF BEAUTY.',
  ogImage: 'https://tinapoda.beauty/img/t1.jpg',
  ogUrl: 'https://tinapoda.beauty/o-mne',
  ogType: 'website',
})

</script>