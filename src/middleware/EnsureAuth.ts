import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/account/repositories/UserRepository";


interface IPayload {
    sub: string
}

export async function EnsureAuth(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token não encontrado", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: id } = verify(token, "d514531c580689c7ac78e9a3dec6e94b") as IPayload
        const userRepository = new UserRepository()
        const user = await userRepository.findById(id)

        if (!user) {
            throw new AppError("Usuário não encontrado", 401)
        }

        next()
    } catch {
        throw new AppError("Token inválido", 401)
    }

}