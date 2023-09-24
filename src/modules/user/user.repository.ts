import { CreateUserProps } from "./types/createUserProps";
import { UpdateUserProps } from "./types/updateUserProps";
import { UserRepository } from "./types/userRepository.type";
import { UserRepositoryProps } from "./types/userRepositoryProps.type";

function userRepository({ UserRepository }: UserRepositoryProps): UserRepository {

    function find(id: string): ReturnType<UserRepository['find']> {
        return UserRepository.findOne({ where: { id } })
    }

    function list(): ReturnType<UserRepository['list']> {
        return UserRepository.find();
    }

    function create(newUser: CreateUserProps): ReturnType<UserRepository['create']> {
        return UserRepository.save(newUser)
    }

    function update(id: string, userData: UpdateUserProps): ReturnType<UserRepository['update']> {
        return UserRepository.update(id, userData);
    }

    function remove(id: string): ReturnType<UserRepository['remove']> {
        return UserRepository.delete(id)
    }

    return {
        find,
        list,
        create,
        update,
        remove,
    }
}

export { userRepository }