import express from 'express';
import * as dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';
import UserRouter from './routes/user.route.js';
import { Not_Found, errorHandeler } from './middleware/error.middleware.js';
import { connectToDB } from './config/db.connection.js';
import { verifyJwt } from './middleware/veryfyJwt.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Connection
connectToDB();

// Routes
app.use('/api/users', UserRouter);

app.get('/', verifyJwt, (req, res, next) => {
  const verifiedUserId = req.username;
  res.status(StatusCodes.OK).jsonp({
    message: 'Server is running under 5001.',
    envFile: process.env.MONGO,
    verifiedUserId,
  });
});

// Serve static files
app.use('/home', express.static(path.join(path.resolve(), '/views/')));

app.get('/api/gen-token', (req, res, next) => {
  res.status(StatusCodes.OK).jsonp({
    message: 'Generate Token',
  });
});

// Error handeler middleware
app.use(Not_Found);
app.use(errorHandeler);

app.listen(PORT, () => {
  console.log(`Server is running under http://localhost:${PORT}`);
});
