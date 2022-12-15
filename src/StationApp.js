const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');
const Navigate = require('./Navigate');

class StationApp {
  #navigate;
  constructor() {
    OutputView.printStart();
  }

  start() {
    this.#navigate = new Navigate();
    this.askDeparture();
  }

  askDeparture() {
    InputView.readDeparture(this.handleDeparture.bind(this));
  }
}

module.exports = StationApp;
