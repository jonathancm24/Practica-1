import { Module } from '@nestjs/common';
import { ObraDeArteService } from './obra_de_arte.service';
import { ObraDeArteResolver } from './obra_de_arte.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [ObraDeArteService, ObraDeArteResolver, PrismaService],
})
export class ObraDeArteModule {}