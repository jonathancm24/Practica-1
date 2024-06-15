import { CanchaDatasource } from '../../../domain/cancha/datasource';
import { CanchaDTO } from '../../../domain/cancha/dto';
import prisma from '../../../prisma';

class CanchaDatasourceImpl implements CanchaDatasource {
  async findAll(): Promise<CanchaDTO[]> {
    const canchas = await prisma.cancha.findMany({
      where: {
        Estado: 'Activa',
      },
    });
    return canchas.map((cancha) => ({
      id: cancha.id,
      Descripcion: cancha.Descripcion ,
      Estado: cancha.Estado || 'Activa',
    }));
  }

  async create(data: CanchaDTO): Promise<CanchaDTO> {
    const newCancha = await prisma.cancha.create({
      data: {
        Descripcion: data.Descripcion,
        Estado: 'Activa',
      },
    });
    return {
      id: newCancha.id,
      Descripcion: newCancha.Descripcion,
      Estado: newCancha.Estado || 'Activa',
    };
  }

  async update(id: number, data: CanchaDTO): Promise<CanchaDTO> {
    const updatedCancha = await prisma.cancha.update({
      where: { id },
      data: {
        Descripcion: data.Descripcion,
      },
    });
    return {
      id: updatedCancha.id,
      Descripcion: updatedCancha.Descripcion,
      Estado: updatedCancha.Estado || 'Activa',
    };
  }

  async delete(id: number): Promise<void> {
    await prisma.cancha.update({
      where: { id },
      data: {
        Estado: 'Inactivo',
      },
    });
  }
}

export const canchaDatasource = new CanchaDatasourceImpl();