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
    this.#navigate.setStationMap(method);
    this.#navigate.makeShortestPath();
    this.#navigate.makeSize();
    OutputView.printResult(this.#navigate, method);
    this.askRetry();
  }

  askRetry() {
    InputView.readRetry(this.handleRetry.bind(this));
  }

  handleRetry(chooseRetry) {
    if (StationApp.#isQuitGame(chooseRetry)) {
      return OutputView.printQuit();
    }
    this.start();
  }

  static #isQuitGame(chooseRetry) {
    return chooseRetry === PROCESS_CONSTANTS.quitSearch;
  }
}

module.exports = StationApp;
