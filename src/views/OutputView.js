const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/subwayMessage');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.process.appStart);
  },

  printResult(navigate, method) {
    Console.print(`${MESSAGE.process.resultNotice
      + (method === 'D' ? MESSAGE.process.resultShortestDistance : MESSAGE.process.resultShortestTime) + MESSAGE.process.resultDistance
      + navigate.getDistance() + MESSAGE.process.unitDistance + MESSAGE.process.resultTime
      + navigate.getTime() + MESSAGE.process.unitTime + MESSAGE.process.resultPath + navigate.getPath()}\n`);
  },

  printQuit() {
    Console.print(MESSAGE.process.quitNotice);
    Console.close();
  },

  printError(error) {
    Console.print(error.message);
  },
};

module.exports = OutputView;
