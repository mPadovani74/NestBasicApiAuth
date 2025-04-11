import { Vendedor } from "src/vendedor/entities/vendedor.entity";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
const { nanoid } = require("nanoid");

@Entity('fabricante')
export class Fabricante {
  @PrimaryColumn()
  id: string;
  
  @Column()
  nome: string;

  @BeforeInsert()
  generateId() {
    this.id = `fabr_${nanoid()}`;
  }

  @ManyToOne(() => Vendedor, (vendedor) => vendedor.fabricantes)
  @JoinColumn({ name: "vendedor_id" })
  vendedor: Vendedor;
}
