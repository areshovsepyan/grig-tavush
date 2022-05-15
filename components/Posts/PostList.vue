<template>
  <section class="post-list">
    <PostAdd @toggle="$emit('addNewPost')" />
    <PostPreview
      v-for="{ id, thumbnail, title, previewText } in getFilteredData.posts"
      :key="id"
      :id="id"
      :thumbnail="thumbnail"
      :title="title"
      :previewText="previewText"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue'
import PostAdd from './PostAdd.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'PostList',
  components: {
    PostPreview,
    PostAdd
  },
  computed: {
    ...mapGetters(['getFilteredData'])
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
