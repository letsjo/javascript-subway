const { LOTTO_INFO, PRIZE_AMOUNT, PRIZE_CORRECT_COUNT } = require('./lottoSetting');

const MESSAGE = {
  PROCESS: {
    INPUT_MONEY: '구입금액을 입력해 주세요.',
    SHOW_TICKET_QTY: '개를 구매했습니다.',
    INPUT_WINNING_DIGIT: '당첨 번호를 입력해 주세요.',
    INPUT_BONUS_DIGIT: '보너스 번호를 입력해 주세요.',
  },
  PRIZE: {
    SHOW_PRIZE_NOTICE: '당첨 통계\n---',
    Rank1: `${PRIZE_CORRECT_COUNT.Rank1}개 일치 (${PRIZE_AMOUNT.Rank1.toLocaleString('ko-KR')}원)`,
    Rank2: `${PRIZE_CORRECT_COUNT.Rank2}개 일치, 보너스 볼 일치 (${PRIZE_AMOUNT.Rank2.toLocaleString('ko-KR')}원)`,
    Rank3: `${PRIZE_CORRECT_COUNT.Rank3}개 일치 (${PRIZE_AMOUNT.Rank3.toLocaleString('ko-KR')}원)`,
    Rank4: `${PRIZE_CORRECT_COUNT.Rank4}개 일치 (${PRIZE_AMOUNT.Rank4.toLocaleString('ko-KR')}원)`,
    Rank5: `${PRIZE_CORRECT_COUNT.Rank5}개 일치 (${PRIZE_AMOUNT.Rank5.toLocaleString('ko-KR')}원)`,
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
