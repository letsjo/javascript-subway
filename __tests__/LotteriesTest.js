const Lotteries = require('../src/Lotteries');
const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc
    .mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Lotteries 클래스 테스트', () => {
  test('rankGroup 등수 카운팅 테스트 1,2,3등', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [8, 21, 23, 41, 42, 44],
      [8, 21, 23, 41, 42, 45],
    ]);
    const lotteries = new Lotteries();
    lotteries.purchaseAuto();
    lotteries.purchaseAuto();
    lotteries.purchaseAuto();
    lotteries.winningLotto = [8, 21, 23, 41, 42, 43];
    lotteries.bonusLotto = 45;
    lotteries.makeRankGroup();
    expect(lotteries.getRankGroup()).toEqual({
      rankFifth: 0,
      rankFourth: 0,
      rankThird: 1,
      rankSecond: 1,
      rankFirst: 1,
    });
  });

  test('rankGroup 등수 카운팅 테스트 4,5등', () => {
    mockRandoms([
      [8, 21, 23, 39, 40, 45],
      [8, 21, 23, 41, 40, 45],
      [1, 2, 3, 41, 42, 45],
    ]);
    const lotteries = new Lotteries();
    lotteries.purchaseAuto();
    lotteries.purchaseAuto();
    lotteries.purchaseAuto();
    lotteries.winningLotto = [8, 21, 23, 41, 42, 43];
    lotteries.bonusLotto = 45;
    lotteries.makeRankGroup();
    expect(lotteries.getRankGroup()).toEqual({
      rankFifth: 1,
      rankFourth: 1,
      rankThird: 0,
      rankSecond: 0,
      rankFirst: 0,
    });
  });
});
