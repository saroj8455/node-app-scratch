import { StatusCodes } from 'http-status-codes';

export const Not_Found = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(StatusCodes.NOT_FOUND);
  next(error);
};

export const errorHandeler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  if (error.name === 'CasteError' && error.kind === 'ObjectId') {
    statusCode = StatusCodes.NOT_FOUND;
    message = `Resource not found with id:${error.value} for resource name:${error.path}`;
  }
  res.status(statusCode).jsonp({
    message,
    stack: process.env.MONGO_ENV === 'production' ? null : error.stack,
  });
};
