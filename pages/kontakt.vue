<template>
  <div>
    <!-- Contact Me -->
    <section class="ann-page-section">
      <div class="container">
        <div class="col-md-8 offset-md-2">
          <div class="ann-page-content text-center">
            <h2>Kontakt</h2>
            <p>S láskou k vašej pleti<br>Tina Poda.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="ann-contact-section">
      <GoogleMap id="ann-contactMap" :api-key="GOOGLE_MAP_KEY" :center="{ lat: 50.07351020584064, lng: 14.46226088141675 }" :zoom="16">
        <Marker :options="{ position: { lat: 50.07351020584064, lng: 14.46226088141675 } }" />
      </GoogleMap>
      <div class="container">
        <div class="row ann-contact-wrap">
          <div class="col-md-6 xs-padding">
            <div class="ann-contact-info">
              <h3>Spojte sa s nami

              </h3>
              <p> Ak máte akékoľvek otázky, potrebujete poradiť, alebo by ste si chceli rezervovať termín či službu, neváhajte nás kontaktovať prostredníctvom formulára nižšie. Pre pohodlné a rýchle rezervácie môžete využiť aj náš <a class="reservio" href="https://www.reservio.cz/b/tina-poda-phyris-kosmetika" target="_blank"> rezervačný systém</a>, kde si jednoducho vyberiete termín, ktorý vám vyhovuje. Sme tu pre vás a tešíme sa na vašu návštevu!</p>
              <ul>
                <li><i class="ti-time"></i> Rezervácie na:&nbsp;<a class="reservio" href="https://www.reservio.cz/b/tina-poda-phyris-kosmetika" target="_blank">RESERVIO</a> </li>
                <li><i class="ti-location-pin"></i><a href="https://www.google.com/maps/place/Tina+Poda+-+Beauty+expert+na+Kr%C3%A1su/@50.0734784,14.4614938,19z/data=!3m1!4b1!4m6!3m5!1s0x470b936413fad519:0x126cc8d3441d1d3d!8m2!3d50.0734775!4d14.4621375!16s%2Fg%2F11w7mgczhn?entry=ttu" target="_blank"> Na Zájezdu 1945/16, Vinohrady 10, 101 00 Praha 10</a></li>
                <li><i class="ti-mobile"></i><a href="tel:00420704794461">+420 704 794 461</a></li>
                <li><i class="ti-email"></i><a href="mailto:tinapoda.beauty@gmail.com">tinapoda.beauty@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 xs-padding">
            <div class="ann-contact-form">
              <h3>Kontaktný formulár</h3>
              <p>Neváhajte nás kontaktovať ohľadom akýchkoľvek otázok a doprajte si profesionálnu starostlivosť, ktorú si zaslúžite.</p>
              <form id="contact-form" @submit.prevent="handleSubmit" class="form-horizontal">
                <div class="form-group colum-row row">
                  <div class="col-sm-6">
                    <input type="text" autocomplete="name" id="name" name="name" class="form-control" placeholder="Meno" required>
                  </div>
                  <div class="col-sm-6">
                    <input type="email" autocomplete="email" id="email" name="email" class="form-control" placeholder="Email" required>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <textarea id="message" name="message" cols="30" rows="5" class="form-control message" placeholder="Vaša správa" required></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div v-if="isSubmitedSuccess" class="alert alert-success contact__msg" role="alert">
                      Vaša správa bola úspešne odoslaná.
                    </div>
                    <div v-if="isSubmitedError" class="alert alert-danger contact__msg" role="alert">
                      Nastala chyba pri odosielaní správy.
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12 py-4">
                    <button class="ann-btn2" type="submit">Odoslať</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mail = useMail()

const config = useRuntimeConfig();
const GOOGLE_MAP_KEY = config.public.GOOGLE_MAP_KEY;

let isSubmitedSuccess = ref(false);
let isSubmitedError = ref(false);

const handleSubmit = (event) => {
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;


  try {
    mail.send({
      from: `${name} <${email}>`,
      subject: 'Správa z kontaktného formulára na webe Tina Poda Beauty',
      text: message,
    })
    form.reset();
    isSubmitedSuccess.value = true;
  } catch (error) {
    console.error('Error sending mail', error);
    isSubmitedError.value = false;
  }
};


</script>