<template>
  <div>
    <div class="service-item mb-5 ">
      <div class="row service-delimiter">
        <div class="col-md-8 col-sm-12">
          <h4>{{ title }}</h4>
        </div>
        <div class="col-md-4 col-sm-12 float-end"><span class="float-end">{{ price }} <span>/ {{ time }}</span></span></div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="mt-2">{{ description }}
          </p>
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