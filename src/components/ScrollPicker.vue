<template>
  <div
    v-if="isVisible"
    :style="{
      position: 'absolute',
      bottom: '30px',
      backgroundColor: 'white',
      width: '100%',
      fontSize: '24px',
    }"
  >
    <transition name="slide">
      <VueScrollPicker
        :options="options"
        v-model="currentValue"
        v-if="isVisible"
      />
    </transition>
    <div
      :style="{
        position: 'absolute',
        right: '20px',
        top: '5px',
        fontSize: '17px',
      }"
      :onClick="() => this.$emit('onHeightSelect', currentValue)"
    >
      確認
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueScrollPicker } from 'vue-scroll-picker'

export default defineComponent({
  emits: ['onHeightSelect'],
  components: {
    VueScrollPicker,
  },
  props: {
    isVisible: Boolean,
  },
  data() {
    return {
      currentValue: 140,
    }
  },
  computed: {
    options() {
      let res = []
      for (let i = 140; i < 156; i++) {
        res.push({ value: i, name: i })
      }
      return res
    },
  },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style src="vue-scroll-picker/lib/style.css"></style>
