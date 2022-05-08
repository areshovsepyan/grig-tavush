<template>
  <section class="post-list">
    <PostPreview
      v-for="post in getPostsData.posts"
      :key="post.id"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    PostPreview
  },
  computed: {
    ...mapGetters(['getPostsData'])
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
