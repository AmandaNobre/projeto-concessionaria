import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserrUseCase } from "./CreateUserrUseCase";

class CreateUserControler {

    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const { name, username, password, email, driver_licence } = request.body

        const createUserrUseCase = container.resolve(CreateUserrUseCase)


        await createUserrUseCase.execute({ name, username, password, email, driver_licence })

        return response.status(201).send()

    }
}

export { CreateUserControler }