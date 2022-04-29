import * as express from "express";
import { categoriasRoutes } from "./routes/categorias.routes"
import { especificacaoRoutes } from "./routes/especificacao.routes";
const swaggerUi = require('swagger-ui-express');
import swaggerFile from './swaggerUI.json'

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/categorias", categoriasRoutes)
app.use("/especificacoes", especificacaoRoutes)

app.listen(3000)