const Dijkstra = require('./utils/Dijkstra');
const { PROCESS_CONSTANTS, LINES } = require('./constants/subwaySetting');

class StationMap {
  #path = new Dijkstra();
  #option;
  #betweenStation = [];

  constructor(option) {
    this.#option = option === PROCESS_CONSTANTS.shortestDistance ? 'distance' : 'time';
    LINES.forEach(line => {
      line.sections.forEach(section => {
        this.#setPath(section.start, section.end, section[this.#option]);
        this.#betweenStation.push(section);
      });
    });
  }

  #setPath(start, end, size) {
    this.#path.addEdge(start, end, size);
  }
}

module.exports = StationMap;
