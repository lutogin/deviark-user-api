const HTTP_STATUS = require('http-status-codes');

const getErrorCode = error => {
  const MONGO_ERROR_NAME = 'MongoError';

  if (error.name === MONGO_ERROR_NAME) {
    return HTTP_STATUS.INTERNAL_SERVER_ERROR;
  }

  return error.status
    || error.code
    || HTTP_STATUS.INTERNAL_SERVER_ERROR;
};

const getCommonErrorResponseObject = error => ({
    code: getErrorCode(error),
    name: error.name,
    message: error.message,
    payload: error.payload,
    service: 'deviark-api',
});


function errorCatcher(error, req, res, next) {
  const errorResponseObject = getCommonErrorResponseObject(error);
  const code = getErrorCode(error);

  res.status(code).json({ error: errorResponseObject });

  return next(error);
}

module.exports = errorCatcher;
