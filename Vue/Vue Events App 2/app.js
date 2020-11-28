const app = Vue.createApp({
  data() {
    return {
      outputOne: "",
      confirmedOutputOne: "",
      outputTwo: "",
    };
  },
  methods: {
    showAlert() {
      alert('Alert!');
    },
    setOutputOne(event) {
      this.outputOne = event.target.value 
    },
    confirmOutputOne() {
      this.confirmedOutputOne = this.name;
    },
  }
})

app.mount("#assignment");