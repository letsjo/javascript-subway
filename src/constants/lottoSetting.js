const LOTTO_INFO = Object.freeze({
  PRICE: 1000,
  DIGIT_LENGTH: 6,
  MIN_DIGIT: 1,
  MAX_DIGIT: 45,
  ZERO_CHANGE: 0,
});

const PRIZE_CORRECT_COUNT = Object.freeze({
  rankFirst: 6,
  rankSecond: 5,
  rankThird: 5,
  rankFourth: 4,
  rankFifth: 3,
});

const CORRECT_PRIZE_NAME = Object.freeze({
  6: 'rankFirst',
  5: 'rankThird',
  4: 'rankFourth',
  3: 'rankFifth',
});

const PRIZE_MONEY = Object.freeze({
  rankFirst: 2000000000,
  rankSecond: 30000000,
  rankThird: 1500000,
  rankFourth: 50000,
  rankFifth: 5000,
});

module.exports = {
  LOTTO_INFO,
  PRIZE_MONEY,
  PRIZE_CORRECT_COUNT,
  CORRECT_PRIZE_NAME,
};
