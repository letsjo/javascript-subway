const MESSAGE = require('../constants/subwayMessage');
const { PROCESS_CONSTANTS, STATIONS } = require('../constants/subwaySetting');
const handleError = require('./handleError');

class Validator {
  static #validate(condition, errorMsg) {
    if (condition) {
      return handleError(errorMsg);
    }
    return true;
  }

  static checkDeparture(station) {
    return Validator.#checkDepartureForm(station) && Validator.#checkStation(station);
  }

  static checkArrival(station) {
    return Validator.#checkArrivalForm(station) && Validator.#checkStation(station);
  }

  static #checkDepartureForm(value) {
    return this.#validate(!/^[가-힣0-9]{2,}/.test(value), MESSAGE.error.noDeparture);
  }

  static #checkArrivalForm(value) {
    return this.#validate(!/^[가-힣0-9]{2,}/.test(value), MESSAGE.error.noArrival);
  }

  static checkSameStation(departure, arrival) {
    return this.#validate(departure === arrival, MESSAGE.error.sameStation);
  }

  static #checkStation(inputStation) {
    return this.#validate(
      !STATIONS.find(station => station.name === inputStation),
      MESSAGE.error.noStation,
    );
  }

  static checkOptionForm(option) {
    return this.#validate(
      ![PROCESS_CONSTANTS.shortestDistance, PROCESS_CONSTANTS.minimumTime].includes(option),
      MESSAGE.error.noOption,
    );
  }

  static checkRetryForm(chooseRetry) {
    return this.#validate(
      ![PROCESS_CONSTANTS.retrySearch, PROCESS_CONSTANTS.quitSearch].includes(chooseRetry),
      MESSAGE.error.noRetry,
    );
  }

  static checkLinkedStation(path) {
    return this.#validate(!path, MESSAGE.error.NotLinked);
  }
}

module.exports = Validator;
