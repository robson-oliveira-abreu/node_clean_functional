import { User } from "../types/userEntity.type";

function userEntity(name: string): User {
    const newId = new Date().getTime();

    return {
        id: newId,
        name: name,
    }
}

export { userEntity }