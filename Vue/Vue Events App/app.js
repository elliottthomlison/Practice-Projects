const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    //   setName(event) {
    //     this.name = event.target.value;
    // },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("Submitted!");
    },
    add(num) {
      // this.counter ++
      this.counter = this.counter + num;
    },
    subtract(num) {
      // this.counter --
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
