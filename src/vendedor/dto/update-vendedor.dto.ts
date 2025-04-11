import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdateVendedorDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}