import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { checkUser, home, createUser } from '../controllers/user.controller.js';

const UserRouter = express.Router();

UserRouter.get('/', home);
UserRouter.post('/', createUser);

export default UserRouter;
