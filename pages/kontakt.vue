<template>
  <div>
    <!-- Contact Me -->
    <section class="ann-page-section">
      <div class="container">
        <div class="col-md-8 offset-md-2">
          <div class="ann-page-content text-center">
            <h2>Kontakt</h2>
            <p>Please reach out to me with your inquiry!</p>
          </div>
        </div>
      </div>
    </section>
    <section class="ann-contact-section">
      <div id="ann-contactMap"></div>
      <div class="container">
        <div class="row ann-contact-wrap">
          <div class="col-md-6 xs-padding">
            <div class="ann-contact-info">
              <h3>Get in touch</h3>
              <p>Nunc ultrices odio mauris fermentum, gravida varius dranex the celacinia. Proin dictum nisleu scelerisque risus feugiat the amet. Vestibulum con dimentum sem non dui tempoeu.</p>
              <ul>
                <li><i class="ti-location-pin"></i> 101 East San Fernando St., San Jose, CA 95112</li>
                <li><i class="ti-mobile"></i> +1 800 123 1238</li>
                <li><i class="ti-email"></i> hi@annmartin.com</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 xs-padding">
            <div class="ann-contact-form">
              <h3>Contact Form</h3>
              <p>Please reach out to me with your inquiry! I service all of California.</p>
              <form action="#" method="post" class="form-horizontal">
                <div class="form-group colum-row row">
                  <div class="col-sm-6">
                    <input type="text" id="name" name="name" class="form-control" placeholder="Name" required>
                  </div>
                  <div class="col-sm-6">
                    <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
                  </div>
                </div>
                <div class="form-group colum-row row">
                  <div class="col-sm-12">
                    <input type="text" id="text" name="text" class="form-control" placeholder="Service of interest" required>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <textarea id="message" name="message" cols="30" rows="5" class="form-control message" placeholder="Enter your message" required></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-12">
                    <button class="ann-btn2" type="submit">Submit</button>
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