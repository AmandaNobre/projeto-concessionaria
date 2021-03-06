import { container } from "tsyringe";
import { Request, Response } from "express";

import { ListCategoriaUseCase } from "./ListCategoriaUseCase";

class ListCategoriaControler {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<any, Record<string, any>>> {
    const { name, description } = request.query;
    const { page, limit } = request.query;

    const categoriaRepositorio = container.resolve(ListCategoriaUseCase);

    const list = await categoriaRepositorio.execute({ name, page, limit });

    return response.json(list).header("count", "10");
  }
}

export { ListCategoriaControler };
