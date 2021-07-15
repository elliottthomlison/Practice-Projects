<template>
  <div class="block" v-if="showBlock">
      Click Me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
        }
    },
    mounted() {
        console.log('Mounted')
        setTimeout(() => {
            this.showBlock = true
            console.log('After Amount:', this.delay)
        }, this.delay)
    },
    // updated() {
    //     console.log('Component Updated')
    // },
    // unmounted() {
    //     console.log('Component Unmounted')
    // }
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: rgb(59, 177, 108);
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>