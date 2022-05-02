import { IEspecificacoesRepository } from "../../repositories/interfaces/IEspecificacoesRepository";

interface IRequest {
    name: string;
    description: string
}

class CreateEspecificacaoUseCase {

    constructor(private especificacaoRepositorio: IEspecificacoesRepository) { }

    async execute({ name, description }: IRequest) {
        const especificacaoExiste = await this.especificacaoRepositorio.findByName(name)

        if (especificacaoExiste) {
            throw new Error("Especificação já existente")
        }

        await this.especificacaoRepositorio.create({ name, description })
    }
}

export { CreateEspecificacaoUseCase }