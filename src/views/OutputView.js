const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/subwayMessage');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.PROCESS.appStart);
  },
};

module.exports = OutputView;
