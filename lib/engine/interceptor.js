const { getMutators, getQueries } = require("../helpers/schema");
const { merge } = require("../helpers/request");

class Interceptor {
  constructor(queries) {
    this.queries = queries;
  }

  getHandler(req) {}

  async bubling(req, res, next) {
    const handler = this.getHandler(req);

    const response = await handler();
    req.json();
    next();
  }
}
