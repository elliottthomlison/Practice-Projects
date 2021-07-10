<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying" >Play</button>
  <Block v-if="isPlaying" :delay="delay" @finish=""/>
</template>

<script>
import Block from "./components/Block.vue";
export default {
  name: "App",
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      this.delay = 1000 + Math.random() * 5000;
      this.isPlaying = true;
      console.log("Before Amount:", this.delay);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(68, 68, 68);
  margin-top: 60px;
}
</style>
