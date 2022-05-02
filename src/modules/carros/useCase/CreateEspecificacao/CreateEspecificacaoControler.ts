import { Response, Request } from "express"
import { CreateEspecificacaoUseCase } from "./CreateEspecificacaoUseCase"

class CreateEspecificacaoControler {

    constructor(private createEspecificacaoService: CreateEspecificacaoUseCase) { }
    async handle(request: Request, response: Response,): Promise<Response<any, Record<string, any>>> {
        const { name, description } = request.body

        await this.createEspecificacaoService.execute({ name, description })

        return response.status(201).send()
    }
}

export { CreateEspecificacaoControler }