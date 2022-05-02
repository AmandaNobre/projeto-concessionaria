import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase"
import { Request, Response } from "express"

class CreateCategoriaControler {

    constructor(private createCategoriaUseCase: CreateCategoriaUseCase) { }

    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const { name, description } = request.body

        await this.createCategoriaUseCase.execute({ name, description })

        return response.status(201).send()
    }
}

export { CreateCategoriaControler }