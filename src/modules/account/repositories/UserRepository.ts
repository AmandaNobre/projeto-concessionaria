import { Repository } from "typeorm";

import { IUsersRepository } from "./interfaces/IUsersRepository";
import { AppDataSource } from "../../../database/dataSource";
import { Users } from "../../../database/entities/Users";
import { ICreateUserDTO } from "./interfaces/ICreateUserDTO";

class UserRepository implements IUsersRepository {

    private repository: Repository<Users>

    constructor() {
        this.repository = AppDataSource.getRepository(Users)
    }

    async create(data: ICreateUserDTO): Promise<void> {
        const createUser = this.repository.create(data)
        await this.repository.save(createUser)
    }

    async findByEmail(email: string): Promise<ICreateUserDTO> {
        const emailExists = await this.repository.findOne({
            where: {
                email
            }
        })

        return emailExists
    }

    async findById(id: string) {
        const user = await this.repository.findOne({
            where: {
                id
            }
        })
        return user
    }
}

export { UserRepository }