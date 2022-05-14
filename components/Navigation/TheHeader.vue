<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <img class="logo-icon" src="/favicon.ico" alt="">
        <nuxt-link to="/">Գեղեցիկ Տավուշ</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/contact-us">Հետադարձ Կապ</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">Մեր Մասին</nuxt-link>
          </li>
          <li class="nav-item">
            <button class="search-button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                  stroke="#91adad"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'

export default {
  name: 'TheHeader',
  components: {
    TheSideNavToggle
  }
}
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 33, 41, 0.7);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo-icon {
  width: 40px;
  margin-right: 8px;
}

.logo a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: rgb(0 220 129);
}
.search-button {
  background-color: transparent;
  border: unset;
  cursor: pointer;
}
</style>
