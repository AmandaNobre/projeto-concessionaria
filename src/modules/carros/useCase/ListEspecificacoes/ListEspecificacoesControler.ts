import { Request, Response } from "express";
import { ListEspecificacoesUseCase } from "./ListEspecificacoesUseCase";


class ListEspecificacoesControler {

    constructor(private especificacoesRepositorio: ListEspecificacoesUseCase) { }
    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const list = await this.especificacoesRepositorio.execute()

        return response.json(list)
    }
}

export { ListEspecificacoesControler }