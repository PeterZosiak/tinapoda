import { GoogleMap, Marker } from "vue3-google-map";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GoogleMap)
  nuxtApp.vueApp.component('GoogleMap', GoogleMap)

  nuxtApp.vueApp.use(Marker)
  nuxtApp.vueApp.component('Marker', Marker)

  return {
    provide: {
      GoogleMap, Marker
    },
  }
})