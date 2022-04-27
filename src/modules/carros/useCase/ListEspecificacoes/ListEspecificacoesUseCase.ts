import { Especificacoes } from "../../model/Especificacao";
import { IEspecificacoesRepository } from "../../repositories/interfaces/IEspecificacoesRepository";

class ListEspecificacoesUseCase {

    constructor(private especificacoesRepositorio: IEspecificacoesRepository) { }
    execute(): Especificacoes[] {
        const list = this.especificacoesRepositorio.list()

        return list
    }

}

export { ListEspecificacoesUseCase }