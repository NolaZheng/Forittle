<template>
  <HomeScreen />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeScreen from './components/HomeScreen.vue'

export default defineComponent({
  name: 'App',
  components: {
    HomeScreen,
  },
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@600&display=swap');
#app {
  font-family: 'Noto Serif TC', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}
</style>
