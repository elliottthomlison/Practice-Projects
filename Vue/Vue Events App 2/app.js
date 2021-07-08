const app = Vue.createApp({
  data() {
    return {
      outputOne: "",
      confirmedOne: "",
      outputTwo: "",
    };
  },
  methods: {
    showAlert() {
      alert("Alert!");
    },
    setOutput(event) {
      this.outputOne = event.target.value;
    },
    confirmedOutput() {
      this.confirmedOne = this.outputOne;
    },
  },
});

app.mount("#assignment");
