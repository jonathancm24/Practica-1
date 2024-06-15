import { SeparacionRepository } from '../../../domain/separacion/repository';
import { Separacion } from '../../../domain/separacion/entity';
import { SeparacionDTO } from '../../../domain/separacion/dto';
import { separacionDatasource } from './datasource';

class SeparacionRepositoryImpl implements SeparacionRepository {
  async findAll(): Promise<Separacion[]> {
    const separaciones = await separacionDatasource.findAll();
    return separaciones.map((separacion) => new Separacion(separacion));
  }

  async create(data: SeparacionDTO): Promise<Separacion> {
    const separacionDTO = await separacionDatasource.create(data);
    return new Separacion(separacionDTO);
  }

  async update(id: number, data: SeparacionDTO): Promise<Separacion> {
    const separacionDTO = await separacionDatasource.update(id, data);
    return new Separacion(separacionDTO);
  }

  async delete(id: number): Promise<void> {
    await separacionDatasource.delete(id);
  }
}

export const separacionRepository = new SeparacionRepositoryImpl();