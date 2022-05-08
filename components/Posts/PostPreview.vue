<template>
  <div class="post-preview">
    <nuxt-link :to="`/posts/${id}`"></nuxt-link>
    <img
      class="post-image"
      :src="require(`~/assets/images/posts/${thumbnail}.jpeg`)"
    />

    <h1 class="post-title">{{ title }}</h1>
    <div class="post-content">
      <p>{{ previewText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.post-preview {
  position: relative;
  border: 1px solid #ccc;
  width: 480px;
  height: 360px;
  margin-bottom: 10px;
}
.post-image {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* filter: blur(5px); */
}

.post-title {
  position: absolute;
  text-transform: uppercase;
  top: 38%;
  left: 26%;
}

a {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  z-index: 10;
}

@media (min-width: 884px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
}

.post-content {
  padding: 10px;
  text-align: center;
}
</style>
