import { Repository } from "typeorm";

import { IEspecificacoesDTO, IEspecificacoesRepository } from "./interfaces/IEspecificacoesRepository";
import { Especificacoes } from "../../../database/entities/Especificacao";
import { AppDataSource } from "../../../database/dataSource";

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