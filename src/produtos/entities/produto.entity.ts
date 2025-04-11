import { Fabricante } from "src/fabricante/entities/fabricante.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { EmbeddedMetadata } from "typeorm/metadata/EmbeddedMetadata";

const{ nanoid } = require("nanoid");

@Entity('produtos')
export class Produto {
    @PrimaryColumn()
    id: string;
    
    @Column()
    nome: string;
    
    @Column()
    dataDeValidade: string;

    @OneToOne(() => Produto, {onDelete:'SET NULL'})
    fabricante: Produto;

    @JoinColumn()
    idFabricante: Fabricante;

    @BeforeInsert()
    generateId() {
        this.id = `prod_${nanoid()}`;
    }

}
