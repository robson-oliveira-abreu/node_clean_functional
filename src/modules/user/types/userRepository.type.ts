import { DeleteResult, UpdateResult } from "typeorm";
import { User } from "../entity/user.entity";
import { CreateUserProps } from "./createUserProps";
import { UpdateUserProps } from "./updateUserProps";

export type UserRepository = {
    find: (id: string) => Promise<User | null>;
    list: () => Promise<User[] | null>;
    create: (newUser: CreateUserProps) => Promise<User | null>;
    update: (id: string, userData: UpdateUserProps) => Promise<UpdateResult>;
    remove: (id: string) => Promise<DeleteResult>;
}