<template>
  <span id="typed">{{ obj.output }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EasyTyper from 'easy-typer-js'

export default defineComponent({
  emits: ['onChatEnd'],
  name: 'TypedString',
  props: {
    str: String,
  },
  data() {
    return {
      obj: {
        output: '',
        isEnd: false,
        speed: 80,
        singleBack: false,
        sleep: 0,
        type: 'normal',
        backSpeed: 40,
        sentencePause: false,
      },
    }
  },
  mounted() {
    new EasyTyper(this.obj, this.str, () => this.$emit('onChatEnd'), undefined)
  },
  watch: {
    str(v) {
      new EasyTyper(this.obj, v, () => this.$emit('onChatEnd'), undefined)
    },
  },
})
</script>
