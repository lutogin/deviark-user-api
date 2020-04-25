function makeControllerValidation(validationRules) {
  return (ControllerClass) => {
    class RequestValidationWrapper extends ControllerClass {
      constructor() {
        super();
        this.validationRules = validationRules;
      }
    }

    return RequestValidationWrapper;
  };
}

module.exports = makeControllerValidation;
