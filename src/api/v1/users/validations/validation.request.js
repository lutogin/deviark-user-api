const Joi = require('@hapi/joi');
const userController = require('../users.controller');
const schema = require('./configs/joi-schemas');

const createRequestValidation = Joi.object({
  name: schema.name,
  email: schema.email,
  password: schema.password
});

const validations = {
  [userController.prototype.create.name]: createRequestValidation
};

module.exports = validations;
