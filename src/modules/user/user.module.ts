import express from 'express'
import {
    userController
} from './user.controller';
import { userService } from './user.service';
import { User } from './entity/user.entity';
import { database } from '../../database/database';
import { userRepository } from './user.repository';

const userRouter = express.Router();
const _userRepository = userRepository({ UserRepository: database.getRepository(User) });
const _userService = userService({ userRepository: _userRepository })
const _userController = userController(_userService);

userRouter.get('/', _userController.list);
userRouter.get('/:id', _userController.find);
userRouter.post('/', _userController.create);
userRouter.patch('/:id', _userController.update);
userRouter.delete('/:id', _userController.remove);

export { userRouter as userModule };
