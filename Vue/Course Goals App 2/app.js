const app = Vue.createApp({
  data() {
    return { 
      enterGoalValue: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterGoalValue);
    }
  }
});

app.mount('#user-goals');
