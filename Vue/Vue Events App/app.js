const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    //   setName(event) {
    //     this.name = event.target.value;
    // },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
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
    resetInput() {
      this.counter = this.counter * 0;
    }
  },
});

app.mount("#events");
