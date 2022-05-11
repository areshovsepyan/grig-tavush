<template>
  <div class="home-page">
    <PostList />
  </div>
</template>

<script>
import PostList from '../components/Posts/PostList.vue'
import { mapState } from 'vuex'
export default {
  components: {
    PostList
  },
  async fetch({ store }) {
    if (store.data === undefined) {
      await store.dispatch('fetchLandingData')
    }
  }
}
</script>

<style scoped></style>
