const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');
const Navigate = require('./Navigate');

const { PROCESS_CONSTANTS } = require('./constants/subwaySetting');

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

  handleDeparture(departure) {
    this.#navigate.setDeparture(departure);
  }
}

module.exports = StationApp;
