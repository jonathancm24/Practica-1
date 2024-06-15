import { DeportistaDTO } from "./dto";
export interface DeportistaRepository {
    findAll(): Promise<DeportistaDTO[]>;
    create(data: DeportistaDTO): Promise<DeportistaDTO>;
    update(id: number, data: DeportistaDTO): Promise<DeportistaDTO>;
    delete(id: number): Promise<void>;
}