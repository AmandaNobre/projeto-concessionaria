import * as express from "express";

import { especificacaoRoutes } from "./routes/especificacao.routes";
import { categoriasRoutes } from "./routes/categorias.routes"
import { usersRoutes } from "./routes/users.routes";
import { authRoutes } from "./routes/auth.routes";

import "./shared/container"
import "./database"

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swaggerUI.json');
const bodyParser = require('body-parser');
const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/categorias", categoriasRoutes)
app.use("/especificacoes", especificacaoRoutes)
app.use("/user", usersRoutes)
app.use("/sessions", authRoutes)

app.listen(3333)