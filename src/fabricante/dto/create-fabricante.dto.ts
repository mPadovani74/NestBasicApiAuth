import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFabricanteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  vendedorId: string;
}
