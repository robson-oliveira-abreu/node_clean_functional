import { User } from "../entity/user.entity";

type CreateUserProps = Omit<User, 'id'>

export { CreateUserProps }