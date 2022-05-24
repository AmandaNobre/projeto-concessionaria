import { Router } from "express";

import { CreateCategoriaControler } from "../modules/carros/useCase/CreateCategoria/CreateCategoriaControler";
import { EditCategoryController } from "../modules/carros/useCase/EditCategory/EditCategoryController";
import { ImportCategoriaControler } from "../modules/carros/useCase/ImportCategoria/ImportCategoriaControler";
import { ListCategoriaControler } from "../modules/carros/useCase/ListCategorias/ListCategoriaControler";

const multer = require("multer");
const categoriasRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoriaControler = new CreateCategoriaControler();
const listCategoriaControler = new ListCategoriaControler();
const importCategoriaControler = new ImportCategoriaControler();
const editCategoriaControler = new EditCategoryController();

categoriasRoutes.post("/", createCategoriaControler.handle);

categoriasRoutes.get("/", listCategoriaControler.handle);

categoriasRoutes.put("/:id", editCategoriaControler.handle);

categoriasRoutes.post(
  "/import",
  upload.single("file"),
  importCategoriaControler.handle
);

export { categoriasRoutes };
