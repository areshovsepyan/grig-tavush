<template>
  <div
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    :style="borderColor()"
    @click="$emit('toggle')"
    class="post-add"
  >
    <div class="add-new-icon">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enable-background="new 0 0 1000 1000"
        xml:space="preserve"
      >
        <g>
          <path
            :stroke="color()"
            :fill="color()"
            d="M500,990C229.8,990,10,770.2,10,500C10,229.8,229.8,10,500,10c270.2,0,490,219.8,490,490C990,770.2,770.2,990,500,990z M500,56.7C255.6,56.7,56.7,255.5,56.7,500c0,244.4,198.8,443.3,443.3,443.3S943.3,744.4,943.3,500C943.3,255.6,744.4,56.7,500,56.7z"
          />
          <path
            :stroke="color()"
            :fill="color()"
            d="M738.4,526.5h-212v212c0,14.7-11.9,26.5-26.5,26.5c-14.7,0-26.5-11.9-26.5-26.5v-212h-212c-14.6,0-26.5-11.9-26.5-26.5c0-14.6,11.9-26.5,26.5-26.5h212V261.6c0-14.7,11.9-26.5,26.5-26.6c14.7,0,26.5,11.9,26.5,26.6v212h212c14.6,0,26.5,11.9,26.5,26.5C764.9,514.6,753.1,526.5,738.4,526.5L738.4,526.5z"
          />
        </g>
      </svg>
    </div>
    <h1 class="post-title">Ավելացնել նորը</h1>
  </div>
</template>

<script>
export default {
  name: 'PostAdd',

  data() {
    return {
      isHover: false
    }
  },
  methods: {
    mouseOver() {
      this.isHover = true
    },
    mouseLeave() {
      this.isHover = false
    },
    color() {
      if (this.isHover) {
        return '#00dc81'
      }
      return 'white'
    },
    borderColor() {
      if (this.isHover) {
        return 'borderColor:#00dc81'
      } else {
        return 'borderColor: #ccc'
      }
    }
  }
}
</script>

<style scoped>
.post-add {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  border: 1px solid #ccc;
  width: 480px;
  height: 360px;
  margin-bottom: 10px;
  cursor: pointer;
}

.add-new-icon {
  width: 100px;
  height: 100px;
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

@media (min-width: 884px) {
  .post-add {
    width: 400px;
    margin: 10px;
  }
}
</style>
