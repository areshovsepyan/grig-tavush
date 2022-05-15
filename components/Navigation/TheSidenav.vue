<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <SearchBar />
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item">
            <nuxt-link to="/contact-us">Հետադարձ Կապ</nuxt-link>
          </li>
          <li class="nav-item"><nuxt-link to="/about">Մեր Մասին</nuxt-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
  name: 'TheSidenav',
  components: {
    SearchBar
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: #002129;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  margin-top: 2.5rem !important;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
}

.nav-item a:hover,
.nav-item a:active {
  color: rgb(0 220 129);
}
</style>
