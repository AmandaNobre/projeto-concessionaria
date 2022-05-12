import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("users")
class Users {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_ad: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }

        if (!this.admin) {
            this.admin = false
        }
    }

}
export { Users }