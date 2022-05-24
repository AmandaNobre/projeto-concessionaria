import { Categorias } from "../../../../database/entities/Categoria";

interface ICategoriaDTO {
  id?: string;
  name: string;
  description: string;
}

interface ICategoriasRepository {
  create({ name, description }: ICategoriaDTO): void;

  list(query, pagination): Promise<any>;
  findByName(name: string): Promise<Categorias>;
  findById(id: string): Promise<Categorias>;

  edit({ id, name, description }: ICategoriaDTO): void;
}

export { ICategoriasRepository, ICategoriaDTO };
