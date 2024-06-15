import { CanchaDTO } from './dto';

export interface CanchaDatasource {
  findAll(): Promise<CanchaDTO[]>;
  create(data: CanchaDTO): Promise<CanchaDTO>;
  update(id: number, data: CanchaDTO): Promise<CanchaDTO>;
  delete(id: number): Promise<void>;
}