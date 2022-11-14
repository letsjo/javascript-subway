const Validator = require('./utils/Validator');

class Accounting {
  get money () {
    return this._money;
  }

  set money (value) {
    if (Validator.isValidateMoney(value)) this._money = value;
  }
}

module.exports = Accounting;
