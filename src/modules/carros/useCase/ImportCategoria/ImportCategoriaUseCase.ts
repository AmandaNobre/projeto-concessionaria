import { parse } from 'csv-parse';
import { createReadStream } from 'fs';
import { convertTypeAcquisitionFromJson } from 'typescript';
import { CategoriasRepositorio } from '../../repositories/CategoriasRepositorio';

interface IImportCategorias {
    nome: string;
    descricao: string
}

class ImportCategoriaUseCase {

    constructor(private categoriaRepositorio: CategoriasRepositorio) { }

    load(file: Express.Multer.File): Promise<IImportCategorias[]> {
        return new Promise((resolve, reject) => {
            const stream = createReadStream(file.path)
            const parseFile = parse()

            const categorias: IImportCategorias[] = []

            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [nome, descricao] = line

                categorias.push({
                    nome, descricao
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
            const { nome, descricao } = categoria;

            const exist = this.categoriaRepositorio.findByName(nome)

            if (!exist) {
                this.categoriaRepositorio.create({ nome, descricao })
            }
        })
    }
}

export { ImportCategoriaUseCase }