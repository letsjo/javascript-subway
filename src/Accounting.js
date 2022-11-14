const Validator = require('./utils/Validator');

class Accounting {
  get money () {
    return this._money;
  }

  set money (value) {
    if (Validator.isValidateMoney(value)) this._money = value;
  }

  calcProfitRate (totalPrizeMoney) {
    return Math.round(totalPrizeMoney / this.money * 1000) / 10;
  }
}

module.exports = Accounting;
