<template>
  <div v-show="visible" class="result">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ="
      crossorigin="anonymous"
    />
    <div class="box box__1">
      <img src="../assets/icon-star.png" width="10" />
      <span class="box__text__title">FoRittle 神秘籤</span>
      <img src="../assets/icon-star.png" width="10" />
    </div>
    <div class="box box__2">
      <span class="box__text__large">最佳褲長</span>
    </div>
    <div class="box box__3">
      <span class="box__text__large">{{ result.height }} 公分</span>
    </div>
    <div class="box box__4">
      <img :src="result.image" width="160" />
    </div>
    <div class="box box__5">
      <p class="box__text__vertical">{{ result.descriptions[0] }}</p>
    </div>
    <div class="box box__6">
      <p class="box__text__vertical">{{ result.descriptions[1] }}</p>
    </div>
    <a
      class="box box__7"
      href="https://www.instagram.com/forlittle_2022"
      target="_blank"
    >
      <img src="../assets/avatar-fox.jpeg" height="38" width="38" />
      <span class="box__text__small">我們相逢即是有緣啊～</span>
      <div class="triangle-container">
        <div class="triangle" />
      </div>
    </a>
    <div
      class="box box__8"
      @click="
        () => {
          isSharing = true
        }
      "
    >
      分享
      <transition name="fade">
        <div v-show="isSharing" class="share">
          <div class="triangle share__arrow" />
          <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :style="{
              backgroundColor: network.color,
              display: 'flex',
              borderRadius: '20px',
              height: '26px',
              width: '26px',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }"
            :url="sharing.url"
            :title="sharing.title"
            :description="sharing.description"
            :quote="sharing.quote"
            :hashtags="sharing.hashtags"
            :twitterUser="sharing.twitterUser"
          >
            <i :class="network.icon"></i>
          </ShareNetwork>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Result = {
  height: number
  descriptions: string[]
  image: any
}

export default defineComponent({
  name: 'ResultPage',
  props: {
    visible: Boolean,
    result: Object as PropType<Result>,
  },
  data() {
    return {
      isSharing: false,
      sharing: {
        url: 'https://forittle.web.app/',
        title: 'Forittle-小個子女孩的穿搭秘密',
        description:
          '你也是小個子女孩嗎！神秘狐狸說，我有一個天大的祕密要告訴妳哦！',
        hashtags: 'Forittle',
      },
      networks: [
        {
          network: 'facebook',
          name: 'Facebook',
          icon: 'fab fah fa-md fa-facebook-f',
          color: '#272F3F',
        },
        {
          network: 'line',
          name: 'Line',
          icon: 'fab fah fa-md fa-line',
          color: '#272F3F',
        },
      ],
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.result {
  border-top: 0.5px solid black;
  position: absolute;
  width: 85%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 40px 70px 96px 96px 96px 96px 60px 46px;

  > .box {
    background-color: #fcfcfb;
    border: 0.5px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
}

.share {
  display: flex;
  height: 40px;
  width: 92px;
  position: absolute;
  border: 1px solid #272f3f;
  bottom: -40px;
  justify-content: space-evenly;
  background-color: white;

  &__arrow {
    background-color: white !important;
    position: absolute !important;
    top: -6px !important;
    left: 48%;
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
    &__title {
      font-size: 17px;
      margin: 0 5px;
    }
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
