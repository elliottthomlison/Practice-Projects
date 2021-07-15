<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      Click Me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },
    mounted() {
        console.log('Mounted')
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
            // console.log('After Amount:', this.delay)
        }, this.delay)
    },
    // updated() {
    //     console.log('Component Updated')
    // },
    // unmounted() {
    //     console.log('Component Unmounted')
    // }
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
        },
    }
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