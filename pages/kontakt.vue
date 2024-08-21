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
      <GoogleMap id="ann-contactMap" api-key="AIzaSyBJorqFhqOXO-fhHgmhH2Ghk_6fhHBpyoA" :center="{ lat: 50.07351020584064, lng: 14.46226088141675 }" :zoom="16">
        <Marker :options="{ position: { lat: 50.07351020584064, lng: 14.46226088141675 } }" />
      </GoogleMap>
      <div class="container">
        <div class="row ann-contact-wrap">
          <div class="col-md-6 xs-padding">
            <div class="ann-contact-info">
              <h3>Get in touch</h3>
              <p>Nunc ultrices odio mauris fermentum, gravida varius dranex the celacinia. Proin dictum nisleu scelerisque risus feugiat the amet. Vestibulum con dimentum sem non dui tempoeu.</p>
              <ul>
                <li><i class="ti-location-pin"></i><a href="https://www.google.com/maps/place/Tina+Poda+-+Beauty+expert+na+Kr%C3%A1su/@50.0734784,14.4614938,19z/data=!3m1!4b1!4m6!3m5!1s0x470b936413fad519:0x126cc8d3441d1d3d!8m2!3d50.0734775!4d14.4621375!16s%2Fg%2F11w7mgczhn?entry=ttu" target="_blank"> Na Zájezdu 1945/16, Vinohrady 10, 101 00 Praha 10</a></li>
                <li><i class="ti-mobile"></i><a href="tel:00420704794461">+420 704 794 461</a></li>
                <li><i class="ti-email"></i><a href="mailto:tinapoda.beauty@gmail.com">tinapoda.beauty@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 xs-padding">
            <div class="ann-contact-form">
              <h3>Kontaktný formulár</h3>
              <p>Please reach out to me with your inquiry! I service all of California.</p>
              <form action="#" method="post" class="form-horizontal">
                <div class="form-group colum-row row">
                  <div class="col-sm-6">
                    <input type="text" id="name" name="name" class="form-control" placeholder="Meno" required>
                  </div>
                  <div class="col-sm-6">
                    <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <textarea id="message" name="message" cols="30" rows="5" class="form-control message" placeholder="Vaša správa" required></textarea>
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
