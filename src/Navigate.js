const StationMap = require('./StationMap');

class Navigate {
  #stationMap;
  #departure;
  #arrival;

  setDeparture(station) {
    this.#departure = station;
  }

  setArrival(station) {
    this.#arrival = station;
  }

  setStationMap(method) {
    this.#stationMap = new StationMap(method);
  }
}

module.exports = Navigate;
