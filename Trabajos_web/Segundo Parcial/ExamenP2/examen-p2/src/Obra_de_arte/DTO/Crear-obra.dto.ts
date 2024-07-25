import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CrearObraDTO {
    @IsString()
    @IsNotEmpty()
    codigo: string;

    @IsString()
    @IsNotEmpty()
    Nombre_artistico: string;

    @IsString()
    @IsNotEmpty()
    Artista: string;

    @IsString()
    @IsNotEmpty()
    Tipo: string;

    @IsNumber()
    @IsNotEmpty()
    Evaluado_en: number;

    @IsString()
    @IsNotEmpty()
    Fecha_de_ultimo_retoque: string;

    @IsString()
    @IsNotEmpty()  
    Empresa: string;
}