const LotteryApp = require('./LotteryApp');

class App {
  constructor() {
    this.lotteryApp = new LotteryApp();
  }
  play() {
    this.lotteryApp.start();
  }
}

const app = new App();
app.play();

module.exports = App;
