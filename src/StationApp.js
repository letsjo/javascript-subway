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
    this.askArrival();
  }

  askArrival() {
    InputView.readArrival(this.handleArrival.bind(this));
  }

  handleArrival(arrival) {
    this.#navigate.setArrival(arrival);
    this.askMethod();
  }

  askMethod() {
    InputView.readMethod(this.handleNavigate.bind(this));
  }

  handleNavigate(method) {
  }
}

module.exports = StationApp;
