const { getKey } = require("./object");

function getMutators(schema) {
  const appMutators = [];
  getKey(schema).forEach(skey => {
    let mutators = schema[skey].mutators;
    getKey(mutators).forEach(mkey => appMutators.push(`/${skey}${mkey}`));
  });
  return appMutators;
}

function getQueries(schema) {
  const appQueries = [];
  getKey(schema).forEach(skey => {
    let queries = schema[skey].queries;
    getKey(queries).forEach(qkey => appQueries.push(`/${skey}${qkey}`));
  });
  return appQueries;
}

function getMutatorHandler(schema, mutator) {
  let handler;
  getKey(schema).forEach(skey => {
    const mutators = schema[skey].mutators;
    mutators.find(mut => `/${skey}${getKey(mut, true)}` === mutator);
  });
  return handler;
}

module.exports = {
  getMutators,
  getQueries
};
