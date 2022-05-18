import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

interface IReqest {
    email: string,
    password: string
}

interface IResponse {
    user: {
        name: string,
        email: string
    };
    token: string
}

@injectable()
class authUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IReqest): Promise<IResponse> {

        if (!email || !password) {
            throw new AppError("Preencha os campos obrigatórios", 401)
        }

        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new AppError("Email ou senha incorreto", 401)
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError("Email ou senha incorreto", 401)
        }

        const token = sign({}, "d514531c580689c7ac78e9a3dec6e94b", {
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenReturn: IResponse = {
            token,
            user: { name: user.name, email: user.email }
        }
        return tokenReturn
    }
}

export { authUserUseCase }