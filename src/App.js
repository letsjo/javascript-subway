const StationApp = require('./StationApp');

class App {
  #stationApp = new StationApp();
  play() {
    this.#stationApp.start();
  }
}

const app = new App();
app.play();

module.exports = App;
