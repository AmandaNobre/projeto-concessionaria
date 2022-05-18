import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserrUseCase } from "./CreateUserrUseCase";

class CreateUserControler {

    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const { name, password, email } = request.body

        const createUserrUseCase = container.resolve(CreateUserrUseCase)


        await createUserrUseCase.execute({ name, password, email })

        return response.status(201).send()

    }
}

export { CreateUserControler }