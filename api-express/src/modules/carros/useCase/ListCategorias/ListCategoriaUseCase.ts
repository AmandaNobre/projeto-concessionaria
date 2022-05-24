import { ParsedQs } from "qs";
import { inject, injectable } from "tsyringe";

import { Categorias } from "../../../../database/entities/Categoria";
import { ICategoriasRepository } from "../../repositories/interfaces/ICategoriasRepository";

type IRequest = {
  name: string | ParsedQs | string[] | ParsedQs[];
  page: string | ParsedQs | string[] | ParsedQs[];
  limit: string | ParsedQs | string[] | ParsedQs[];
};

@injectable()
class ListCategoriaUseCase {
  constructor(
    @inject("CategoriasRepositorio")
    private categoriasRepositorio: ICategoriasRepository
  ) {}

  async execute({ name, page, limit }: IRequest): Promise<Categorias[]> {
    const query = { name };
    const pagination = { page, limit };
    const [result, total] = await this.categoriasRepositorio.list(
      query,
      pagination
    );

    return [result, { total }];
  }
}

export { ListCategoriaUseCase };
