const collectData = require('../../middlewares/collect-data');
const queryValidation = require('../validations/validation.query');

/**
 * Middleware for collect data check validation.
 *
 * @param controller {Class} Instance controller.
 * @param controllerMethodName {String} Current method name.
 * @return {function(...[*]=)}
 */
const dispatcher = (controller, controllerMethodName) => async (req, res, next) => {
  try {
    req.data = collectData(req);
    req.token = req.headers.authorization || null;

    const { requestRules } = controller.validation;

    if (requestRules && requestRules[controllerMethodName]) {
      req.data = await queryValidation(requestRules[controllerMethodName], req.data);
    }

    return await controller[controllerMethodName](req, res, next);
  } catch (error) {
    return next(error);
  }
};

module.exports = dispatcher;
