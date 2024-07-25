import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ObraDeArteentity {
  @Field(() => Int)
  id: number;

  @Field()
  codigo: string;

  @Field()
  Nombre_artistico: string;

  @Field()
  Artista: string;

  @Field()
  Tipo: string;

  @Field()
  Evaluado_en: number;

  @Field()
  Fecha_de_ultimo_retoque: string;

  @Field()
  Empresa: string;

  @Field()
  eliminado_logicamente?: boolean;
}
