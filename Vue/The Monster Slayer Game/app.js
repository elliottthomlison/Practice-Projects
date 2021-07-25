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
      currentRound: 0,
      specialAttack: 0,
      healValue: 0,
    };
  },
  methods: {
    //connect to the HTML
    attackMonster() {
      const attackValue = getRandomValue(5, 10);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
      this.currentRound++
    },
    attackPlayer() {
      const attackValue = getRandomValue(10, 15);
      this.playerHealth = this.playerHealth - attackValue;
    },
    specialAttackMonster() {
        const attackValue = getRandomValue(10, 25);
        this.monsterHealth = this.monsterHealth - attackValue
        this.attackPlayer() ;
        this.currentRound++
    },
    healPlayer() {
        this.currentRound++
        const healValue = getRandomValue(5, 20);
        if (this.playerHealth + healValue > 100) {
            this.playerHealth = 100;
        } else {
            this.playerHealth = this.playerHealth + healValue
            currentRound++
        }
        this.attackPlayer();
    }
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    monsterSpecialBarStyles() {
        return { width: this.playerHealth + "%"}
    },
    useSpecialAttack() {
        return this.currentRound % 3 !== 0
    },
    healthCheck () {
        return this.currentRound % 2 !== 0
    }
  },
});

app.mount("#game");
