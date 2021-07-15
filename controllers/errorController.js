// Incase we want to add custom erros, we will use AppError instance
// const AppError = require("./../utils/appError");

const sendErrorDev = (err, req, res) => {
  // A) API
  if (req.originalUrl.startsWith("/api")) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
      isJoi: err.type ? true : false,
    });
  }

  // B) Route isn't exist - handled in app.js
  console.error("ERROR 💥", err);
};

/* Whenever express or joi catches errors - we will handle them in this middleware
  it is divided into development / production erros
*/
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  sendErrorDev(err, req, res);
};
