import { User } from "../entity/user.entity";

type UpdateUserProps = Partial<Omit<User, 'id'>>

export { UpdateUserProps }