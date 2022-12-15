const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/subwayMessage');

const InputView = {
  readDeparture(callback) {
    Console.readLine(MESSAGE.PROCESS.inputDeparture, callback);
  },
};

module.exports = InputView;
