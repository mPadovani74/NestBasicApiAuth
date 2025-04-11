import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateVendedorDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsEmail()
  email: string;
}