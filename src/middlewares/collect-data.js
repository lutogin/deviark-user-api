function collectData(req) {
  return {
    ...req.query,
    ...req.params,
    ...req.body,
  };
}

module.exports = collectData;
