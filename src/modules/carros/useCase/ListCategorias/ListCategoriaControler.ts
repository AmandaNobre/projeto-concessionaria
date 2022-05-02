import { Request, Response } from "express"
import { ListCategoriaUseCase } from "./ListCategoriaUseCase"

class ListCategoriaControler {

    constructor(private categoriaRepositorio: ListCategoriaUseCase) { }
    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const list = await this.categoriaRepositorio.execute()

        return response.json(list)
    }
}

export { ListCategoriaControler }