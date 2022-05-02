import { Router } from "express"
const multer = require('multer')

import createCategoriaControler from "../modules/carros/useCase/CreateCategoria"
import importCategoriaControler from "../modules/carros/useCase/ImportCategoria"
import listCategoriaControler from "../modules/carros/useCase/ListCategorias"

const categoriasRoutes = Router()

const upload = multer({
    dest: "./tmp"
})

categoriasRoutes.post("/", (request, response) => {
    createCategoriaControler().handle(request, response)
})

categoriasRoutes.get("/", (request, response) => {
    listCategoriaControler().handle(request, response)
})

categoriasRoutes.post("/import", upload.single("file"), (request, response) => {
    importCategoriaControler().handle(request, response)
})

export { categoriasRoutes }