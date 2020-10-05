const app = Vue.createApp({
  data() {
    return {
      title: "A Test Page",
      author: "Elliott Thomlison",
      candy: "Mini Eggs",
      amount: 0,
      changeTitle: true,
    }
  },
  methods: {
    changeTitle1() {
      console.log('Test')
      this.title = 'Words of Radiance'
      this.candy = 'Booty de Vicky'
      this.author = 'Shakespeare'
    },
    toggleShowBooks() {
      this.changeTitle = !this.changeTitle;
    }
  },
})

app.mount('#body')