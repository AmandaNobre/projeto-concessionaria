import { v4 as uuidv4 } from "uuid";

import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
class Categorias {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  dateCreated_at: Date;

  totalPage?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Categorias };
