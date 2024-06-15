import { SeparacionDTO } from './dto';
export interface SeparacionDatasource {
  findAll(): Promise<SeparacionDTO[]>;
  create(data: SeparacionDTO): Promise<SeparacionDTO>;
  update(id: number, data: SeparacionDTO): Promise<SeparacionDTO>;
  delete(id: number): Promise<void>;
}