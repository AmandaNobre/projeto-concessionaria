import * as swaggerUi from "swagger-ui-express";
import * as bodyParser from "body-parser";
import * as express from "express";
import "express-async-errors";

import { especificacaoRoutes } from "./routes/especificacao.routes";
import { categoriasRoutes } from "./routes/categorias.routes";
import { usersRoutes } from "./routes/users.routes";
import { authRoutes } from "./routes/auth.routes";
import { AppError } from "./errors/AppError";

import "./shared/container";
import "./database";

const cors = require("cors");
const swaggerFile = require("./swaggerUI.json");
const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/categorias", categoriasRoutes);
app.use("/especificacoes", especificacaoRoutes);
app.use("/user", usersRoutes);
app.use("/sessions", authRoutes);

app.use(
  (
    err: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    if (err instanceof AppError) {
      return response.status(err.status).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      message: "Erro interno",
    });
  }
);

app.listen(3333);
