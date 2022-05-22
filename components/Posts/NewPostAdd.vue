<template>
  <div class="new-post-container">
    <transition name="slide-down">
      <div v-if="show" class="new-post">
        <h1>Ավելացնել նորը</h1>
        <div class="post-name">
          <h4><span>#</span> Անվանում</h4>
          <input type="text" name="title" v-model="newPostData.title" />
        </div>
        <div class="post-details">
          <h4><span>#</span> Ծագումաբանություն</h4>
          <textarea
            name="details"
            cols="15"
            rows="10"
            v-model="newPostData.data.content.details"
          ></textarea>
        </div>
        <div class="post-history">
          <h4><span>#</span> Պատմություն</h4>
          <textarea
            name="history"
            cols="15"
            rows="10"
            v-model="newPostData.data.content.history"
          ></textarea>
        </div>
        <div class="post-thumbnail">
          <h4><span>#</span> Ավելացնել նկարներ</h4>
          <input type="file" @change="onFileSelected" multiple />
        </div>
        <button class="add-post" @click="submitNewPost">Ավելացնել</button>
      </div>
    </transition>
    <div v-if="show" class="new-post-backdrop" @click="$emit('close')"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddNewPost',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    mainData: {
      type: Object,
      requires: true
    }
  },
  data() {
    return {
      newPostData: {
        id: null,
        thumbnail: 'no-image',
        previewText: '',
        title: '',
        data: {
          content: {
            details: '',
            history: ''
          }
        }
      }
    }
  },
  created() {
    // console.log(this.$fireModule.storage)
  },
  methods: {
    ...mapActions(['setSelectedFilesArray']),
    onFileSelected(event) {
      this.setSelectedFilesArray(event.target.files)
    },
    async submitNewPost() {
      if (
        !this.newPostData.title ||
        !this.newPostData.data.content.details ||
        !this.newPostData.data.content.history
      ) {
        return
      }

      this.newPostData.id =
        this.mainData.posts[this.mainData.posts.length - 1].id + 1
      this.newPostData.previewText = this.newPostData.data.content.details
        .slice(0, 40)
        .trim()

      this.$store.commit('PUT_NEW_POST_DATA', this.newPostData)
      await this.$store.dispatch('postNewData', this.mainData)
      await this.$store.dispatch('fetchLandingPageData')
      this.closeUp()
    },
    closeUp() {
      this.newPostData.id = null
      this.newPostData.title = ''
      this.newPostData.previewText = ''
      this.newPostData.data.content.details = ''
      this.newPostData.data.content.history = ''

      this.$emit('close')
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.new-post-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;
  z-index: 500;
}
.new-post {
  display: flex;
  flex-direction: column;

  position: fixed;
  width: 600px;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: transparent;
  z-index: 500;
}

.new-post-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
.post-name,
.post-details,
.post-history,
.post-thumbnail {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

input {
  width: 500px;
  height: 30px;
  margin: 1rem auto 2rem auto;
  background-color: rgb(3 42 53);
  color: white;
  opacity: 0.8;
  border: 2px solid #ccc;
  border-radius: 7px;
}

.post-thumbnail input {
  height: 36px;
}

input[type='file']::file-selector-button {
  border: 1px solid #a3a6a5;
  margin: 0.5rem;
  border-radius: 6px;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  /* border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s; */
  cursor: pointer;
}

input[type='file']::file-selector-button:hover,
input[type='file']::file-selector-button:active {
  color: #00dc81;
  opacity: 1;
}

textarea {
  width: 500px;
  height: 150px;
  margin: 1rem auto 2rem auto;
  resize: none;
  background-color: rgb(3 42 53);
  color: white;
  opacity: 0.8;
  border: 2px solid #ccc;
  border-radius: 7px;
}

h1 {
  text-align: right;
  text-transform: uppercase;
  font-size: 20px;
  margin: 1.2rem 3rem 0 0;
}

h4 {
  margin-left: 1rem !important;
  text-align: start;
  font-weight: 400;
  opacity: 0.8;
  margin: 0;
}
span,
h4 {
  color: #00dc81;
}

.add-post {
  align-self: flex-end;
  width: 131px;
  height: 34px;
  border: 2px solid #a3a6a5;
  margin: 0 3rem 0 0;
  border-radius: 6px;
  background-color: #011e26;
  color: white;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}
.add-post:hover,
.add-post:active {
  color: #00dc81;
  opacity: 1;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 800px) {
  .new-post {
    width: 80%;
  }
}
</style>
