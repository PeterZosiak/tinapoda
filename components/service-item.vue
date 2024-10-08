<template>
  <div>
    <div class="service-item mb-4 ">
      <div class="row">
        <div class="col">
          <h4 class="text-center">{{ title }} </h4>

        </div>
        <!-- <div class="col-md-4 col-sm-12 float-end service-delimiter"><span class="float-end">{{ price }} <span>/ {{ time }}</span></span></div> -->
      </div>
      <div class="row">
        <div class="col-12">
          <p class="mb-1 p-3 text-center" v-html="description"></p>
          <p class="text-center"><span class="price"><strong>{{ price }}</strong></span> <br><span class="time"><strong>{{ price2 }}</strong></span></p>
          <p class="text-center"> <nuxt-link to="/kontakt" class="text-center ann-post-meta">Objednat se <span class="ti-shift-right-alt"></span></nuxt-link></p>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    price2: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>