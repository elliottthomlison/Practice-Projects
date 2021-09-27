function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  //pseudocode:
  //take in the value of the player"s attack and health
  //take in the value of the demon"s attack and health

  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      specialAttack: 0,
      healValue: 0,
      winner: null,
      logMessages: [],
    };
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    //connect to the HTML
    attackMonster() {
      const attackValue = getRandomValue(5, 10);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
      this.currentRound++;
      this.addLogMessage("player", "attack", attackValue);
    },
    attackPlayer() {
      const attackValue = getRandomValue(10, 15);
      this.playerHealth = this.playerHealth - attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
      this.currentRound++;
      this.addLogMessage("player", "special attack", attackValue);
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(5, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + healValue;
      }
      this.attackPlayer();
      this.addLogMessage("player", "heal", healValue);
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    monsterSpecialBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    useSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    healthCheck() {
      return this.currentRound % 2 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= -0 && this.monsterHealth <= 0) {
        //a draw
        this.winner = "draw";
        // this.playerHealth = 100
      } else if (value <= 0) {
        //player lost
        this.winner = "monster";
        // this.playerHealth = 0;
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //a draw
        this.winner = "draw";
        // this.monsterHealth = 100
      } else if (value <= 0) {
        //monster lost
        this.winner = "player";
        // this.monsterHealth = 0;
      }
    },
  },
});

app.mount("#game");
