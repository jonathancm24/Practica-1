import { IsString, IsOptional, IsNumber } from "class-validator";

export class ActualizarObraDTO {
    @IsString()
    @IsOptional()
    codigo: string;

    @IsString()
    @IsOptional()
    Nombre_artistico: string;

    @IsString()
    @IsOptional()
    Artista: string;

    @IsString()
    @IsOptional()
    Tipo: string;

    @IsNumber()
    @IsOptional()
    Evaluado_en: number;

    @IsString()
    @IsOptional()
    Fecha_de_ultimo_retoque: string;

    @IsString()
    @IsOptional()  
    Empresa: string;
}