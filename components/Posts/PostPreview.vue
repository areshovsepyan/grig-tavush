<template>
  <div :style="borderColor()" class="post-preview">
    <nuxt-link
      @mouseover.native="mouseOver"
      @mouseleave.native="mouseLeave"
      :to="`/posts/${id}`"
    ></nuxt-link>
    <img
      class="post-image"
      :style="brightnessImg()"
      :src="thumbnail"
    />

    <h1 class="post-title">{{ title }}</h1>
    <div v-show="showPreview" class="post-content">
      <p :style="colorText()" class="preview-text">{{ previewText }}</p>
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
  },
  data() {
    return {
      showPreview: false
    }
  },
  methods: {
    mouseOver() {
      this.showPreview = true
    },
    mouseLeave() {
      this.showPreview = false
    },
    brightnessImg() {
      if (this.showPreview) {
        return 'filter:brightness(0.3)'
      } else {
        return 'filter:brightness(1)'
      }
    },
    colorText() {
      if (this.showPreview) {
        return 'color:#00dc81'
      } else {
        return 'color:transparent'
      }
    },
    borderColor() {
      if (this.showPreview) {
        return 'borderColor:#00dc81'
      } else {
        return 'borderColor: #ccc'
      }
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
  transition: all 0.4s;
}

.post-title {
  position: absolute;
  text-transform: uppercase;
  bottom: 0;
  left: 0;
  background-color: #032a35;
  display: inline-block;
  width: 100%;
  text-align: center;
  line-height: 50px;
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
  position: absolute;
  top: 30%;
}

.preview-text {
  transition: all 0.4s;
  color: #00dc81;
}
</style>
