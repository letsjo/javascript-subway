const StationMap = require('./StationMap');

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
    this.#arrival = station;
  }

  setStationMap(method) {
    this.#stationMap = new StationMap(method);
  }

  makeShortestPath() {
    this.#paths = this.#stationMap.getNavigatePath(this.#departure, this.#arrival);
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
