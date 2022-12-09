const Accounting = require('../src/Accounting');
const MESSAGE = require('../src/constants/lottoMessage');

describe('Accounting 클래스 테스트', () => {
  test('구입 금액이 1000원 미만일 경우 예외가 발생한다.', () => {
    const accounting = new Accounting();
    expect(() => {
      accounting.setMoney(-5000);
    }).toThrow(MESSAGE.ERROR.INVALID_MONEY);
  });

  test('구입 금액이 1000원 미만일 경우 예외가 발생한다.', () => {
    const accounting = new Accounting();
    expect(() => {
      accounting.setMoney(0);
    }).toThrow(MESSAGE.ERROR.INVALID_MONEY);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('구입 금액은 1000원 단위로 입력할 수 있습니다.', () => {
    const accounting = new Accounting();
    expect(() => {
      accounting.setMoney(1005);
    }).toThrow(MESSAGE.ERROR.REMAIN_CHANGE);
  });

  test('수익률 소수점 한자리까지 표기 테스트', () => {
    const accounting = new Accounting();
    accounting.setMoney(6000);
    expect(accounting.calcProfitRate(30000)).toEqual('500.0');
  });

  test('수익률 소수점 둘째 자리에서 반올림 테스트(1666.666)', () => {
    const accounting = new Accounting();
    accounting.setMoney(3000);
    expect(accounting.calcProfitRate(50000)).toEqual('1666.7');
  });

  test('수익률 소수점 둘째 자리에서 반올림 테스트(833.333)', () => {
    const accounting = new Accounting();
    accounting.setMoney(6000);
    expect(accounting.calcProfitRate(50000)).toEqual('833.3');
  });
});
