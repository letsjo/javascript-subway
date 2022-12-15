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
};

module.exports = OutputView;
