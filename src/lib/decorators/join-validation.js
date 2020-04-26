/**
 * Add to controller class validations attribute.
 *
 * @param validationRules {Object} Validation object.
 * @param validationRules.requestRules {Joi<schema>} Query validation joi schema.
 * @return {function(*): RequestValidationWrapper}
 */
function makeControllerValidation(validationRules) {
  return (ControllerClass) => {
    class RequestValidationWrapper extends ControllerClass {
      constructor() {
        super();
        this.validation = validationRules;
      }
    }

    return RequestValidationWrapper;
  };
}

module.exports = makeControllerValidation;
