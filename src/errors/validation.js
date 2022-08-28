const ErrorHTTP = require('./http');

class ErrorValidation extends ErrorHTTP {
  constructor(message, details) {
    super(message, details, 422);
  }
}

module.exports = ErrorValidation;

