import { CanchaRepository } from '../../../domain/cancha/repository';
import { Cancha } from '../../../domain/cancha/entity';
import { CanchaDTO } from '../../../domain/cancha/dto';
import { canchaDatasource } from './datasource';

class CanchaRepositoryImpl implements CanchaRepository {
  async findAll(): Promise<Cancha[]> {
    const canchas = await canchaDatasource.findAll();
    return canchas.map((cancha) => new Cancha(cancha));
  }

  async create(data: CanchaDTO): Promise<Cancha> {
    const canchaDTO = await canchaDatasource.create(data);
    return new Cancha(canchaDTO);
  }

  async update(id: number, data: CanchaDTO): Promise<Cancha> {
    const canchaDTO = await canchaDatasource.update(id, data);
    return new Cancha(canchaDTO);
  }

  async delete(id: number): Promise<void> {
    await canchaDatasource.delete(id);
  }
}

export const canchaRepository = new CanchaRepositoryImpl();