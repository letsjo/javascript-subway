const MESSAGE = require('../constants/subwayMessage');
const { STATIONS } = require('../constants/subwaySetting');
const handleError = require('./handleError');

class Validator {
  static #validate(condition, errorMsg) {
    if (condition) {
      return handleError(errorMsg);
    }
    return true;
  }

  static checkDepartureStation(station) {
    return Validator.departureForm(station) && Validator.checkStation(station);
  }

  static checkArrivalStation(station) {
    return Validator.arrivalForm(station) && Validator.checkStation(station);
  }

  static departureForm(value) {
    return this.#validate(!/^[가-힣0-9]{2,}/.test(value), MESSAGE.ERROR.noDeparture);
  }

  static arrivalForm(value) {
    return this.#validate(!/^[가-힣0-9]{2,}/.test(value), MESSAGE.ERROR.noArrival);
  }

  static checkStation(inputStation) {
    return this.#validate(
      !STATIONS.find(station => station.name === inputStation),
      MESSAGE.ERROR.noStation,
    );
  }
}

module.exports = Validator;
