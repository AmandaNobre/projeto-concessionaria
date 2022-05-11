import { container } from "tsyringe"
import { Request, Response } from "express"

import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase"

class CreateCategoriaControler {

    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const { name, description } = request.body

        const createCategoriaUseCase = container.resolve(CreateCategoriaUseCase);
        await createCategoriaUseCase.execute({ name, description })

        return response.status(201).send()

    }
}

export { CreateCategoriaControler }