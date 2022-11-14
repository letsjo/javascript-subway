// 모듈
const { Random } = require('@woowacourse/mission-utils');
// 상수
const MESSAGE = require('./constants/lottoMessage');
const { LOTTO_INFO, PRIZE_AMOUNT, CORRECT_COUNT } = require('./constants/lottoSetting');
// 오브젝트
const Lotto = require('./Lotto');
const Validator = require('./utils/Validator');

class Lotteries {
  #storage;

  constructor () {
    this.#storage = [];
    this.rankGroup = {
      Rank5: 0,
      Rank4: 0,
      Rank3: 0,
      Rank2: 0,
      Rank1: 0,
    };
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

  getStorage () {
    return this.#storage;
  }

  getSaleQty () {
    return this.#storage.length;
  }

  purchaseAuto () {
    const { MIN_DIGIT, MAX_DIGIT, DIGIT_LENGTH } = LOTTO_INFO;
    this.#storage.push(new Lotto(
      Random.pickUniqueNumbersInRange(MIN_DIGIT, MAX_DIGIT, DIGIT_LENGTH),
    ));
  }

  getRankGroup () {
    this.#storage.forEach((lotto) => {
      const correct = lotto.calcMatchLotto(this.winningLotto.getLotto());
      if (CORRECT_COUNT[correct] === undefined) return;
      if (correct === 5 && lotto.hasDigit(this.bonusLotto)) return this.rankGroup.Rank2 += 1;
      return this.rankGroup[CORRECT_COUNT[correct]] += 1;
    });
    return Object.entries(this.rankGroup);
  }

  getTotalPrize () {
    return Object.entries(this.rankGroup)
      .reduce((sumPrize, [rank, qty]) => sumPrize + (PRIZE_AMOUNT[rank] * qty), 0);
  }
}

module.exports = Lotteries;
