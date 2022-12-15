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

  getNavigatePath(departure, arrival) {
    return this.#path.findShortestPath(departure, arrival);
  }

  calculateSize(paths) {
    let totalDistance = 0;
    let totalTime = 0;
    for (let index = 0; index < paths.length - 1; index += 1) {
      this.#betweenStation.forEach(section => {
        if ((section.start === paths[index] && section.end === paths[index + 1])
          || (section.start === paths[index + 1] && section.end === paths[index])) {
          totalDistance += section.distance;
          totalTime += section.time;
        }
      });
    }
    return { totalDistance, totalTime };
  }
}

module.exports = StationMap;
