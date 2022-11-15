const Accounting = require('../src/Accounting');
const MESSAGE = require('../src/constants/lottoMessage');

describe('Accounting 클래스 테스트', () => {
  test('구입 금액이 1000원 미만일 경우 예외가 발생한다.', () => {
    const accounting = new Accounting();
    expect(() => {
      accounting.money = -5000;
    }).toThrow(MESSAGE.ERROR.INVALID_MONEY);
  });

  test('구입 금액이 1000원 미만일 경우 예외가 발생한다.', () => {
    const accounting = new Accounting();
    expect(() => {
      accounting.money = 0;
    }).toThrow(MESSAGE.ERROR.INVALID_MONEY);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('구입 금액은 1000원 단위로 입력할 수 있습니다.', () => {
    const accounting = new Accounting();
    expect(() => {
      accounting.money = 1005;
    }).toThrow(MESSAGE.ERROR.REMAIN_CHANGE);
  });
});
