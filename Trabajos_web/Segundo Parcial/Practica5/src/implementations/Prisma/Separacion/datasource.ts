import { SeparacionDatasource } from '../../../domain/separacion/datasource';
import { SeparacionDTO } from '../../../domain/separacion/dto';
import prisma from '../../../prisma';

class SeparacionDatasourceImpl implements SeparacionDatasource {
  async findAll(): Promise<SeparacionDTO[]> {
    const separaciones = await prisma.separacion.findMany({
      where: {
        Estado: 'Activa',
      },
    });
    return separaciones.map((separacion) => ({
      id: separacion.id,
      canchaId: separacion.canchaId,
      DeportistaId: separacion.DeportistaId,
      Fecha_de_Separacion: separacion.Fecha_de_Separacion || '',
      Hora_desde: separacion.Hora_desde || '',
      Hora_hasta: separacion.Hora_hasta || '',
      Estado: separacion.Estado || 'Activa',
    }));
  }

  async create(data: SeparacionDTO): Promise<SeparacionDTO> {
    const newSeparacion = await prisma.separacion.create({
      data: {
        canchaId: data.canchaId,
        DeportistaId: data.DeportistaId,
        Fecha_de_Separacion: data.Fecha_de_Separacion,
        Hora_desde: data.Hora_desde,
        Hora_hasta: data.Hora_hasta,
        Estado: 'Activa',
      },
    });
    return {
      id: newSeparacion.id,
      canchaId: newSeparacion.canchaId,
      DeportistaId: newSeparacion.DeportistaId,
      Fecha_de_Separacion: newSeparacion.Fecha_de_Separacion || '',
      Hora_desde: newSeparacion.Hora_desde || '',
      Hora_hasta: newSeparacion.Hora_hasta  || '',
      Estado: newSeparacion.Estado || 'Activa',
    };
  }

  async update(id: number, data: SeparacionDTO): Promise<SeparacionDTO> {
    const updatedSeparacion = await prisma.separacion.update({
      where: { id },
      data: {
        canchaId: data.canchaId,
        DeportistaId: data.DeportistaId,
        Fecha_de_Separacion: data.Fecha_de_Separacion,
        Hora_desde: data.Hora_desde,
        Hora_hasta: data.Hora_hasta,
      },
    });
    return {
      id: updatedSeparacion.id,
      canchaId: updatedSeparacion.canchaId,
      DeportistaId: updatedSeparacion.DeportistaId,
      Fecha_de_Separacion: updatedSeparacion.Fecha_de_Separacion || '',
      Hora_desde: updatedSeparacion.Hora_desde || '',
      Hora_hasta: updatedSeparacion.Hora_hasta || '',
      Estado: updatedSeparacion.Estado || 'Activa',
    };
  }

  async delete(id: number): Promise<void> {
    await prisma.separacion.update({
      where: { id },
      data: {
        Estado: 'Inactivo',
      },
    });
  }
}

export const separacionDatasource = new SeparacionDatasourceImpl();