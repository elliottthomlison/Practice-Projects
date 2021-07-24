function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  //pseudocode:
  //take in the value of the player's attack and health
  //take in the value of the demon's attack and health

  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      attack: 0,
      specialAttack: 0,
      heal: 0,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = 
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = Math.floor(Math.random() * (15 - 10)) + 10;
      this.playerHealth = this.playerHealth - attackValue;
      this.attackMonster();
    },
  },
});

app.mount("#game ");
