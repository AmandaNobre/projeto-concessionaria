import { Categorias } from "../../../../database/entities/Categoria";

interface ICreateCategoriaDTO {
    name: string;
    description: string
}

interface ICategoriasRepository {
    create({ name, description }: ICreateCategoriaDTO): void;
    list(query): Promise<Categorias[]>;
    findByName(name: string): Promise<Categorias>
}

export { ICategoriasRepository, ICreateCategoriaDTO }