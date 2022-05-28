<template>
  <div class="loading-page" :class="{ 'loading-page__active': getLoading }">
    <TheSpinner />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheSpinner from './TheSpinner.vue'

export default {
  components: {
    TheSpinner
  },

  computed: {
    ...mapGetters(['getLoading'])
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;

  display: none;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  z-index: 10000;

  background-color: rgba(0, 0, 0, 0.6);
}
.loading-page__active {
  display: flex;
}
</style>
