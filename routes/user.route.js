import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { checkUser } from '../controllers/user.controller.js';

const UserRouter = express.Router();

UserRouter.get('/', checkUser);

export default UserRouter;
