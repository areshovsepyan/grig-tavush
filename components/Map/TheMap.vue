<template>
  <div class="map-wrapper">
    <client-only>
      <l-map
        :zoom="map.zoom"
        :center="map.initCoord"
        :options="map.options"
      >
        <l-tile-layer :url="map.mapURL"></l-tile-layer>
        <l-marker
          v-for="(post, index) in coords"
          :ref="`post${post[2]}`"
          :key="index"
          :lat-lng="post[0]"
        >
          <l-popup :content="post[1]"></l-popup>
        </l-marker>
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
  computed: {
    ...mapGetters({
      map: 'getMapOptions',
      coords: 'getPostsCoords',
      singleID: 'getActiveId'
    })
  },
  mounted() {
    setTimeout(() => {
      if (this.singleID) {
        this.$refs[`post${this.singleID}`][0].mapObject.openPopup()
      }
    }, 1000)
  },
  watch: {
    singleID(value) {
      this.$refs[`post${value}`][0].mapObject.openPopup()
    }
  },
  beforeDestroy() {
    this.$store.commit('RESET_INIT_COORDS')
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
