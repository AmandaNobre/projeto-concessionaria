import { Request, Response } from "express"
import { ListCategoriaUseCase } from "./ListCategoriaUseCase"

class ListCategoriaControler {

    constructor(private categoriaRepositorio: ListCategoriaUseCase) { }
    handle(request: Request, response: Response): Response {
        const list = this.categoriaRepositorio.execute()

        return response.json(list)
    }
}

export { ListCategoriaControler }