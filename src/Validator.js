const MESSAGE = require('./constants/lottoMessage');
const { LOTTO_INFO } = require('./constants/lottoSetting');

class Validator {
  static validateLotto (numbers) {
    if (!Validator.isNumbersLength(numbers)) throw new Error(MESSAGE.ERROR.INVALID_LENGTH);
    if (!Validator.isNumbersRange(numbers)) throw new Error(MESSAGE.ERROR.INVALID_DIGIT);
    if (Validator.isDuplicates(numbers)) throw new Error(MESSAGE.ERROR.DUPLICATE_DIGIT);
    return numbers;
  }

  static isNumbersRange (numbers) {
    return numbers.every((digit) => !Number.isNaN(digit)
            && LOTTO_INFO.MIN_DIGIT <= digit && digit <= LOTTO_INFO.MAX_DIGIT);
  }
  static isNumbersLength (numbers) {
    return numbers.length === LOTTO_INFO.DIGIT_LENGTH;
  }
  static isDuplicates (numbers) {
    return [...new Set(numbers)].length !== LOTTO_INFO.DIGIT_LENGTH;
  }

  static isValidateMoney (money) {
    if (this.isRemain(money)) throw new Error(MESSAGE.ERROR.REMAIN_CHANGE);
    if (this.isUnderZero(money)) throw new Error(MESSAGE.ERROR.INVALID_MONEY);
    return true;
  }

  static isRemain (money) {
    return money % LOTTO_INFO.PRICE !== LOTTO_INFO.ZERO_CHANGE;
  }
  static isUnderZero (money) {
    return money < 0;
  }
}

module.exports = Validator;
