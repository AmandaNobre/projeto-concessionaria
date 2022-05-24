import { constants } from "buffer";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditCategoryUseCase } from "./EditCategoryUseCase";

class EditCategoryController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const { id } = request.params;
    const editCategoriaUseCase = container.resolve(EditCategoryUseCase);

    await editCategoriaUseCase.execute({ id, name, description });

    return response.status(200).send();
  }
}

export { EditCategoryController };
