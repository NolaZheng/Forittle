<template>
  <div>
    <div class="container">
      <img class="image" :src="backgroundImage" />
      <ButtonPrimary :containerStyle="buttonStyle" />
      <img class="web-name" src="../assets/web-name.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
      backgroundImage: require('../assets/home-bg.jpeg'),
      buttonStyle: {
        position: 'absolute',
        bottom: '80px',
      },
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
