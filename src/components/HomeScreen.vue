<template>
  <div
    :style="{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color[pageIndex],
      width: '100%',
    }"
  >
    <div class="min-container">
      <img class="image" :src="backgroundImage" />
      <div v-show="!isFinished" class="btn" :style="additionalStyle">
        <div
          class="btn__relative"
          v-for="item in buttons"
          :key="item.description"
        >
          <ButtonPrimary
            :selected="selectedLabel === item.content"
            :containerStyle="item.containerStyle"
            :labelStyle="item.labelStyle"
            :label="height ? item.content.replace('???', height) : item.content"
            :onClick="() => start(item)"
            :isSmall="pageIndex !== 0 && pageIndex != 1"
          />
        </div>
      </div>
      <div v-show="!isFinished" class="chat-box" v-if="pageIndex !== 0">
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
        <a
          class="chat-box__continue"
          @click="start({ content: '', clickAction: 'quizContinue' })"
        >
          <span :style="!isAbleToContinue && { color: 'rgb(205,205,205)' }"
            >下一題</span
          >
          <div class="chat-box__triangle">
            <div
              class="triangle"
              :style="
                !isAbleToContinue && { backgroundColor: 'rgb(205,205,205)' }
              "
            />
          </div>
        </a>
      </div>
      <img v-show="!isFinished" class="web-name" src="../assets/web-name.png" />
      <ScrollPicker
        :isVisible="isPickerVisible"
        @onHeightSelect="onHeightSelect"
      />
      <ResultPage :visible="isFinished" :result="generateResult()" />
      <transition name="fade" appear>
        <div v-if="showOverlay" class="min-container__overlay">
          <div class="min-container__overlay__banner">
            <p>我算出來了!</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TypedString from './TypedString.vue'
import ButtonPrimary from './ButtonPrimary.vue'
import ScrollPicker from './ScrollPicker.vue'
import ResultPage from './ResultPage.vue'

import { Questions } from '@/data/questions'
import { Option } from '@/types'
import resultA from '../assets/result-a.png'
import resultB from '../assets/result-b.png'
import resultC from '../assets/result-c.png'

export default defineComponent({
  name: 'HomeScreen',
  components: {
    ButtonPrimary,
    TypedString,
    ScrollPicker,
    ResultPage,
  },
  data() {
    return {
      pageIndex: 0,
      showOverlay: false,
      isEnabled: true,
      selectedLabel: '開始',
      isPickerVisible: false,
      isFinished: false,
      height: undefined,
      type: undefined,
      color: [
        'rgb(252 251 247)',
        'rgb(243 226 196)',
        'rgb(243 226 196)',
        'rgb(243 226 196)',
        'rgb(246 229 203)',
        'rgb(247 249 246)',
        'rgb(243 245 242)',
      ],
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
    additionalStyle() {
      return this.pageIndex === 0
        ? { top: 'unset', bottom: '80px' }
        : this.pageIndex === 1 || this.pageIndex === 5 || this.pageIndex === 6
        ? { top: '50%' }
        : {}
    },
  },
  methods: {
    start(item: Option) {
      switch (item.clickAction) {
        case 'optionSelect':
          this.selectedLabel = item.content
          if (item.value) this.type = item.value
          break
        case 'quizContinue':
          if (!this.isAbleToContinue) return
          if (this.pageIndex + 1 > Questions.length - 1) {
            if (!this.showOverlay) {
              this.showOverlay = true
            }
            return
          }
          this.isEnabled = false
          this.pageIndex += 1
          this.selectedLabel = undefined
          break
        case 'numberPicker':
          if (!this.isEnabled || this.isPickerVisible) return
          this.isPickerVisible = true
          break
      }
    },
    onChatEnd() {
      this.isEnabled = true
    },
    onHeightSelect(h: number) {
      this.height = h
      this.selectedLabel = h
      this.isPickerVisible = false
    },
    generateResult() {
      const descriptions = []
      const height =
        this.height >= 140 && this.height <= 145
          ? 83
          : this.height >= 146 && this.height <= 150
          ? 86
          : 89
      let image = undefined

      if (this.type === 'C') {
        descriptions.push('若食膳衡方無虞', '宜層次添曲線突')
        image = resultC
      } else if (this.type === 'B') {
        descriptions.push('忌口無攔多紓壓', '宜四肢展修腰際')
        image = resultB
      } else {
        descriptions.push('忌久坐姿勤練胯', '宜著高腰擴肩寬')
        image = resultA
      }
      return {
        height,
        descriptions,
        image,
      }
    },
  },
  watch: {
    showOverlay(v) {
      if (v) {
        setTimeout(() => {
          this.showOverlay = false
          this.isFinished = true
        }, 1000)
      }
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  top: calc((100% - 340px) / 2);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &__relative {
    position: relative;
  }
}
.min-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 414px;

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    &__banner {
      width: 100%;
      background-color: white;
      height: 92px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 2px solid #000000;
      border-bottom: 2px solid #000000;

      > p {
        font-size: 27px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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

@media only screen and (max-width: 380px) {
  .chat-box {
    &__name {
      left: 160px;
    }
    &__avatar {
      width: 90px !important;
      height: 90px !important;
    }
  }
}
</style>
