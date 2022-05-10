import { inject, injectable } from "tsyringe";

import { IEspecificacoesRepository } from "../../repositories/interfaces/IEspecificacoesRepository";

interface IRequest {
    name: string;
    description: string
}

@injectable()
class CreateEspecificacaoUseCase {

    constructor(
        @inject("EspecificacoesRepositorio")
        private especificacaoRepositorio: IEspecificacoesRepository
    ) { }

    async execute({ name, description }: IRequest) {
        const especificacaoExiste = await this.especificacaoRepositorio.findByName(name)

        if (especificacaoExiste) {
            throw new Error("Especificação já existente")
        }
        this.especificacaoRepositorio.create({ name, description })

    }
}

export { CreateEspecificacaoUseCase }