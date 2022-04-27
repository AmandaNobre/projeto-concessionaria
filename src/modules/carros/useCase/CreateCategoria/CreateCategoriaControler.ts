import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase"
import { Request, Response } from "express"

class CreateCategoriaControler {

    constructor(private createCategoriaUseCase: CreateCategoriaUseCase) { }

    handle(request: Request, response: Response): Response {
        const { nome, descricao } = request.body

        this.createCategoriaUseCase.execute({ nome, descricao })

        return response.status(201).send()
    }
}

export { CreateCategoriaControler }