
import { SeparacionDTO } from './dto';
import { Separacion } from './entity';

export interface SeparacionRepository {
  findAll(): Promise<Separacion[]>;
  create(data: SeparacionDTO): Promise<Separacion>;
  update(id: number, data: SeparacionDTO): Promise<Separacion>;
  delete(id: number): Promise<void>;
}