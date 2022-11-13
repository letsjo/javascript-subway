const LotteryApp = require('./LotteryApp');

class App {
  constructor () {
    this.lotteryApp = new LotteryApp();
  }
  play () {
    this.lotteryApp.start();
  }
}

module.exports = App;
