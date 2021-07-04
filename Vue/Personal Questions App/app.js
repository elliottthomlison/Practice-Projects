const app = Vue.createApp({
  data() {
    return {
      yourName: 'Elliott Thomlison',
      yourAge: 28,
      yourFutureAge: 33,
      yourNumber: Math.floor((Math.random() * 100) + 1),
      vueLink: 'https://images.unsplash.com/photo-1606388283827-e9db3daa18d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80',
    };
  },
  methods: {
    
  }
});

app.mount('#assignment')