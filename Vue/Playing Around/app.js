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
      mouseLeaves: "Hello",
      test: 'test',
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
      this.test = 'Boom Double Clicked'
    },
    mouseLeave() {
      if (this.mouseLeaves === 'Hello') {
        return this.mouseLeaves = 'Goodbye'
      } else {
        return this.mouseLeaves = 'Hello'
      }
    },
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
})

app.mount('#body')