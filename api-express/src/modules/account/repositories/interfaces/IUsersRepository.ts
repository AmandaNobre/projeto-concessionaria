import { Users } from "../../../../database/entities/Users"
import { ICreateUserDTO } from "./ICreateUserDTO"

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<ICreateUserDTO>
    findById(id: string): Promise<Users>
}

export { IUsersRepository }