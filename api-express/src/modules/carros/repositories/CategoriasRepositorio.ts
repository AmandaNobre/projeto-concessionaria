import { Repository } from "typeorm";

import {
  ICategoriasRepository,
  ICategoriaDTO,
} from "./interfaces/ICategoriasRepository";
import { Categorias } from "../../../database/entities/Categoria";
import { AppDataSource } from "../../../database/dataSource";

class CategoriasRepositorio implements ICategoriasRepository {
  private repository: Repository<Categorias>;

  constructor() {
    this.repository = AppDataSource.getRepository(Categorias);
  }

  async create({ name, description }: ICategoriaDTO) {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(filter, pagination): Promise<any[]> {
    const [result, total] = await this.repository.findAndCount({
      take: pagination.limit,
      skip: pagination.page - 1,
    });
    return [result, total];
  }

  async findByName(name: string): Promise<Categorias> {
    const categoria = await this.repository.findOne({
      where: {
        name,
      },
    });
    return categoria;
  }

  async findById(id: string): Promise<Categorias> {
    const category = await this.repository.findOneBy({ id });
    return category;
  }

  async edit({ id, name, description }: ICategoriaDTO): Promise<void> {
    await this.repository.update(id, { name, description });
  }
}

export { CategoriasRepositorio };
