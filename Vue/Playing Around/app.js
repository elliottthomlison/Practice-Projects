const app = Vue.createApp({
  data() {
    return {
      title: "A Test Page",
      author: "Elliott Thomlison",
      candy: "Mini Eggs",
      amount: 0,
      changeTitle: true,
      x: 0,
      y: 0,
    }
  },
  methods: {
    changeTitle1() {
      // console.log('Test')
      this.title = 'Words of Radiance'
      this.candy = 'Booty de Vicky'
      this.author = 'Shakespeare'
    },
    toggleShowBooks() {
      this.changeTitle = !this.changeTitle;
    },
    handleEvent() {
      console.log('Test')
    },
    handleMouseMove(event) {
      this.x = event.offsetX
    }
  },
})

app.mount('#body')