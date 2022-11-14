const { PRIZE_AMOUNT, PRIZE_CORRECT_COUNT } = require('../constants/lottoSetting');

class Calc {
  static printRank (rank, qty)  {
    if (rank === 'Rank2') {
      return `${PRIZE_CORRECT_COUNT[rank]}개 일치, 보너스 볼 일치 (${PRIZE_AMOUNT[rank].toLocaleString('ko-KR')}원) - ${qty}개`;
    }
    return `${PRIZE_CORRECT_COUNT[rank]}개 일치 (${PRIZE_AMOUNT[rank].toLocaleString('ko-KR')}원) - ${qty}개`;
  }

  static printProfit (PROFIT_RATE) {
    return `총 수익률은 ${PROFIT_RATE}%입니다.`;
  }
}

module.exports = Calc;
