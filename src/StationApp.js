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
    if (Validator.checkDeparture(departure)) {
      this.#navigate.setDeparture(departure);
      return this.#askArrival();
    }
    return this.#askDeparture();
  }

  #askArrival() {
    InputView.readArrival(this.#handleArrival.bind(this));
  }

  #handleArrival(arrival) {
    if (Validator.checkArrival(arrival) && this.#navigate.setArrival(arrival)) {
      return this.#askOption();
    }
    return this.#askArrival();
  }

  #askOption() {
    InputView.readOption(this.#handleNavigate.bind(this));
  }

  #handleNavigate(option) {
    if (Validator.checkOptionForm(option)) {
      this.#navigate.setStationMap(option);
      if (!this.#navigate.makeShortestPath()) return this.start();
      this.#navigate.makeTotalSizeByPath();
      OutputView.printResult(this.#navigate, option);
      return this.#askRetry();
    }
    return this.#askOption();
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
