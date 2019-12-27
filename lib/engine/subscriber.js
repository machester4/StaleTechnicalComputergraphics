const Observer = require("../core/observer");

class Subscriber extends Observer {
  constructor(path, params, headers) {
    this.hash;
    this.path = path;
    this.params = params;
    this.headers = headers;
  }

  // Override update method
  update(hash) {
    // aca me llega el nuevo hash
  }
}
