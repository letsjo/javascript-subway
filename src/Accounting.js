const Validator = require('./utils/Validator');

class Accounting {
  get money () {
    return this._money;
  }

  set money (value) {
    if (Validator.isValidateMoney(value)) this._money = value;
  }

  calcProfitRate (totalPrizeMoney) {
    const profit = (totalPrizeMoney / this.money) * 100;
    return parseFloat(Math.round(profit * 100) / 100).toFixed(1);
  }
}

module.exports = Accounting;
