<template>
  <SinglePost :postData="allPosts.posts[singlePostID]" />
</template>
<script>
import SinglePost from '@/components/Posts/SinglePost.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    SinglePost
  },

  computed: {
    ...mapGetters({ allPosts: 'getFilteredData' }),
    singlePostID() {
      return this.$route.params.id - 1
    }
  },

  async fetch({ store }) {
    if (store.data === undefined) {
      await store.dispatch('fetchLandingPageData')
    }
  }
}
</script>

<style scoped></style>
