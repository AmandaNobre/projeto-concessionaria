import { container } from "tsyringe"
import { Request, Response } from "express"

import { ListCategoriaUseCase } from "./ListCategoriaUseCase"

class ListCategoriaControler {

    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {

        const categoriaRepositorio = container.resolve(ListCategoriaUseCase)

        const list = await categoriaRepositorio.execute()

        return response.json(list)
    }
}

export { ListCategoriaControler }