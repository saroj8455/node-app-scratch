import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { checkUser, home, createUser } from '../controllers/user.controller.js';
import { handelLogin } from '../controllers/auth.controller.js';

const UserRouter = express.Router();

UserRouter.get('/', home);
UserRouter.post('/', createUser);
UserRouter.post('/auth', handelLogin);

export default UserRouter;
