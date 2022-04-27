import { CategoriasRepositorio } from "../../repositories/CategoriasRepositorio";
import { ImportCategoriaControler } from "./ImportCategoriaControler";
import { ImportCategoriaUseCase } from "./ImportCategoriaUseCase";

const categoriaRepositorio = CategoriasRepositorio.getInstance()
const importCategoriaUseCase = new ImportCategoriaUseCase(categoriaRepositorio)
const importCategoriaControler = new ImportCategoriaControler(importCategoriaUseCase)

export { importCategoriaControler }