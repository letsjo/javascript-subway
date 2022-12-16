const deepFreeze = require('../utils/deepFreeze');
const { PROCESS_CONSTANTS } = require('./subwaySetting');

const MESSAGE = deepFreeze({
  process: {
    appStart: '지하철 길찾기를 시작합니다.',
    inputDeparture: '\n출발역을 입력해 주세요.\n',
    inputArrival: '\n도착역을 입력해 주세요.\n',
    inputNavigateMethod: `\n탐색 옵션을 선택해주세요. (최단거리: ${PROCESS_CONSTANTS.shortestDistance}, 최소시간: ${PROCESS_CONSTANTS.minimumTime})\n`,
    inputRetry: `다시 검색할지 여부를 입력해주세요. (재검색: ${PROCESS_CONSTANTS.retrySearch}, 종료: ${PROCESS_CONSTANTS.quitSearch})\n`,
    resultNotice: '\n결과\n',
    resultShortestTime: '- 탐색: 최소시간\n',
    resultShortestDistance: '- 탐색: 최단거리\n',
    resultDistance: '- 총 거리: ',
    unitDistance: ' km\n',
    unitTime: ' 분\n',
    resultTime: '- 총 소요시간: ',
    resultPath: '- 경로: ',
    quitNotice: '\n지하철 길찾기를 종료합니다.',
  },

  error: {
    noDeparture: '[ERROR] 출발역의 입력값이 잘못되었습니다.\n한글, 숫자만 포함한 2글자 이상으로 작성해 주세요.',
    noArrival: '[ERROR] 도착역의 입력값이 잘못되었습니다.\n한글, 숫자만 포함한 2글자 이상으로 작성해 주세요.',
    noStation: '[ERROR] 입력하신 역은 존재하지 않습니다.',
    sameStation: '[ERROR] 출발역과 도착역은 같은 값일 수 없습니다.',
    NotLinked: '[ERROR] 출발역과 도착역이 연결되어 있지 않습니다.',
    noOption: `[ERROR] 탐색 옵션이 잘못되었습니다.\n${PROCESS_CONSTANTS.shortestDistance} 또는 ${PROCESS_CONSTANTS.minimumTime} 만 입력해주세요.`,
    noRetry: `[ERROR] 재시작 입력값이 잘못되었습니다.\n${PROCESS_CONSTANTS.retrySearch} 또는 ${PROCESS_CONSTANTS.quitSearch} 만 입력해주세요.\n`,
  },
});

module.exports = MESSAGE;
