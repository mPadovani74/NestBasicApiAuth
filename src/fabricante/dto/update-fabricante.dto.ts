import { IsOptional, IsString } from 'class-validator';

export class UpdateFabricanteDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  vendedorId?: string;
}
