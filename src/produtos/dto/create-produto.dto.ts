import { IsDate, IsDateString, IsString } from "class-validator";

export class CreateProdutoDto {

    @IsString()
    nome: string;

    @IsDateString()
    dataDeValidade: string;

}
