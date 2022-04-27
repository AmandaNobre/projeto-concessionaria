import * as express from "express";
import { categoriasRoutes } from "./routes/categorias.routes"
import { especificacaoRoutes } from "./routes/especificacao.routes";

const app = express()

app.use(express.json())

app.use("/categorias", categoriasRoutes)
app.use("/especificacoes", especificacaoRoutes)

app.listen(3000)