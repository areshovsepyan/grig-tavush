<template>
  <div class="map-wrapper">
    <client-only>
      <l-map
        @click="mapEvent($event)"
        :zoom="map.zoom"
        :center="map.initCoord"
        :options="map.options"
      >
        <l-tile-layer :url="map.mapURL"></l-tile-layer>
        <l-marker
          v-for="(latLng, index) in coords"
          :key="index"
          :lat-lng="latLng"
        ></l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    mapEvent(event) {
      // add location to database
      console.log(event.latlng)
    }
  },
  computed: {
    ...mapGetters({ map: 'getMapOptions', coords: 'getPostsCoords' })
  }
}
</script>

<style scoped>
.map-wrapper {
  width: 68%;
  height: 100%;
  border: 1px solid #ccc;
  z-index: 0;
}
@media (min-width: 1024px) {
  .map-wrapper {
    width: 72%;
  }
}
</style>
