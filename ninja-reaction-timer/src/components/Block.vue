<template>
  <div class="block">
      Click Me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    mounted() {
        console.log('Mounted')
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