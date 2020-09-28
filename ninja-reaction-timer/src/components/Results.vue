<template>
  <p>Reaction Time - {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
      return {
          rank: null
      }
  },
  mounted() {
      if (this.score < 500) {
          this.rank = 'Inhuman Reflexes'
      } else if (this.score < 800 ) {
          this.rank = "Quickish Reflexes"
      } else {
          this.rank = "Are-You-Even-Trying-Reflexes"
      }
  }
};
</script>

<style></style>
