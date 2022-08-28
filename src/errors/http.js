class ErrorHTTP extends Error {
  constructor(message, details, httpStatusCode = 400) {
    super(message);
    
    Error.captureStackTrace(this, this.constructor);
    
    this.name = this.constructor.name;
    this.status = httpStatusCode;
    this.details = details;
  }
  
  statusCode() {
    return this.status;
  }
  
  validationDetail() {
    return this.details;
  }
}

module.exports = ErrorHTTP;

