import "reflect-metadata"
import { Router } from "express";

import { CreateEspecificacaoControler } from "../modules/carros/useCase/CreateEspecificacao/CreateEspecificacaoControler";
import { ListEspecificacoesControler } from "../modules/carros/useCase/ListEspecificacoes/ListEspecificacoesControler";
import { EnsureAuth } from "../middleware/EnsureAuth";

const especificacaoRoutes = Router()

const createEspecificacaoControler = new CreateEspecificacaoControler()
const listEspecificacoesControler = new ListEspecificacoesControler()

especificacaoRoutes.use(EnsureAuth)
especificacaoRoutes.post("/", createEspecificacaoControler.handle)

especificacaoRoutes.get("/", listEspecificacoesControler.handle)

export { especificacaoRoutes }