import { Especificacoes } from "../model/Especificacao";
import { IEspecificacoesDTO, IEspecificacoesRepository } from "./interfaces/IEspecificacoesRepository";

class EspecificacoesRepositorio implements IEspecificacoesRepository {

    private especificaoes: Especificacoes[]

    private static INSTANCE: EspecificacoesRepositorio

    constructor() {
        this.especificaoes = []
    }

    public static getInstance(): EspecificacoesRepositorio {
        if (!EspecificacoesRepositorio.INSTANCE) {
            EspecificacoesRepositorio.INSTANCE = new EspecificacoesRepositorio()
        }

        return EspecificacoesRepositorio.INSTANCE
    }

    create({ nome, descricao }: IEspecificacoesDTO): void {
        const especificaco = new Especificacoes()
        Object.assign(especificaco, { nome, descricao, dataCriacao: new Date })
        this.especificaoes.push(especificaco)
    }

    list(): Especificacoes[] {
        return this.especificaoes
    }

    findByName(nome: string): Especificacoes {
        const especificacao = this.especificaoes.find((especificacoa) => especificacoa.nome === nome)
        return especificacao
    }
}

export { EspecificacoesRepositorio }