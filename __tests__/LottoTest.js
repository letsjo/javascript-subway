const Lotto = require('../src/Lotto');
const MESSAGE = require('../src/constants/lottoMessage');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(MESSAGE.ERROR.INVALID_LENGTH);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(MESSAGE.ERROR.DUPLICATE_DIGIT);
  });

  test('로또 번호가 1이상 45이하가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 45, 46, 3, 1]);
    }).toThrow(MESSAGE.ERROR.INVALID_DIGIT);
  });
  // 아래에 추가 테스트 작성 가능
});
