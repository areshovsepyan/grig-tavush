<template>
  <div class="home-page">
    <PostList @addNewPost="toggleNewPostModal" />
    <NewPostAdd
      :mainData="getLandingPageData"
      :show="displayNewPostModal"
      @close="displayNewPostModal = false"
    />
  </div>
</template>

<script>
import PostList from '../components/Posts/PostList.vue'
import NewPostAdd from '../components/Posts/NewPostAdd.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    PostList,
    NewPostAdd
  },
  computed: {
    ...mapGetters(['getLandingPageData'])
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
