import { Response, Request } from "express"
import { CreateEspecificacaoUseCase } from "./CreateEspecificacaoUseCase"

class CreateEspecificacaoControler {

    constructor(private createEspecificacaoService: CreateEspecificacaoUseCase) { }
    handle(request: Request, response: Response,): Response {
        const { nome, descricao } = request.body

        this.createEspecificacaoService.execute({ nome, descricao })

        return response.status(201).send()
    }
}

export { CreateEspecificacaoControler }