import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';

export const verifyJwt = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader)
    return res.status(StatusCodes.UNAUTHORIZED).jsonp({
      message: 'Auth header required.',
    });
  // Bearer token
  // console.log(authHeader);
  const userToken = authHeader.split(' ')[1];
  jwt.verify(userToken, process.env.ACCESS_SECRET, (error, decode) => {
    if (error) return res.status(403).jsonp({ message: 'UnAuthorize' });
    req.username = decode.username;
    next();
  });
};
