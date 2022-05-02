import { Especificacoes } from "../../../../database/entities/Especificacao";

interface IEspecificacoesDTO {
    name: string,
    description: string
}

interface IEspecificacoesRepository {
    create({ name, description }: IEspecificacoesDTO): void;
    list(): Promise<Especificacoes[]>;
    findByName(name: string): Promise<Especificacoes>;
}

export { IEspecificacoesRepository, IEspecificacoesDTO }