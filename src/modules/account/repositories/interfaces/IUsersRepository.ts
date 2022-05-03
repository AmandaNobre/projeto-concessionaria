import { ICreateUserDTO } from "./ICreateUserDTO"

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<ICreateUserDTO>
}

export { IUsersRepository }