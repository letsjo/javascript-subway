const { PRIZE_AMOUNT, PRIZE_CORRECT_COUNT } = require('../constants/lottoSetting');

class Calc {
  static prizeNotice (rank, qty)  {
    if (rank === 'Rank2') {
      return `${PRIZE_CORRECT_COUNT[rank]}개 일치, 보너스 볼 일치 (${PRIZE_AMOUNT[rank].toLocaleString('ko-KR')}원) - ${qty}개`;
    }
    return `${PRIZE_CORRECT_COUNT[rank]}개 일치 (${PRIZE_AMOUNT[rank].toLocaleString('ko-KR')}원) - ${qty}개`;
  }
}

module.exports = Calc;
