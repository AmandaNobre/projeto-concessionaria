import { parse } from 'csv-parse';
import { createReadStream } from 'fs';
import { inject, injectable } from 'tsyringe';

import { ICategoriasRepository } from '../../repositories/interfaces/ICategoriasRepository';

interface IImportCategorias {
    name: string;
    description: string
}

@injectable()
class ImportCategoriaUseCase {

    constructor(
        @inject("CategoriasRepositorio")
        private categoriaRepositorio: ICategoriasRepository
    ) { }

    load(file: Express.Multer.File): Promise<IImportCategorias[]> {

        return new Promise((resolve, reject) => {
            const stream = createReadStream(file.path)
            const parseFile = parse()

            const categorias: IImportCategorias[] = []

            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [name, description] = line

                categorias.push({
                    name, description
                })
            })
                .on("end", () => {
                    resolve(categorias)
                })
                .on("error", (err) => {
                    reject(err)
                })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categorias = await this.load(file)

        categorias.map(categoria => {
            const { name, description } = categoria;

            const exist = this.categoriaRepositorio.findByName(name)

            if (!exist) {
                this.categoriaRepositorio.create({ name, description })
            }
        })
    }
}

export { ImportCategoriaUseCase }