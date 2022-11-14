// 상수
const MESSAGE = require('./constants/lottoMessage');
// 오프젝트
const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor (numbers) {
    this.#numbers = Validator.validateLotto(numbers);
  }

  getLotto () {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
