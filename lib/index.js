const Request = require("./engine/request");
const Subscriber = require("./engine/subscriber");
const Interceptor = require("./engine/interceptor");
const Dispatcher = require("./engine/dispatcher");
const Entity = require("./types/entity");

class Lib {
  constructor(app) {
    this.entities = new Array();
  }

  define(name) {
    const entity = new Entity(name);
    this.entities.push(entity);
    return entity;
  }
}
