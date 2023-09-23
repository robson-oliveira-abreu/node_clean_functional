import { User } from "./userEntity.type";

export type UserService = {
    find: (id: number) => Promise<User | undefined>;
    list: () => Promise<User[]>;
    create: (user: Omit<User, 'id'>) => Promise<User | undefined>;
}