const LOTTO_INFO = Object.freeze({
  PRICE: 1000,
  DIGIT_LENGTH: 6,
  MIN_DIGIT: 1,
  MAX_DIGIT: 45,
  ZERO_CHANGE: 0,
});

const PRIZE_CORRECT_COUNT = Object.freeze({
  Rank1: 6,
  Rank2: 5,
  Rank3: 5,
  Rank4: 4,
  Rank5: 3,
});

const PRIZE_AMOUNT = Object.freeze({
  Rank1: 2000000000,
  Rank2: 30000000,
  Rank3: 1500000,
  Rank4: 50000,
  Rank5: 5000,
});

module.exports = {
  LOTTO_INFO,
  PRIZE_AMOUNT,
  PRIZE_CORRECT_COUNT,
};
