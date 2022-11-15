const { LOTTO_INFO, PRIZE_MONEY, PRIZE_CORRECT_COUNT } = require('./lottoSetting');

const MESSAGE = {
  PROCESS: {
    INPUT_MONEY: '구입금액을 입력해 주세요.',
    SHOW_TICKET_QTY: '개를 구매했습니다.',
    INPUT_WINNING_DIGIT: '당첨 번호를 입력해 주세요.',
    INPUT_BONUS_DIGIT: '보너스 번호를 입력해 주세요.',
  },
  PRIZE: {
    SHOW_PRIZE_NOTICE: '당첨 통계\n---',
    rankFirst: `${PRIZE_CORRECT_COUNT.rankFirst}개 일치 (${PRIZE_MONEY.rankFirst.toLocaleString('ko-KR')}원)`,
    rankSecond: `${PRIZE_CORRECT_COUNT.rankSecond}개 일치, 보너스 볼 일치 (${PRIZE_MONEY.rankSecond.toLocaleString('ko-KR')}원)`,
    rankThird: `${PRIZE_CORRECT_COUNT.rankThird}개 일치 (${PRIZE_MONEY.rankThird.toLocaleString('ko-KR')}원)`,
    rankFourth: `${PRIZE_CORRECT_COUNT.rankFourth}개 일치 (${PRIZE_MONEY.rankFourth.toLocaleString('ko-KR')}원)`,
    rankFifth: `${PRIZE_CORRECT_COUNT.rankFifth}개 일치 (${PRIZE_MONEY.rankFifth.toLocaleString('ko-KR')}원)`,
  },
  ERROR: {
    DUPLICATE_BONUS: '[ERROR] 이미 존재하는 당첨 번호입니다.',
    DUPLICATE_DIGIT: '[ERROR] 로또 번호는 중복된 번호를 입력할 수 없습니다.',
    INVALID_DIGIT: `[ERROR] 로또 번호는 ${LOTTO_INFO.MIN_DIGIT}부터 ${LOTTO_INFO.MAX_DIGIT} 사이의 숫자여야 합니다.`,
    INVALID_LENGTH: `[ERROR] 로또 번호는 ${LOTTO_INFO.DIGIT_LENGTH}개여야 합니다.`,
    REMAIN_CHANGE: `[ERROR] 구입 금액은 ${LOTTO_INFO.PRICE}원 단위로 입력할 수 있습니다.`,
    INVALID_MONEY: '[ERROR] 구입 금액은 0원이상만 입력할 수 있습니다.',
  },
};

module.exports = MESSAGE;
