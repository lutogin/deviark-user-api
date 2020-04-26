const UserController = require('./users.controller');
const joinValidation = require('../../../lib/decorators/join-validation');
const requestRules = require('./validations/validation.request');

const validationMethods = {
  requestRules,
};

const currentUsersController = new (joinValidation(validationMethods)(UserController))();

module.exports = currentUsersController;
