import { EspecificacoesRepositorio } from "../../repositories/EspecificacoesRepositorio";
import { ListEspecificacoesControler } from "./ListEspecificacoesControler";
import { ListEspecificacoesUseCase } from "./ListEspecificacoesUseCase";

const especificacoesRepositorio = EspecificacoesRepositorio.getInstance()
const listEspecificacoesUseCase = new ListEspecificacoesUseCase(especificacoesRepositorio)
const listEspecificacoesControler = new ListEspecificacoesControler(listEspecificacoesUseCase)

export { listEspecificacoesControler }