const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/subwayMessage');

const InputView = {
  readDeparture(callback) {
    Console.readLine(MESSAGE.PROCESS.inputDeparture, callback);
  },

  readArrival(callback) {
    Console.readLine(MESSAGE.PROCESS.inputArrival, callback);
  },

  readMethod(callback) {
    Console.readLine(MESSAGE.PROCESS.inputNavigateMethod, callback);
  },
};

module.exports = InputView;
