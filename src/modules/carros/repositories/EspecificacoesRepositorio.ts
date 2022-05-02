import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../../../database/dataSource";
import { Especificacoes } from "../../../database/entities/Especificacao";
import { IEspecificacoesDTO, IEspecificacoesRepository } from "./interfaces/IEspecificacoesRepository";

class EspecificacoesRepositorio implements IEspecificacoesRepository {

    private repository: Repository<Especificacoes>
    constructor() {
        this.repository = AppDataSource.getRepository(Especificacoes)
    }

    async create({ name, description }: IEspecificacoesDTO): Promise<void> {
        const especificacao = this.repository.create({
            name, description
        })

        await this.repository.save(especificacao)
    }

    async list(): Promise<Especificacoes[]> {
        const especificacoes = await this.repository.find()
        return especificacoes
    }

    async findByName(name: string): Promise<Especificacoes> {
        const especificacao = await this.repository.findOne({ where: { name } })
        return especificacao
    }
}

export { EspecificacoesRepositorio }