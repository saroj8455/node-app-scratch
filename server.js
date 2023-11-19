import express from 'express';
import * as dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';
import UserRouter from './routes/user.route.js';
import { Not_Found, errorHandeler } from './middleware/error.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());

// Routes

app.use('/api/users', UserRouter);

app.use('/', (req, res, next) => {
  res.status(StatusCodes.OK).jsonp({
    message: 'Server is running under 5001.',
    envFile: process.env.MONGO,
  });
});

app.use(Not_Found);
app.use(errorHandeler);
app.listen(PORT, () => {
  console.log(`Server is running under http://localhost:${PORT}`);
});
