<template>
  <div class="footer-container">
    <div
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
      @click="toTop"
      class="to-top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          :fill="colorToTop()"
          d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-244.5l-81.1 81.9c-7.5 7.5-19.8 7.5-27.3 0s-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.9z"
        />
      </svg>
    </div>
    <footer class="the-footer">
      <p><span>Copyright &copy;</span> 2022 Chobanyan Grigor</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOnHover: false
    }
  },
  methods: {
    mouseOver() {
      this.isOnHover = true
    },
    mouseLeave() {
      this.isOnHover = false
    },
    colorToTop() {
      if (this.isOnHover) {
        return '#00dc81'
      }
      return '#011e26'
    },
    toTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.footer-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #022a35;
  margin-bottom: 2rem;
  height: 5rem;
}
span,
p {
  color: #00dc81;
}
.to-top {
  position: absolute;
  left: 23px;
  width: 50px;
  cursor: pointer;
}
</style>
