<template>
  <div class="single-post-page">
    <h1 class="post-title">{{ postData.title }}</h1>
    <section class="slider-component">
      <VueSlickCarousel v-bind="settings">
        <div class="slider-image">
          <img :src="postData.data.thumbnails[0]" alt="" />
        </div>
        <div class="slider-image">
          <img :src="postData.data.thumbnails[1]" alt="" />
        </div>
        <div class="slider-image">
          <img :src="postData.data.thumbnails[2]" alt="" />
        </div>
        <div class="slider-image">
          <img :src="postData.data.thumbnails[3]" alt="" />
        </div>
      </VueSlickCarousel>
    </section>
    <section class="post actions">
      <button class="open-map-button" @click="toSingleMap">Քարտեզ</button>
    </section>
    <section class="post">
      <div class="post-details">
        <h4><span>#</span> Ծագումաբանություն</h4>
        <p class="post-detail">{{ postData.data.content.details }}</p>
      </div>
      <div class="post-details">
        <h4><span>#</span> Պատմություն</h4>
        <p class="post-detail">{{ postData.data.content.history }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import '~/assets/styles/vue-slick-carousel.css'
export default {
  name: 'SinglePost',
  data() {
    return {
      data: {
        id: null
      }
    }
  },
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        infinite: true,
        pauseOnFocus: true
      }
    }
  },
  methods: {
    sliderArrow() {
      this.settings.arrows = window.innerWidth <= 1024 ? false : true
    },
    toSingleMap() {
      this.$store.commit('SET_VIEW_SINGLE_POST', {coords: this.postData.latlng, id: this.postData.id})
      this.$router.push('/map')
    }
  },
  mounted() {
    window.addEventListener('resize', this.sliderArrow)
    window.addEventListener('load', this.sliderArrow)
  }
}
</script>

<style scoped>
.single-post-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  padding: 30px;
}

.post {
  width: 600px;
  margin: auto;
}

.post.actions {
  display: flex;
  justify-content: flex-end;
}

.open-map-button {
  align-self: flex-end;
  width: 80px;
  height: 19px;
  border: 1.7px solid #00dc81;
  border-radius: 6px;
  background-color: #032a35;
  color: white;
  font-size: 13px;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0.8;
  letter-spacing: 1px;
  margin-right: 12px;
  text-decoration: none;
}
.open-map-button:hover,
.open-map-button:active {
  color: #00dc81;
  opacity: 1;
}

.slider-component {
  width: 65%;
  margin-bottom: 5rem;
}
.slider-image {
  width: 800px !important;
  height: 550px;
}

.slider-image img {
  width: 100%;
  height: 100%;
}

.post-title {
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 1rem 0;
  letter-spacing: 1px;
}

.post-details {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 10px;
}

h4,
p {
  font-weight: 400;
  opacity: 0.8;
  margin: 0;
}
span,
h4 {
  color: #00dc81;
}

.post-detail {
  text-align: justify;
  margin: 1rem 0;
}

@media (max-width: 1024px) {
  .slider-image {
    width: 560px;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .slider-component {
    width: 90%;
  }
  .post {
    width: 100%;
  }
}
</style>
