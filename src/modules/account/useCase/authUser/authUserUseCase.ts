import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

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
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new Error("Email ou senha incorreto")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email ou senha incorreto")
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