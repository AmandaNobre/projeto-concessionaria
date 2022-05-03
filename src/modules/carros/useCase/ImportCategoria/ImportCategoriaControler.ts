import { container } from "tsyringe";
import { Request, Response } from "express";

import { ImportCategoriaUseCase } from "./ImportCategoriaUseCase";

class ImportCategoriaControler {


    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const { file } = request

        const importCategoriaUseCase = container.resolve(ImportCategoriaUseCase)
        await importCategoriaUseCase.execute(file)

        return response.send()
    }
}

export { ImportCategoriaControler }