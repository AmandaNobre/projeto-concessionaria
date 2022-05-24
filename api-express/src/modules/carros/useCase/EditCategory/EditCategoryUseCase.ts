import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import {
  ICategoriaDTO,
  ICategoriasRepository,
} from "../../repositories/interfaces/ICategoriasRepository";

interface IRequest {
  id: string;
  name: string;
  description: string;
}

@injectable()
class EditCategoryUseCase {
  constructor(
    @inject("CategoriasRepositorio")
    private categoriaRepository: ICategoriasRepository
  ) {}

  async execute({ id, name, description }: IRequest) {
    const category = await this.categoriaRepository.findById(id);

    if (!category) {
      throw new AppError("Categoria não encontrada", 401);
    }

    this.categoriaRepository.edit({ id, name, description });
  }
}

export { EditCategoryUseCase };
