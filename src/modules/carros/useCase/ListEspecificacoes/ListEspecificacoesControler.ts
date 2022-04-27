import { Request, Response } from "express";
import { ListEspecificacoesUseCase } from "./ListEspecificacoesUseCase";


class ListEspecificacoesControler {

    constructor(private especificacoesRepositorio: ListEspecificacoesUseCase) { }
    handle(request: Request, response: Response): Response {
        const list = this.especificacoesRepositorio.execute()

        return response.json(list)
    }
}

export { ListEspecificacoesControler }