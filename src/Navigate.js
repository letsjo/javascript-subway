const StationMap = require('./StationMap');
const Validator = require('./utils/Validator');

class Navigate {
  #stationMap;
  #departure;
  #arrival;
  #paths;
  #distance;
  #time;

  setDeparture(station) {
    this.#departure = station;
  }

  setArrival(station) {
    if (Validator.checkSameStation(this.#departure, station)) {
      return this.#arrival = station;
    }
    return false;
  }

  setStationMap(method) {
    this.#stationMap = new StationMap(method);
  }

  makeShortestPath() {
    const paths = this.#stationMap.getNavigatePath(this.#departure, this.#arrival);
    if (Validator.checkLinkedStation(paths)) {
      return this.#paths = paths;
    }
    return false;
  }

  makeSize() {
    const { totalDistance, totalTime } = this.#stationMap.calculateSize(this.#paths);
    this.#distance = totalDistance;
    this.#time = totalTime;
  }

  getPath() {
    return this.#paths.join(' > ');
  }

  getDistance() {
    return this.#distance;
  }

  getTime() {
    return this.#time;
  }
}

module.exports = Navigate;
