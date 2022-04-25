<template>
  <div>
    <div class="container">
      <img class="image" :src="backgroundImage" />
      <div class="btn" :style="pageIndex === 0 && { bottom: '80px' }">
        <div
          class="btn__relative"
          v-for="item in buttons"
          :key="item.description"
        >
          <ButtonPrimary
            :containerStyle="item.containerStyle"
            :labelStyle="item.labelStyle"
            :label="item.content"
            :onClick="start"
          />
        </div>
      </div>
      <div class="chat-box" v-if="pageIndex !== 0">
        <div class="chat-box__name">
          <span>神秘狐狸</span>
        </div>
        <img
          class="chat-box__avatar"
          src="../assets/avatar-fox.jpeg"
          height="112"
          width="112"
        />
        <div class="chat-box__description">
          <span>{{ description }}</span>
        </div>
      </div>
      <img class="web-name" src="../assets/web-name.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Questions } from '@/data/questions'

import ButtonPrimary from '@/components/ButtonPrimary.vue'

export default defineComponent({
  name: 'HomeScreen',
  components: {
    ButtonPrimary,
  },
  props: {
    //
  },
  data() {
    return {
      pageIndex: 0,
      showOverlay: false,
    }
  },
  computed: {
    backgroundImage() {
      return Questions[this.pageIndex].background
    },
    buttons() {
      return Questions[this.pageIndex].options
    },
    description() {
      return Questions[this.pageIndex].description
    },
  },
  methods: {
    start() {
      if (this.pageIndex + 1 > Questions.length - 1) {
        if (!this.showOverlay) {
          this.showOverlay = true
        }
        return
      }
      this.pageIndex += 1
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  &__relative {
    position: relative;
  }
}
.container {
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  width: 100%;
}
.web-name {
  position: absolute;
  width: 120px;
  top: 10px;
  left: 0;
}
.chat-box {
  display: flex;
  position: absolute;
  width: 100%;
  height: 183px;
  background-color: white;
  bottom: 20px;
  border-top: 2px solid #272f3f;
  border-bottom: 2px solid #272f3f;
  align-items: center;

  &__name {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    top: -15px;
    left: 180px;
    background-color: #272f3f;
    width: 124px;
    height: 30px;
    clip-path: polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 7% 100%, 0% 50%);
  }

  &__avatar {
    margin: 0 33px;
  }

  &__description {
    flex: 1;
    color: #272f3f;
    text-align: left;
    margin-right: 50px;
    height: 81px;
  }
}
</style>
