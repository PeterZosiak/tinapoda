<template>
  <div>

    <div class="ann-contact-form">
      <h3>Kontaktní formulář</h3>
      <p>Neváhejte nás kontaktovat ohledně jakýchkoli otázek a dopřejte si profesionální péči, kterou si zasloužíte.</p>
      <form id="contact-form" @submit.prevent="handleSubmit" class="form-horizontal">
        <div class="form-group colum-row row">
          <div class="col-sm-6">
            <input type="text" autocomplete="name" id="name" name="name" class="form-control" placeholder="Jméno" required>
          </div>
          <div class="col-sm-6">
            <input type="email" autocomplete="email" id="email" name="email" class="form-control" placeholder="Email" required>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-12">
            <textarea id="message" name="message" cols="30" rows="5" class="form-control message" placeholder="Vaše zpráva" required></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div v-if="isSubmitedSuccess" class="alert alert-success contact__msg" role="alert">
              Vaše zpráva byla úspěšně odeslána.
            </div>
            <div v-if="isSubmitedError" class="alert alert-nebezpečí contact__msg" role="alert">
              Nastala chyba při odesílání zprávy.
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-12 py-4">
            <button class="ann-btn2" type="submit">Odeslat</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const mail = useMail()



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