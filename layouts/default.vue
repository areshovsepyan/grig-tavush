<template>
  <div>
    <LoadingBar />
    <TheHeader @sidenavToggle="toggleSidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheFooter from '@/components/Navigation/TheFooter.vue'
import LoadingBar from '@/components/Shared/LoadingBar.vue'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    LoadingBar
  },
  data() {
    return {
      displaySidenav: false
    }
  },
  methods: {
    toggleSidenav() {
      this.displaySidenav = !this.displaySidenav
    }
  }
}
</script>

<style></style>
