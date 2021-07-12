const app = Vue.createApp({
  data() {
    return {
      title: "A Test Page",
      author: "Elliott Thomlison",
      candy: "Mini Eggs"
    }
  }
})

app.mount('#body')