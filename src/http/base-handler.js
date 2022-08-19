class BaseHandler {
  successResponse(res, message = 'Success', data = null, statusCode = 200) {
    return res.status(statusCode)
      .send({
        code: statusCode,
        message: message,
        data: data
      });
  }
  
  badRequest(res, message = 'Bad Request', data = null) {
    const statusCode = 400;
    return res.status(statusCode)
      .send({
        code: statusCode,
        message: message,
        data: data
      });
  }
  
  unauthorized(res, message = 'Unauthorized') {
    const statusCode = 401;
    return res.status(statusCode)
      .send({
        code: statusCode,
        message: message
      });
  }
  
  forbidden(res, message = 'Forbidden') {
    const statusCode = 403;
    return res.status(statusCode)
      .send({
        code: statusCode,
        message: message
      });
  }
  
  notFoundResponse(res, message = 'Not Found') {
    const statusCode = 404;
    return res.status(statusCode)
      .send({
        code: statusCode,
        message: message
      });
  }
  
  unprocessableEntityResponse(res, message, validation) {
    const statusCode = 422;
    return res.status(statusCode)
      .send({
        code: statusCode,
        message: message,
        data: validation
      });
  }
  
  internalErrorResponse(res, message, error) {
    const statusCode = 500;
    return res.status(statusCode)
      .send({
        code: statusCode,
        message: message,
        error: process.env.DEBUG === 'true' ? error.stack : 'error stack can be showed'
      });
  }
}

module.exports = BaseHandler;
