import { CategoriasRepositorio } from "../../repositories/CategoriasRepositorio";
import { ListCategoriaControler } from "./ListCategoriaControler";
import { ListCategoriaUseCase } from "./ListCategoriaUseCase";

const categoriasRepositorio = CategoriasRepositorio.getInstance()
const listCategoriaUseCase = new ListCategoriaUseCase(categoriasRepositorio)
const listCategoriaControler = new ListCategoriaControler(listCategoriaUseCase)

export { listCategoriaControler }
