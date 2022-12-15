const OutputView = require('./views/OutputView');
const InputView = require('./views/InputView');
const Navigate = require('./Navigate');
const Validator = require('./utils/Validator');

const { PROCESS_CONSTANTS } = require('./constants/subwaySetting');

class StationApp {
  #navigate;
  constructor() {
    OutputView.printStart();
  }

  start() {
    this.#navigate = new Navigate();
    this.#askDeparture();
  }

  #askDeparture() {
    InputView.readDeparture(this.#handleDeparture.bind(this));
  }

  #handleDeparture(departure) {
    if (Validator.checkDepartureStation(departure)) {
      this.#navigate.setDeparture(departure);
      return this.#askArrival();
    }
    return this.#askDeparture();
  }

  #askArrival() {
    InputView.readArrival(this.#handleArrival.bind(this));
  }

  #handleArrival(arrival) {
    if (Validator.checkArrivalStation(arrival) && this.#navigate.setArrival(arrival)) {
      return this.#askMethod();
    }
    return this.#askArrival();
  }

  #askMethod() {
    InputView.readMethod(this.#handleNavigate.bind(this));
  }

  #handleNavigate(method) {
    if (Validator.checkOptionForm(method)) {
      this.#navigate.setStationMap(method);
      if (!this.#navigate.makeShortestPath()) return this.start();
      this.#navigate.makeSize();
      OutputView.printResult(this.#navigate, method);
      return this.#askRetry();
    }
    return this.#askMethod();
  }

  #askRetry() {
    InputView.readRetry(this.#handleRetry.bind(this));
  }

  #handleRetry(chooseRetry) {
    if (Validator.checkRetryForm(chooseRetry)) {
      if (StationApp.#isQuitGame(chooseRetry)) {
        return OutputView.printQuit();
      }
      return this.start();
    }
    return this.#askRetry();
  }

  static #isQuitGame(chooseRetry) {
    return chooseRetry === PROCESS_CONSTANTS.quitSearch;
  }
}

module.exports = StationApp;
