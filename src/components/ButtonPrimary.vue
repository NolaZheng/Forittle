<template>
  <div
    :value="label"
    class="btn-container"
    :style="[containerStyle, selected && { backgroundColor: '#272f3f' }]"
    @click="onClick"
  >
    <span class="label" :style="[labelStyle, selected && { color: 'white' }]">{{
      label
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { StyleValue } from 'vue'

export default defineComponent({
  name: 'ButtonPrimary',
  props: {
    label: String,
    containerStyle: Object as PropType<StyleValue>,
    labelStyle: Object as PropType<StyleValue>,
    onClick: Function,
    selected: Boolean,
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 366px;
  height: 54px;
  background-color: #272f3f;
}
.label {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
</style>
