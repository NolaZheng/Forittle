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
            :selected="selectedLabel === item.content"
            :containerStyle="item.containerStyle"
            :labelStyle="item.labelStyle"
            :label="item.content"
            :onClick="() => start(item)"
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
          <TypedString :str="description" @onChatEnd="onChatEnd" />
        </div>
        <div
          class="chat-box__continue"
          @click="start({ content: '', clickAction: 'quizContinue' })"
        >
          <span :style="!isAbleToContinue && { color: '#919EBA' }">下一題</span>
          <div class="chat-box__triangle">
            <div
              class="triangle"
              :style="!isAbleToContinue && { backgroundColor: '#919EBA' }"
            />
          </div>
        </div>
      </div>
      <img class="web-name" src="../assets/web-name.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TypedString from './TypedString.vue'

import { Questions } from '@/data/questions'

import ButtonPrimary from '@/components/ButtonPrimary.vue'
import { Option } from '@/types'

export default defineComponent({
  name: 'HomeScreen',
  components: {
    ButtonPrimary,
    TypedString,
  },
  data() {
    return {
      pageIndex: 0,
      showOverlay: false,
      isEnabled: true,
      selectedLabel: '開始',
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
    isAbleToContinue() {
      return this.isEnabled && this.selectedLabel
    },
  },
  methods: {
    start(item: Option) {
      switch (item.clickAction) {
        case 'optionSelect':
          this.selectedLabel = item.content
          break
        case 'quizContinue':
          if (!this.isAbleToContinue) return
          if (this.pageIndex + 1 > Questions.length - 1) {
            if (!this.showOverlay) {
              this.showOverlay = true
            }
            return
          }
          this.pageIndex += 1
          this.isEnabled = false
          this.selectedLabel = undefined
          break
        case 'numberPicker':
          if (!this.isEnabled) return
          if (this.pageIndex + 1 > Questions.length - 1) {
            if (!this.showOverlay) {
              this.showOverlay = true
            }
            return
          }
          this.pageIndex += 1
          this.isEnabled = false
          break
      }
    },
    onChatEnd() {
      this.isEnabled = true
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
  font-size: 17px;

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

  &__continue {
    position: absolute;
    bottom: 10px;
    right: 20px;
    display: flex;
    align-items: center;
  }

  &__triangle {
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
}
</style>
