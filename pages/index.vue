<template>
  <div class="home-page">
    <PostList />
  </div>
</template>

<script>
import PostList from '../components/Posts/PostList.vue'
export default {
  components: {
    PostList
  },
  async fetch({ store }) {
    if (store.data === undefined) {
      await store.dispatch('fetchLandingPageData')
    }
  }
}
</script>

<style scoped></style>
