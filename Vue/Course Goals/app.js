const app = Vue.createApp({
  // data: function() {}
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5 ){
        return 'Learn Vue!';
      } else {
        return 'Eat Cadbury Mini Eggs!';
      }
    }
  }
});

app.mount('#user-goal');