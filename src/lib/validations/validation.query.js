async function validationQuery(schema, data) {
  return schema.validateAsync(data);
}

module.exports = validationQuery;
