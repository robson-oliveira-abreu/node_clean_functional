import { HttpError } from "../../commons/http/HttpError";
import { HttpStatus } from "../../commons/http/HttpStatus";
import { CreateUserProps } from "./types/createUserProps";
import { UpdateUserProps } from "./types/updateUserProps";
import { UserService } from "./types/userService.type";
import { UserServiceProps } from "./types/userServiceProps.type";

function userService({ userRepository }: UserServiceProps): UserService {

    async function find(id: string): ReturnType<UserService['find']> {
        if (!id) {
            throw new HttpError(HttpStatus.BadRequest, "id must be provided");
        }

        const _user = await userRepository.find(id);

        if (!_user) {
            throw new HttpError(HttpStatus.NotFound, "User not found");
        }

        return _user;
    };

    async function list(): ReturnType<UserService['list']> {
        const users = await userRepository.list();
        return users;
    };

    async function create(_user: CreateUserProps): ReturnType<UserService['create']> {

        if (!_user.name) {
            throw new HttpError(HttpStatus.BadRequest, "Invalid user name");
        }

        const newUser = {
            name: _user.name,
        };

        const createdUser = await userRepository.create(newUser);

        return createdUser;
    };

    async function update(id: string, updateUser: UpdateUserProps): ReturnType<UserService['update']> {
        if (!id) {
            throw new HttpError(HttpStatus.BadRequest, "id must be provided");
        } 
        
        const updatedUser = updateUser as UpdateUserProps;
        
        const result = await userRepository.update(id, updatedUser);

        if(!result.affected) {
            throw new HttpError(HttpStatus.InternalServerError, "Could not update user");
        }
        
        return result;
    }

    async function remove(id: string): ReturnType<UserService['remove']> {
        if (!id) {
            throw new HttpError(HttpStatus.BadRequest, "id must be provided");
        }

        return await userRepository.remove(id);
    }

    return {
        find,
        list,
        create,
        update,
        remove,
    }
}

export { userService };