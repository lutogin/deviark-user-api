const UserController = require('./users.controller');
const makeControllerValidation = require('../../../lib/decorators/controller-validation');
const requestRules = require('./validations/validation.request');

const validationMethods = {
  requestRules,
};

const currentUsersController = new (makeControllerValidation(validationMethods)(UserController))();

module.exports = currentUsersController;
