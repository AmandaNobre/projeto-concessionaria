import { CategoriasRepositorio } from "../../repositories/CategoriasRepositorio";
import { CreateCategoriaControler } from "./CreateCategoriaControler";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";

const categoriaRepositorio = CategoriasRepositorio.getInstance()
const createCategoriaUseCase = new CreateCategoriaUseCase(categoriaRepositorio)
const createCategoriaControler = new CreateCategoriaControler(createCategoriaUseCase)

export { createCategoriaControler }