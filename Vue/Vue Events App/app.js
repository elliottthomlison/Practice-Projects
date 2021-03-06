const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Thomlison"
    },
    setName(event) {
      this.name = event.target.value;
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
      this.name = "";
    }
  },
  computed: {
    fullname() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
});

app.mount("#events");
