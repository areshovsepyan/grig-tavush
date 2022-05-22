<template>
  <div class="map-page">
    <MapSideBar />
    <TheMap />
  </div>
</template>

<script>
import MapSideBar from '../../components/Map/MapSideBar.vue'
import TheMap from '../../components/Map/TheMap.vue'

export default {
  components: {
    MapSideBar,
    TheMap
  },
  async fetch({ store }) {
    if (store.data === undefined) {
      await store.dispatch('fetchLandingPageData')
    }
  }
}
</script>

<style scoped>
.map-page {
  display: flex;
  justify-content: space-around;
  width: 98vw;
  height: 88vh;
  margin: 1rem auto;
}
</style>
