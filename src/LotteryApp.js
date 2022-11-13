// 모듈
const { Console } = require('@woowacourse/mission-utils');
// 상수
const MESSAGE = require('./constants/lottoMessage');
const { LOTTO_INFO } = require('./constants/lottoSetting');
// 오브젝트
const Lotteries = require('./Lotteries');
const Validator = require('./Validator');
class LotteryApp {
  #money;
  constructor () {
    this.lotteries = new Lotteries();
  }
  start () {
    this.askMoney();
  }

  askMoney () {
    Console.print(MESSAGE.PROCESS.INPUT_MONEY);
    Console.readLine('', this.purchaseLottos.bind(this));
  }

  purchaseLottos (money) {
    if (Validator.isRemain(money)) throw new Error(MESSAGE.ERROR.REMAIN_CHANGE);
    if (Validator.isUnderZero(money)) throw new Error(MESSAGE.ERROR.INVALID_MONEY);
  }
}

module.exports = LotteryApp;
