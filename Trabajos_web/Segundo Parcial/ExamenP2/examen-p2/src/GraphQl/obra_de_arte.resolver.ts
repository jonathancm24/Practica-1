// obra_de_arte/obra_de_arte.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ObraDeArteService } from './obra_de_arte.service';
import { ObraDeArte } from './model/obra_de_arte.model';
import { CreateObraDeArteInput, UpdateObraDeArteInput } from './model/obra_de_arte.dto';

@Resolver(() => ObraDeArte)
export class ObraDeArteResolver {
  constructor(private readonly obraDeArteService: ObraDeArteService) {}

  @Mutation(() => ObraDeArte)
  createObraDeArte(@Args('createObraDeArteInput') createObraDeArteInput: CreateObraDeArteInput) {
    return this.obraDeArteService.create(createObraDeArteInput);
  }

  @Mutation(() => ObraDeArte)
  updateObraDeArte(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateObraDeArteInput') updateObraDeArteInput: UpdateObraDeArteInput,
  ) {
    return this.obraDeArteService.update(id, updateObraDeArteInput);
  }

  @Mutation(() => ObraDeArte)
  deleteObraDeArte(@Args('id', { type: () => Int }) id: number) {
    return this.obraDeArteService.delete(id);
  }

  @Mutation(() => ObraDeArte)
  logicalDeleteObraDeArte(@Args('id', { type: () => Int }) id: number) {
    return this.obraDeArteService.logicalDelete(id);
  }
  @Query(() => ObraDeArte, { name: 'obraDeArte' })
  getObraDeArte(@Args('id', { type: () => Int }) id: number) {
    return this.obraDeArteService.findOne(id);
  }
}