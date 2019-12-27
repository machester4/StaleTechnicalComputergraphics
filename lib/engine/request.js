const md5 = require("md5");
const State = require("../core/state");

class Request extends State {
  constructor(request, handler) {
    super();
    this.path = path;
    this.handler = handler;
  }

  // Update the state.
  // Calls the update method on each observer.
  async update() {   
    // funcionara como midleware, ejecutara el handler del mutator y disparara la notificacion
    // a                     
    const response = await this.handler(this.request);
    this.hash = md5(JSON.stringify(response));
    this.notify(this.hash);
  }

  // Get the state.
  get() {
    return this.state;
  }
}