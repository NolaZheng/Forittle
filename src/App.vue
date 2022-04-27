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
#app {
  font-family: 'Noto Serif TC', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 420px;
  max-height: 700px;
  margin: 0 auto;
}
</style>
