class Navigate {
  #departure;
  #arrival;

  setDeparture(station) {
    this.#departure = station;
  }

  setArrival(station) {
    this.#arrival = station;
  }
}

module.exports = Navigate;
