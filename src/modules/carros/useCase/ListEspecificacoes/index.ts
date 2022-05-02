import { EspecificacoesRepositorio } from "../../repositories/EspecificacoesRepositorio";
import { ListEspecificacoesControler } from "./ListEspecificacoesControler";
import { ListEspecificacoesUseCase } from "./ListEspecificacoesUseCase";


export default (): ListEspecificacoesControler => {

    const especificacoesRepositorio = new EspecificacoesRepositorio()
    const listEspecificacoesUseCase = new ListEspecificacoesUseCase(especificacoesRepositorio)
    const listEspecificacoesControler = new ListEspecificacoesControler(listEspecificacoesUseCase)

    return listEspecificacoesControler
}