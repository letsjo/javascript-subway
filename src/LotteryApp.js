// 모듈
const { Console } = require('@woowacourse/mission-utils');
// 상수
const MESSAGE = require('./constants/lottoMessage');
const { LOTTO_INFO } = require('./constants/lottoSetting');
// 오브젝트
const Lotteries = require('./Lotteries');
const Validator = require('./Validator');
const Accounting = require('./Accounting');

class LotteryApp {
  constructor () {
    this.lotteries = new Lotteries();
    this.accounting = new Accounting();
  }
  start () {
    this.askMoney();
  }

  askMoney () {
    Console.print(MESSAGE.PROCESS.INPUT_MONEY);
    Console.readLine('', this.purchaseLottos.bind(this));
  }

  purchaseLottos (money) {
    this.accounting.money = money;
    let leftMoney = money;
    while (leftMoney > 0) {
      leftMoney -= LOTTO_INFO.PRICE;
      this.lotteries.purchaseAuto();
    }
    this.showLottos();
  }

  showLottos () {
    Console.print(`\n${this.lotteries.getSaleQty()}${MESSAGE.PROCESS.SHOW_TICKET_QTY}`);
    const printLotto = this.lotteries.getStorage()
      .reduce((record, lotto) => record += `[${[...lotto.getLotto().sort(((front, back) => front - back))].join(', ')}]\n`, '');
    Console.print(printLotto);
  }
}

module.exports = LotteryApp;
