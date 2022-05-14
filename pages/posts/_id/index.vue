<template>
  <SinglePost />
</template>
<script>
import SinglePost from '@/components/Posts/SinglePost.vue'
import { mapGetters } from 'vuex'
export default {
  head() {
    const title = 'getSinglePageTitle'
    return {
      title,
      meta: [
        {
          property: 'og:title',
          content: title
        }
      ]
    }
  },

  data() {
    return {
      data: {}
    }
  },

  components: {
    SinglePost
  },

  computed: {
    ...mapGetters({ allPosts: 'getLandingPageData' })
  },

  async fetch({ store }) {
    if (store.data === undefined) {
      await store.dispatch('fetchLandingPageData')
    }
  },

  created() {
    const id = this.$route.params.id - 1

    console.log(this.allPosts.posts[id])
  }
}
</script>

<style scoped></style>
