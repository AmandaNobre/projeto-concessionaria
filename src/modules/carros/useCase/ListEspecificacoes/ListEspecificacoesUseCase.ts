import { Especificacoes } from "../../../../database/entities/Especificacao";
import { IEspecificacoesRepository } from "../../repositories/interfaces/IEspecificacoesRepository";

class ListEspecificacoesUseCase {

    constructor(private especificacoesRepositorio: IEspecificacoesRepository) { }
    async execute(): Promise<Especificacoes[]> {
        const list = await this.especificacoesRepositorio.list()

        return list
    }

}

export { ListEspecificacoesUseCase }