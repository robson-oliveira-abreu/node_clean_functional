import express from 'express'
import {
    userController
} from './user.controller.js';
import { userService } from './user.service.js';
import { userEntity } from './entity/user.entity.js';

const userRouter = express.Router();

const _userService = userService({ userEntity })
const _userController = userController(_userService);

userRouter.get('/', _userController.list);
userRouter.get('/:id', _userController.find);
userRouter.post('/', _userController.create);


export const userModule = userRouter;