// obra_de_arte/obra_de_arte.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Obra_de_arte } from '@prisma/client';
import { CreateObraDeArteInput, UpdateObraDeArteInput } from './model/obra_de_arte.dto';

@Injectable()
export class ObraDeArteService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateObraDeArteInput): Promise<Obra_de_arte> {
    return this.prisma.obra_de_arte.create({
      data: {
        ...data,
      },
    });
  }

  async update(id: number, data: UpdateObraDeArteInput): Promise<Obra_de_arte> {
    return this.prisma.obra_de_arte.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  async delete(id: number): Promise<Obra_de_arte> {
    return this.prisma.obra_de_arte.delete({
      where: { id },
    });
  }

  async logicalDelete(id: number): Promise<Obra_de_arte> {
    return this.prisma.obra_de_arte.update({
      where: { id },
      data: { eliminado_logicamente: true },
    });
  }
  async findOne(id: number): Promise<Obra_de_arte> {
    return this.prisma.obra_de_arte.findUnique({
      where: { id },
    });
  }
}