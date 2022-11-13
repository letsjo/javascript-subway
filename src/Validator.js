const { LOTTO_INFO } = require('./constants/lottoSetting');

class Validator {
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

  static isRemain (money) {
    return money % LOTTO_INFO.PRICE !== LOTTO_INFO.ZERO_CHANGE;
  }
  static isUnderZero (money) {
    return money < 0;
  }
}

module.exports = Validator;
