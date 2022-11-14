// 모듈
const { Random } = require('@woowacourse/mission-utils');
// 상수
const MESSAGE = require('./constants/lottoMessage');
// 오브젝트
const Lotto = require('./Lotto');
const Validator = require('./Validator');

class Lotteries {
  #storage;

  constructor () {
    this.#storage = [];
  }

  purchaseAuto () {
    this.#storage.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }

  getStorage () {
    return this.#storage;
  }
  getSaleQty () {
    return this.#storage.length;
  }

  get bonusLotto () {
    return this._bonusLotto;
  }

  set bonusLotto (digit) {
    if (this.winningLotto.getLotto().includes(digit)) {
      throw new Error(MESSAGE.ERROR.DUPLICATE_BONUS);
    }
    this._bonusLotto = Validator.validateBonusRange(digit);
  }

  get winningLotto () {
    return this._winningLotto;
  }

  set winningLotto (numbers) {
    this._winningLotto = new Lotto(numbers);
  }
}

module.exports = Lotteries;
