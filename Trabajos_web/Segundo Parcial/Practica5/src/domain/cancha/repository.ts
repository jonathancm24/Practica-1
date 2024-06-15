import { CanchaDTO } from './dto';
import { Cancha } from './entity';

export interface CanchaRepository {
  findAll(): Promise<Cancha[]>;
  create(data: CanchaDTO): Promise<Cancha>;
  update(id: number, data: CanchaDTO): Promise<Cancha>;
  delete(id: number): Promise<void>;
}