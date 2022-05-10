import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/account/repositories/UserRepository";


interface IPayload {
    sub: string
}

export async function EnsureAuth(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: id } = verify(token, "d514531c580689c7ac78e9a3dec6e94b") as IPayload
        const userRepository = new UserRepository()
        const user = await userRepository.findById(id)

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        next()
    } catch {
        throw new Error("Token inválido")
    }

}