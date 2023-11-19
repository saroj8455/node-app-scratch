import { StatusCodes } from 'http-status-codes';
import asyncHandeler from 'express-async-handler';
import { User } from '../models/user.model.js';

export const checkUser = asyncHandeler((req, res, next) => {
  res.status(StatusCodes.NOT_FOUND);
  throw new Error('Something went wrong');
});

export const home = asyncHandeler(async (req, res, next) => {
  res.status(StatusCodes.OK).jsonp({
    message: 'User Api called.',
  });
});

export const createUser = asyncHandeler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(StatusCodes.UNSUPPORTED_MEDIA_TYPE).jsonp({
      message: "Required filed can't be empty",
    });
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(StatusCodes.CONFLICT).jsonp({
      message: `Email ${email} already exists`,
    });
  }
  try {
    const newUser = await User.create({ name, email, password });
    return res.status(StatusCodes.CREATED).jsonp({
      id: newUser._id,
      name: newUser.name,
    });
  } catch (error) {
    return res.status(StatusCodes.EXPECTATION_FAILED).jsonp({
      error: error.message,
    });
  }
});
