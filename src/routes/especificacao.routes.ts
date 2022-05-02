import { Router } from "express";

import createEspecificacaoControler from "../modules/carros/useCase/CreateEspecificacao";
import listEspecificacoesControler from "../modules/carros/useCase/ListEspecificacoes";

const especificacaoRoutes = Router()

especificacaoRoutes.post("/", (request, response) => {
    createEspecificacaoControler().handle(request, response)
})

especificacaoRoutes.get("/", (request, response) => {
    listEspecificacoesControler().handle(request, response)
})

export { especificacaoRoutes }