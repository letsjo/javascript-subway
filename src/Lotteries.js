// 모듈
const { Random } = require('@woowacourse/mission-utils');
// 오브젝트
const Lotto = require('./Lotto');

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

  get winningLotto () {
    return this._winningLotto;
  }

  set winningLotto (numbers) {
    this._winningLotto = new Lotto(numbers);
  }
}

module.exports = Lotteries;
