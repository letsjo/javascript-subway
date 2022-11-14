// 모듈
const { Console } = require('@woowacourse/mission-utils');
// 상수
const MESSAGE = require('./constants/lottoMessage');
const { LOTTO_INFO } = require('./constants/lottoSetting');
// 오브젝트
const Lotteries = require('./Lotteries');
const Calc = require('./utils/Calc');
const Validator = require('./utils/Validator');
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
    this.askWinningDigit();
  }

  askWinningDigit () {
    Console.print(`${MESSAGE.PROCESS.INPUT_WINNING_DIGIT}`);
    Console.readLine('', (digits) => {
      this.lotteries.winningLotto = digits.split(',').map(Number);
      this.askBonusDigit();
    });
  }

  askBonusDigit () {
    Console.print(`\n${MESSAGE.PROCESS.INPUT_BONUS_DIGIT}`);
    Console.readLine('', (Digits) => {
      this.lotteries.bonusLotto = Number(Digits);
      this.showPrize();
      this.showProfit();
      Console.close();
    });
  }

  showPrize () {
    Console.print(`\n${MESSAGE.PROCESS.SHOW_PRIZE_NOTICE}`);
    Object.entries(this.lotteries.getPrizeGroup()).forEach(([rank, qty]) => {
      Console.print(Calc.prizeNotice(rank, qty));
    });
  }

  showProfit () {
    Console.print(`${Calc.profitNotice(Math.round(this.lotteries.getProfit() / this.accounting.money * 1000) / 10)}`);
  }

  showLottos () {
    Console.print(`\n${this.lotteries.getSaleQty()}${MESSAGE.PROCESS.SHOW_TICKET_QTY}`);
    const printLotto = this.lotteries.getStorage()
      .reduce((record, lotto) => record += `[${[...lotto.getLotto().sort(((front, back) => front - back))].join(', ')}]\n`, '');
    Console.print(printLotto);
  }
}

module.exports = LotteryApp;
