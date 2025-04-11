import { Fabricante } from "src/fabricante/entities/fabricante.entity";
import { OneToMany, PrimaryColumn, Column, Entity } from "typeorm";

@Entity('vendedor')
export class Vendedor {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @OneToMany(() => Fabricante, (fabricante) => fabricante.vendedor)
  fabricantes: Fabricante[];
}
