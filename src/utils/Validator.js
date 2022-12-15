const { ERROR } = require('../constants/subwayMessage');
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

  static checkDepartureStation(station) {
    return Validator.checkDepartureForm(station) && Validator.checkStation(station);
  }

  static checkArrivalStation(station) {
    return Validator.checkArrivalForm(station) && Validator.checkStation(station);
  }

  static checkDepartureForm(value) {
    return this.#validate(!/^[가-힣0-9]{2,}/.test(value), MESSAGE.ERROR.noDeparture);
  }

  static checkArrivalForm(value) {
    return this.#validate(!/^[가-힣0-9]{2,}/.test(value), MESSAGE.ERROR.noArrival);
  }

  static checkSameStation(departure, arrival) {
    return this.#validate(departure === arrival, MESSAGE.ERROR.sameStation);
  }

  static checkStation(inputStation) {
    return this.#validate(
      !STATIONS.find(station => station.name === inputStation),
      MESSAGE.ERROR.noStation,
    );
  }

  static checkOptionForm(option) {
    return this.#validate(
      ![PROCESS_CONSTANTS.shortestDistance, PROCESS_CONSTANTS.minimumTime].includes(option),
      MESSAGE.ERROR.noOption,
    );
  }

  static checkRetryForm(chooseRetry) {
    return this.#validate(
      ![PROCESS_CONSTANTS.retrySearch, PROCESS_CONSTANTS.quitSearch].includes(chooseRetry),
      MESSAGE.ERROR.noRetry,
    );
  }

  static checkLinkedStation(path) {
    return this.#validate(!path, MESSAGE.ERROR.NotLinked);
  }
}

module.exports = Validator;
