const { Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/lottoMessage');
const {
  LOTTO_INFO,
  PRIZE_MONEY,
  CORRECT_PRIZE_NAME,
} = require('./constants/lottoSetting');

const Lotto = require('./Lotto');
const Validator = require('./utils/Validator');

class Lotteries {
  #storage;
  #bonusLotto;
  #rankGroup;
  #winningLotto;

  constructor() {
    this.#storage = [];
    this.totalPrize;
    this.#rankGroup = {
      rankFifth: 0,
      rankFourth: 0,
      rankThird: 0,
      rankSecond: 0,
      rankFirst: 0,
    };
  }

  getBonusLotto() {
    return this.#bonusLotto;
  }

  setBonusLotto(digit) {
    if (this.#winningLotto.getLotto().includes(digit)) {
      throw new Error(MESSAGE.ERROR.DUPLICATE_BONUS);
    }

    this.#bonusLotto = Validator.validateBonusRange(digit);
  }

  getWinningLotto() {
    return this.#winningLotto;
  }

  setWinningLotto(numbers) {
    this.#winningLotto = new Lotto(numbers);
  }

  getStorage() {
    return this.#storage;
  }

  getSaleantity() {
    return this.#storage.length;
  }

  getRankGroup() {
    return this.#rankGroup;
  }

  getTotalPrize() {
    return this.totalPrize;
  }

  purchaseAuto() {
    const { MIN_DIGIT, MAX_DIGIT, DIGIT_LENGTH } = LOTTO_INFO;
    this.#storage.push(
      new Lotto(
        Random.pickUniqueNumbersInRange(MIN_DIGIT, MAX_DIGIT, DIGIT_LENGTH),
      ),
    );
  }

  makeRankGroup() {
    this.#storage.forEach((lotto) => {
      const correct = lotto.countMatchDigit(this.#winningLotto.getLotto());
      if (CORRECT_PRIZE_NAME[correct] === undefined) return;
      if (correct === 5 && lotto.hasDigit(this.#bonusLotto)) {
        return (this.#rankGroup.rankSecond += 1);
      }

      return (this.#rankGroup[CORRECT_PRIZE_NAME[correct]] += 1);
    });
  }

  calcTotalPrize() {
    this.totalPrize = Object.entries(this.#rankGroup).reduce(
      (sumPrize, [rank, quantity]) => {
        const rankPrize = PRIZE_MONEY[rank] * quantity;
        return sumPrize + rankPrize;
      },

      0,
    );
  }
}

module.exports = Lotteries;
