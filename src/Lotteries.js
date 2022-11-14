// 모듈
const { Random } = require('@woowacourse/mission-utils');
// 상수
const MESSAGE = require('./constants/lottoMessage');
const { PRIZE_AMOUNT } = require('./constants/lottoSetting');
// 오브젝트
const Lotto = require('./Lotto');
const Validator = require('./utils/Validator');

class Lotteries {
  #storage;

  constructor () {
    this.#storage = [];
    this.rankGroup = {
      Rank1: 0,
      Rank2: 0,
      Rank3: 0,
      Rank4: 0,
      Rank5: 0,
    };
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

  getRankGroup () {
    this.#storage.forEach((lotto) => {
      const correct = lotto.calcMatchLotto(this.winningLotto.getLotto());
      if (correct === 6) return this.rankGroup.Rank1 += 1;
      if (correct === 5 && lotto.hasDigit(this.bonusLotto)) return this.rankGroup.Rank2 += 1;
      if (correct === 5) return this.rankGroup.Rank3 += 1;
      if (correct === 4) return this.rankGroup.Rank4 += 1;
      if (correct === 3) return this.rankGroup.Rank5 += 1;
    });
    return Object.entries(this.rankGroup);
  }

  getTotalPrize () {
    return Object.entries(this.rankGroup)
      .reduce((sumPrize, [rank, qty]) => sumPrize + (PRIZE_AMOUNT[rank] * qty), 0);
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
