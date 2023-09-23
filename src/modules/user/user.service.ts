import { User } from "./types/userEntity.type";
import { UserService } from "./types/userService.type";
import { UserServiceProps } from "./types/userServiceProps.type";

function userService({ userEntity }: UserServiceProps): UserService {
    let users: User[] = [];

    async function find(id: number): Promise<User | undefined> {
        const _user = users.find(u => u.id === id);
        return _user;
    };

    async function list(): Promise<User[]> {
        return users;
    };

    async function create(_user: Omit<User, 'id'>): Promise<User> {
        const newUser = userEntity(_user.name);

        users.push(newUser);

        return newUser;
    };

    return {
        find,
        list,
        create,
    }
}

export { userService };