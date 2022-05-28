<template>
  <div class="sidebar-wrapper">
    <div class="post-list">
      <a
        @click="getPostLocation(latlng, id)"
        class="post-list-item"
        :class="{ active: activeID === id }"
        v-for="{ id, title, latlng } in data.posts"
        :key="id"
      >
        <span>#</span> {{ title }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations({ setView: 'SET_VIEW_COORDS' }),
    getPostLocation(coords, id) {
      this.setView(coords)
      this.$store.commit('SET_SINGLE_ID', id)
    }
  },
  computed: {
    ...mapGetters({ data: 'getLandingPageData', singleID: 'getActiveId' }),
    activeID() {
      return this.singleID
    }
  }
}
</script>

<style scoped>
.sidebar-wrapper {
  width: 237px;
  height: 100%;
  background-color: #032a35;
  border: 1px solid rgba(204, 204, 204, 0.8);
}

.post-list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  height: 35px;
  border: 1px solid #ccc;
  margin: 1rem 1rem 0;
  cursor: pointer;
}

a,
span {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  opacity: 0.8;
  margin-left: 0.35rem;
}

span {
  margin-right: 0.3rem;
  opacity: 1;
  color: #00dc81;
}

a:hover,
a:active {
  opacity: 1;
  color: #00dc81;
}
.active {
  opacity: 1;
  color: #00dc81;
}
</style>
