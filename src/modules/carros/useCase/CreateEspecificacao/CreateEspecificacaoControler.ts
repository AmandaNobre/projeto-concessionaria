import { container } from "tsyringe"
import { Response, Request } from "express"

import { CreateEspecificacaoUseCase } from "./CreateEspecificacaoUseCase"

class CreateEspecificacaoControler {

    async handle(request: Request, response: Response,): Promise<Response<any, Record<string, any>>> {
        const { name, description } = request.body

        const createEspecificacaoService = container.resolve(CreateEspecificacaoUseCase)

        await createEspecificacaoService.execute({ name, description })

        return response.status(201).send()
    }
}

export { CreateEspecificacaoControler }