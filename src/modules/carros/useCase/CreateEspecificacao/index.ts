import { EspecificacoesRepositorio } from "../../repositories/EspecificacoesRepositorio";
import { CreateEspecificacaoControler } from "./CreateEspecificacaoControler";
import { CreateEspecificacaoUseCase } from "./CreateEspecificacaoUseCase";


export default (): CreateEspecificacaoControler => {
    const especificacaoRepositorio = new EspecificacoesRepositorio()
    const createEspecificacaoUseCase = new CreateEspecificacaoUseCase(especificacaoRepositorio)
    const createEspecificacaoControler = new CreateEspecificacaoControler(createEspecificacaoUseCase)

    return createEspecificacaoControler
}