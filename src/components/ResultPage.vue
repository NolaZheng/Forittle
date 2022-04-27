<template>
  <div v-show="visible" class="result">
    <div class="box__1">
      <span class="box__text__small">FoRittle 神秘籤</span>
    </div>
    <div class="box__2">
      <span class="box__text__large">最佳褲長</span>
    </div>
    <div class="box__3">
      <span class="box__text__large">{{ result.height }} 公分</span>
    </div>
    <div class="box__4">4</div>
    <div class="box__5">
      <p class="box__text__vertical">{{ result.descriptions[0] }}</p>
    </div>
    <div class="box__6">
      <p class="box__text__vertical">{{ result.descriptions[1] }}</p>
    </div>
    <a
      class="box__7"
      href="https://www.instagram.com/forlittle_2022"
      target="_blank"
    >
      <img src="../assets/avatar-fox.jpeg" height="38" width="38" />
      <span class="box__text__small">我們相逢即是有緣啊～</span>
      <div class="triangle-container">
        <div class="triangle" />
      </div>
    </a>
    <div class="box__8">分享</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Result = {
  height: number
  descriptions: string[]
}

export default defineComponent({
  name: 'ResultPage',
  components: {},
  props: {
    visible: Boolean,
    result: Object as PropType<Result>,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.result {
  position: absolute;
  width: 85%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 40px 70px 96px 96px 96px 96px 60px 46px;
  > div,
  a {
    background-color: #fcfcfb;
    border: 0.5px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
}

.box {
  &__1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &__2 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &__3 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &__4 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 7;
  }
  &__5 {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 7;
  }
  &__6 {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 7;
  }
  &__7 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 7;
    grid-row-end: 8;

    justify-content: space-around !important;

    > span {
      display: flex;
      margin-left: -42px;
    }
  }
  &__8 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 8;
    grid-row-end: 9;

    background-color: #272f3f !important;
    color: white;
    font-size: 17px;
  }

  &__text {
    &__small {
      font-size: 17px;
    }
    &__large {
      font-size: 24px;
    }
    &__vertical {
      font-size: 24px;
      letter-spacing: 20px;
      writing-mode: vertical-lr;
    }
  }
}
.triangle-container {
  transform: rotate(180deg) scaleX(0.7) scaleY(0.6);
  margin: 5px 5px 0px 8px;
}
.triangle {
  position: relative;
  background-color: #272f3f;
  text-align: left;
}
.triangle:before,
.triangle:after {
  content: '';
  position: absolute;
  background-color: inherit;
}
.triangle,
.triangle:before,
.triangle:after {
  width: 8px;
  height: 8px;
  border-top-right-radius: 40%;
}

.triangle {
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
}
.triangle:before {
  transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
    translate(0, -50%);
}
.triangle:after {
  transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
}
</style>
