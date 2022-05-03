import { container } from "tsyringe";
import { Request, Response } from "express";

import { ListEspecificacoesUseCase } from "./ListEspecificacoesUseCase";


class ListEspecificacoesControler {

    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {

        const especificacoesRepositorio = container.resolve(ListEspecificacoesUseCase)
        const list = await especificacoesRepositorio.execute()

        return response.json(list)
    }
}

export { ListEspecificacoesControler }