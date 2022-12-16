const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/subwayMessage');

const InputView = {
  readDeparture(callback) {
    Console.readLine(MESSAGE.process.inputDeparture, callback);
  },

  readArrival(callback) {
    Console.readLine(MESSAGE.process.inputArrival, callback);
  },

  readMethod(callback) {
    Console.readLine(MESSAGE.process.inputNavigateMethod, callback);
  },

  readRetry(callback) {
    Console.readLine(MESSAGE.process.inputRetry, callback);
  },
};

module.exports = InputView;
