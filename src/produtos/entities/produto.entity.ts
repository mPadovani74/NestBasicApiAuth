import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const{ nanoid } = require("nanoid");

@Entity('produtos')
export class Produto {
    @PrimaryColumn()
    id: string;
    
    @Column()
    nome: string;
    
    @Column()
    dataDeValidade: string;

    @BeforeInsert()
    generateId() {
        this.id = `prod_${nanoid()}`;
    }

}
