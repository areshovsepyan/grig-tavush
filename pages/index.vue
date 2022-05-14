<template>
  <div class="home-page">
    <PostList @addNewPost="toggleNewPostModal" />
    <NewPostAdd
      :show="displayNewPostModal"
      @close="displayNewPostModal = false"
    />
  </div>
</template>

<script>
import PostList from '../components/Posts/PostList.vue'
import NewPostAdd from '../components/Posts/NewPostAdd.vue'

export default {
  components: {
    PostList,
    NewPostAdd
  },
  async fetch({ store }) {
    if (store.data === undefined) {
      await store.dispatch('fetchLandingPageData')
    }
  },
  data() {
    return {
      displayNewPostModal: false
    }
  },
  methods: {
    toggleNewPostModal() {
      this.displayNewPostModal = !this.displayNewPostModal
    }
  }
}
</script>

<style scoped></style>
