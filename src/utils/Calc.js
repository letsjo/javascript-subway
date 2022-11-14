class Calc {
  static printLotto (record, lotto) {
    return record += `[${[...lotto.getLotto().sort(((front, back) => front - back))].join(', ')}]\n`;
  }
}

module.exports = Calc;
