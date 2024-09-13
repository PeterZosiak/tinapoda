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
          <p class="text-center"><span class="price">{{ price }}</span> / <span class="time">{{ time }}</span></p>
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
    time: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>