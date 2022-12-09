const Validator = require('./utils/Validator');

class Accounting {
  getMoney() {
    return this.money;
  }

  setMoney(value) {
    if (Validator.isValidateMoney(value)) this.money = value;
  }

  calcProfitRate(totalPrizeMoney) {
    const profit = (totalPrizeMoney / this.money) * 100;
    return parseFloat(Math.round(profit * 100) / 100).toFixed(1);
  }
}

module.exports = Accounting;
