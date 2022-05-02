import * as express from "express";
const swaggerUi = require('swagger-ui-express');

import { especificacaoRoutes } from "./routes/especificacao.routes";
import { categoriasRoutes } from "./routes/categorias.routes"
// import swaggerFile from './swaggerUI.json'
import { AppDataSource } from "./database/dataSource"

AppDataSource.initialize()
    .then(() => {
    })
    .catch((error) => console.log(error))
const app = express()

app.use(express.json())
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/categorias", categoriasRoutes)
app.use("/especificacoes", especificacaoRoutes)

app.listen(3333)