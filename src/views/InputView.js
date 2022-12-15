const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/subwayMessage');

const InputView = {
  readDeparture(callback) {
    Console.readLine(MESSAGE.PROCESS.inputDeparture, callback);
  },

  readArrival(callback) {
    Console.readLine(MESSAGE.PROCESS.inputArrival, callback);
  },
};

module.exports = InputView;
