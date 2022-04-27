import { Request, Response } from "express";
import { ImportCategoriaUseCase } from "./ImportCategoriaUseCase";

class ImportCategoriaControler {

    constructor(private importCategoriaUseCase: ImportCategoriaUseCase) { }

    handle(request: Request, response: Response): Response {
        const { file } = request
        this.importCategoriaUseCase.execute(file)
        return response.send()
    }
}

export { ImportCategoriaControler }