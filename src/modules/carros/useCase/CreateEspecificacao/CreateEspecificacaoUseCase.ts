import { IEspecificacoesRepository } from "../../repositories/interfaces/IEspecificacoesRepository";

interface IRequest {
    nome: string;
    descricao: string
}

class CreateEspecificacaoUseCase {

    constructor(private especificacaoRepositorio: IEspecificacoesRepository) { }

    execute({ nome, descricao }: IRequest) {
        const especificacaoExiste = this.especificacaoRepositorio.findByName(nome)

        if (especificacaoExiste) {
            throw new Error("Especificação já existente")
        }

        this.especificacaoRepositorio.create({ nome, descricao })
    }
}

export { CreateEspecificacaoUseCase }