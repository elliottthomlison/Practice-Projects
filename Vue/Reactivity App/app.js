const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
  },
  computed: {
    counterCheck() {
      if (this.counter === 37) {
        return "Perfect amount!";
      } else if (this.counter > 37) {
        return "Too much!";
      }
    },
  },
  watch: {
    counter(value) {
      if (value > 0) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
