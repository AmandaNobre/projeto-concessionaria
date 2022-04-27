import { v4 as uuidv4 } from 'uuid';


class Categorias {
    id?: string;
    nome: string;
    descricao: string;
    dataCriacao: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Categorias }