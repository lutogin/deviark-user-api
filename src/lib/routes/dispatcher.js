const collectData = require('../../middlwares/collect-data');
const queryValidation = require('../validations/validation.query');

/**
 * Middleware for collect data check validation.
 *
 * @param controller {class} Instance controller.
 * @param controllerMethodName {string} Current method name.
 * @return {function(...[*]=)}
 */
const dispatcher = (controller, controllerMethodName) => async (req, res, next) => {
  try {
    req.data = collectData(req);
    req.token = req.headers.authorization || null;

    const { requestRules } = controller.validationRules;

    if (requestRules && requestRules[controllerMethodName]) {
      req.data = await queryValidation(requestRules[controllerMethodName], req.data);
    }

    return await controller[controllerMethodName](req, res, next);
  } catch (error) {
    return next(error);
  }
};

module.exports = dispatcher;
