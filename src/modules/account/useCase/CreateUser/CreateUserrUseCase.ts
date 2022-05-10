import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { ICreateUserDTO } from "../../repositories/interfaces/ICreateUserDTO";
import { UserRepository } from "../../repositories/UserRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserrUseCase {
    constructor(
        @inject("UserRepository")
        private userRespository: UserRepository
    ) { }

    async execute({ name, username, password, email, driver_licence }: ICreateUserDTO) {

        const emailExists = await this.userRespository.findByEmail(email)

        if (emailExists) {
            throw new AppError("Email já existe", 401);
        }
        const passwordBash = await hash(password, 8)
        const user = {
            name,
            username,
            password: passwordBash,
            email,
            driver_licence
        }

        await this.userRespository.create(user)
    }
}

export { CreateUserrUseCase }