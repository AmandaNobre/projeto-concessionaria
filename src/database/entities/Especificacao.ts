import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("especificacao")
class Especificacoes {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    dataCriacao: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Especificacoes }