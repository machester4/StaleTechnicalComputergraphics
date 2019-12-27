const Query = require("./query");
const Mutator = require("./mutator");

class Entity {
  constructor(name) {
    this.name = name;
    this.queries = new Array();
    this.mutators = new Array();
  }

  addQuery(path, params) {
    this.queries.push(new Query(path, params));
  }

  addMutator(path, params, body) {
    this.mutators.push(new Mutator(path, params, body));
  }
}

module.exports = Entity;
