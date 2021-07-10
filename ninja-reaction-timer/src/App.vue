<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @finish="finishGame" />
  <p v-if="showResults">Reaction Time: {{ score }} ms</p>
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
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 1000 + Math.random() * 4000;
      this.isPlaying = true;
      // console.log("Before Amount:", this.delay);
      this.showResults = false;
    },
  },
  finishGame(reactionTime) {
    this.score = reactionTime;
    this.isPlaying = false;
    this.showResults = true;
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
