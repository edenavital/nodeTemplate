const express = require('express');
const morgan = require('morgan');
// const path = require("path");

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const basicRouter = require('./routes/basicRouter');

const app = express();

// GLOBAL MIDDLEWARES

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api', basicRouter);

// Error handling - undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling - gets called when joi validation failed, bad requests (400 - 500 status code) or when we pass AppError instance to next middleware (operational error)
app.use(globalErrorHandler);

module.exports = app;
