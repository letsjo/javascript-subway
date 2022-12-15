const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/subwayMessage');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.PROCESS.appStart);
  },

  printResult(navigate, method) {
    Console.print(`${MESSAGE.PROCESS.resultNotice
      + (method === 'D' ? MESSAGE.PROCESS.resultShortestDistance : MESSAGE.PROCESS.resultShortestTime) + MESSAGE.PROCESS.resultDistance
      + navigate.getDistance() + MESSAGE.PROCESS.unitDistance + MESSAGE.PROCESS.resultTime
      + navigate.getTime() + MESSAGE.PROCESS.unitTime + MESSAGE.PROCESS.resultPath + navigate.getPath()}\n`);
  },

  printQuit() {
    Console.print(MESSAGE.PROCESS.quitNotice);
    Console.close();
  },

  printError(error) {
    Console.print(error.message);
  },
};

module.exports = OutputView;
