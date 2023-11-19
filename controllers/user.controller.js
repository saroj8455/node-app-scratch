import { StatusCodes } from 'http-status-codes';
import asyncHandeler from 'express-async-handler';

export const checkUser = asyncHandeler((req, res, next) => {
  res.status(StatusCodes.NOT_FOUND);
  throw new Error('Something went wrong');
});
