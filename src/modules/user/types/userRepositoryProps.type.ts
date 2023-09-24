import { Repository } from "typeorm"
import { User } from "../entity/user.entity"

type UserRepositoryProps = { UserRepository: Repository<User> }

export { UserRepositoryProps }