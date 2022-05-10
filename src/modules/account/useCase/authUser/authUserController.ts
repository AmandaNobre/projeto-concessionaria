import { Request, Response } from "express";
import { container } from "tsyringe";
import { authUserUseCase } from "./authUserUseCase";

class AuthUserController {
    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const { email, password } = request.body

        const createAuthServer = container.resolve(authUserUseCase)

        const token = await createAuthServer.execute({ email, password })

        return response.json(token)
    }
}

export { AuthUserController }