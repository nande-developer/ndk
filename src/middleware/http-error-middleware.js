const BaseHandler = require('../http/base-handler');

class ErrorMiddleware extends BaseHandler {
  handleMiddleware(err, req, res, next) {
    if (err) {
      switch (err.status) {
        case 400: return super.badRequest(res)
        case 401: return super.unauthorized(res)
        case 403: return super.forbidden(res)
        case 404: return super.notFoundResponse(res, err.message)
        case 422: return super.unprocessableEntityResponse(res, err.message, err.details)
        default: return super.internalErrorResponse(res, err.message, err)
      }
    }
    return next();
  }
}

module.exports = new ErrorMiddleware;
