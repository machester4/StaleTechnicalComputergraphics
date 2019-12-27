function getKey(obj, first) {
  const keys = Object.keys(obj);
  return first ? keys[0] : keys;
}

module.exports = {
  getKey
};
