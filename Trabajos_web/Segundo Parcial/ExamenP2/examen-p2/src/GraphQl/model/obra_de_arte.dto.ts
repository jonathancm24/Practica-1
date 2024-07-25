// obra_de_arte/dto/obra_de_arte.dto.ts
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt, IsDate } from 'class-validator';

@InputType()
export class CreateObraDeArteInput {
  @Field()
  @IsString()
  codigo: string;

  @Field()
  @IsString()
  Nombre_artistico: string;

  @Field()
  @IsString()
  Artista: string;

  @Field()
  @IsString()
  Tipo: string;

  @Field(() => Int)
  @IsInt()
  Evaluado_en: number;

  @Field()
  @IsDate()
  Fecha_de_ultimo_retoque: Date;

  @Field()
  @IsString()
  Empresa: string;
}

@InputType()
export class UpdateObraDeArteInput {
  @Field({ nullable: true })
  @IsString()
  codigo?: string;

  @Field({ nullable: true })
  @IsString()
  Nombre_artistico?: string;

  @Field({ nullable: true })
  @IsString()
  Artista?: string;

  @Field({ nullable: true })
  @IsString()
  Tipo?: string;

  @Field(() => Int, { nullable: true })
  @IsInt()
  Evaluado_en?: number;

  @Field({ nullable: true })
  @IsDate()
  Fecha_de_ultimo_retoque?: Date;

  @Field({ nullable: true })
  @IsString()
  Empresa?: string;
}
