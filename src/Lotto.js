// 상수
const MESSAGE = require('./constants/lottoMessage');
// 오프젝트
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor (numbers) {
    this.#numbers = this.validateNumbers(numbers);
  }

  validateNumbers (numbers) {
    const validateForArr = [...numbers];
    if (!Validator.isNumbersLength(validateForArr)) throw new Error(MESSAGE.ERROR.INVALID_LENGTH);
    if (!Validator.isNumbersRange(validateForArr)) throw new Error(MESSAGE.ERROR.INVALID_DIGIT);
    if (Validator.isDuplicates(validateForArr)) throw new Error(MESSAGE.ERROR.DUPLICATE_DIGIT);
  }

  getLotto () {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
