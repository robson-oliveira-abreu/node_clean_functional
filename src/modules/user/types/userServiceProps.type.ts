import { User } from "./userEntity.type";

export type UserServiceProps = {
    userEntity: (name: string) => User;
}