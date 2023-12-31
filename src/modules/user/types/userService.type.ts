import { DeleteResult, UpdateResult } from "typeorm";
import { User } from "../entity/user.entity";
import { CreateUserProps } from "./createUserProps";
import { UpdateUserProps } from "./updateUserProps";

export type UserService = {
    find: (id: string) => Promise<User | null>;
    list: () => Promise<User[] | null>;
    create: (user: CreateUserProps) => Promise<User | null>;
    update: (id: string, user: UpdateUserProps) => Promise<UpdateResult>;
    remove: (id: string) => Promise<DeleteResult>;
}