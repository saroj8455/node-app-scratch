import { StatusCodes } from 'http-status-codes';
import asyncHandeler from 'express-async-handler';
import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import jwt from 'jsonwebtoken';

export const handelLogin = asyncHandeler(async (req, res, next) => {
  const { email, password } = req.body;

  const checkUserExist = await User.findOne({ email });

  if (!checkUserExist)
    return res.status(StatusCodes.NOT_FOUND).jsonp({
      status: false,
      message: 'Email or Password is incorrect',
    });
  // Check encrypt password with userInput password
  const matchPwd = await bcrypt.compare(password, checkUserExist.password);

  if (matchPwd) {
    // Create JWT token here
    const accessToken = jwt.sign(
      { username: checkUserExist._id },
      process.env.ACCESS_SECRET,
      {
        expiresIn: '5m',
      }
    );
    // res.cookie('jwt', accessToken, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    return res.status(StatusCodes.ACCEPTED).jsonp({
      message: 'OK',
      accessToken,
    });
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).jsonp({
      message: 'Invalid',
    });
  }
});
