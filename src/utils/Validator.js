const MESSAGE = require('../constants/lottoMessage');
const { LOTTO_INFO } = require('../constants/lottoSetting');
const handleError = require('./utils/handleError');

class Validator {
  static #validate(condition, errorMsg) {
    if (condition) {
      return handleError(errorMsg);
    }
    return true;
  }
}

module.exports = Validator;
