import { Especificacoes } from "../../model/Especificacao";

interface IEspecificacoesDTO {
    nome: string,
    descricao: string
}

interface IEspecificacoesRepository {
    create({ nome, descricao }: IEspecificacoesDTO): void;
    list(): Especificacoes[];
    findByName(nome: string): Especificacoes;
}

export { IEspecificacoesRepository, IEspecificacoesDTO }