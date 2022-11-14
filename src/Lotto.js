// 오프젝트
const Validator = require('./utils/Validator');

class Lotto {
  #numbers;

  constructor (numbers) {
    this.#numbers = Validator.validateLotto(numbers);
  }

  getLotto () {
    return this.#numbers;
  }

  hasDigit (digits) {
    return this.#numbers.includes(digits);
  }

  calcMatchLotto (winningLotto) {
    const count = winningLotto.reduce((count, digit) => {
      if (this.#numbers.includes(digit)) {
        return count += 1;
      }
      return count;
    }, 0);
    return count;
  }
}

module.exports = Lotto;
