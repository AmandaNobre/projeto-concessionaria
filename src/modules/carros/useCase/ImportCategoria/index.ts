import { CategoriasRepositorio } from "../../repositories/CategoriasRepositorio";
import { ImportCategoriaControler } from "./ImportCategoriaControler";
import { ImportCategoriaUseCase } from "./ImportCategoriaUseCase";

export default (): ImportCategoriaControler => {
    const categoriaRepositorio = new CategoriasRepositorio()
    const importCategoriaUseCase = new ImportCategoriaUseCase(categoriaRepositorio)
    const importCategoriaControler = new ImportCategoriaControler(importCategoriaUseCase)

    return importCategoriaControler
}