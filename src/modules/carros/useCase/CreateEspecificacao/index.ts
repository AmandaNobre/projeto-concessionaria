import { EspecificacoesRepositorio } from "../../repositories/EspecificacoesRepositorio";
import { CreateEspecificacaoControler } from "./CreateEspecificacaoControler";
import { CreateEspecificacaoUseCase } from "./CreateEspecificacaoUseCase";

const especificacaoRepositorio = EspecificacoesRepositorio.getInstance()
const createEspecificacaoUseCase = new CreateEspecificacaoUseCase(especificacaoRepositorio)
const createEspecificacaoControler = new CreateEspecificacaoControler(createEspecificacaoUseCase)

export { createEspecificacaoControler }