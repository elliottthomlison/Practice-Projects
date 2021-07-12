const app = Vue.createApp({
  data() {
    return {
      title: "A Test Page",
      author: "Elliott Thomlison",
      candy: "Mini Eggs",
      amount: 0,
    } 
  },
  methods: {
    changeTitle() {
      console.log('Test')
        this.title = 'Words of Radiance'
        this.candy = 'Booty de Vicky'
        this.author = 'Shakespeare'
    }
  },
})

app.mount('#body')