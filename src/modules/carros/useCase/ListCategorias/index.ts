import { CategoriasRepositorio } from "../../repositories/CategoriasRepositorio";
import { ListCategoriaControler } from "./ListCategoriaControler";
import { ListCategoriaUseCase } from "./ListCategoriaUseCase";

export default (): ListCategoriaControler => {

    const categoriasRepositorio = new CategoriasRepositorio()
    const listCategoriaUseCase = new ListCategoriaUseCase(categoriasRepositorio)
    const listCategoriaControler = new ListCategoriaControler(listCategoriaUseCase)

    return listCategoriaControler
}
