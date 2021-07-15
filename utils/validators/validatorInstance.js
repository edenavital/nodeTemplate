// Validator instance - use as validation middleware - wrapping joi schemas

const validator = require("express-joi-validation").createValidator({
  // Send errors to the global error middleware
  passError: true,
});

module.exports = validator;
