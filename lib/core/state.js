const Subject = require("./subject");

class State extends Subject {
  constructor() {
    super();
    this.state = "";
  }

  // Update the state.
  // Calls the update method on each observer.
  update(data = {}) {
    this.state = data;
    this.notify(this.state);
  }

  // Get the state.
  get() {
    return this.state;
  }
}

module.exports = State;
