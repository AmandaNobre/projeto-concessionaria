import { CategoriasRepositorio } from "../../repositories/CategoriasRepositorio";
import { CreateCategoriaControler } from "./CreateCategoriaControler";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";

export default (): CreateCategoriaControler => {
    const categoriaRepositorio = new CategoriasRepositorio()
    const createCategoriaUseCase = new CreateCategoriaUseCase(categoriaRepositorio)
    const createCategoriaControler = new CreateCategoriaControler(createCategoriaUseCase)

    return createCategoriaControler
}