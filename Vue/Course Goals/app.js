const app = Vue.createApp({
  // data: function() {}
  data() {
    return {
      courseGoal: ''
    };
  },
  methods: {
    addGoal() {
      this.courseGoal.pus(this.enteredValue);
      this.enteredValue = '';
    }
  }
});

app.mount('#user-goal');