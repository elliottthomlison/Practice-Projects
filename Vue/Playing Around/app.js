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
      test: 'You can double click, if you want.',
      showBooks: true,
      books: [
        { title: 'The Name of Wind', author: 'Butt Boogerman', img: 'assets/1.jpg', isFav: true},
        { title: 'Brandon Sanderson', author: 'Booger Buttman', img: 'assets/2.jpg', isFav: false},
        { title: 'The Final Empire', author: 'Man Manman', img: 'assets/3.jpg', isFav: true},
      ]
    }
  },
  methods: {
    toggleFav(book) {
      console.log('test')
      book.isFav = !book.isFav
    },
    toggleShowBooks( ){
      this.showBooks = !this.showBooks
    },
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
      console.log('test')
      if (this.test === 'Double Click?') {
        return this.test = 'Double Clicked'
      } else {
        return this.test = 'Double Click?'
      }
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