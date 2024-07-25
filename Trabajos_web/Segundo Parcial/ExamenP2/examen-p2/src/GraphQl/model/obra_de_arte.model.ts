// obra_de_arte/models/obra_de_arte.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ObraDeArte {
  @Field(() => Int)
  id: number;

  @Field()
  codigo: String;

  @Field()
  Nombre_artistico: String;

  @Field()
  Artista: String;

  @Field()
  Tipo: String;

  @Field(() => Int)
  Evaluado_en: number;

  @Field()
  Fecha_de_ultimo_retoque: Date;

  @Field()
  Empresa: String;

  @Field()
  eliminado_logicamente: boolean;
}
