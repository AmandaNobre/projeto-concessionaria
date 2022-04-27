import { createCategoriaControler } from "../modules/carros/useCase/CreateCategoria"
import { Router } from "express"
import { listCategoriaControler } from "../modules/carros/useCase/ListCategorias"
import { importCategoriaControler } from "../modules/carros/useCase/ImportCategoria"
const multer = require('multer')

const categoriasRoutes = Router()

const upload = multer({
    dest: "./tmp"
})

categoriasRoutes.post("/", (request, response) => {
    createCategoriaControler.handle(request, response)
})

categoriasRoutes.get("/", (request, response) => {
    listCategoriaControler.handle(request, response)
})

categoriasRoutes.post("/import", upload.single("file"), (request, response) => {
    importCategoriaControler.handle(request, response)
})

export { categoriasRoutes }