import { inject, injectable } from "tsyringe";
import { Especificacoes } from "../../../../database/entities/Especificacao";
import { IEspecificacoesRepository } from "../../repositories/interfaces/IEspecificacoesRepository";

@injectable()
class ListEspecificacoesUseCase {

    constructor(
        @inject("EspecificacoesRepositorio")
        private especificacoesRepositorio: IEspecificacoesRepository
    ) { }

    async execute(): Promise<Especificacoes[]> {
        const list = await this.especificacoesRepositorio.list()

        return list
    }

}

export { ListEspecificacoesUseCase }