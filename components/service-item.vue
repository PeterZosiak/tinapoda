<template>
  <div>
    <div class="service-item mb-4 px-3">
      <div class="row">
        <div class="col">
          <h4 class="text-start px-3">{{ title }} </h4>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="mb-1 p-3 text-start" v-html="description"></p>
          <p class="px-3 ">
            <span class="price text-start"><strong>{{ price }}</strong></span>
            <span v-if="price2" class="time"><br><strong>{{ price2 }}</strong></span>
            <nuxt-link to="/kontakt" class="float-end ann-post-meta">Objednat se <span class="ti-shift-right-alt"></span></nuxt-link>
          </p>
        </div>
      </div>
      <hr v-if="!isLast">
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
    },
    isLast: {
      type: Boolean,
      required: false
    }
  }
}
</script>