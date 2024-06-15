import { DeportistaRepository } from "../../../domain/deportista/repository";
import { Deportista } from "../../../domain/deportista/entity";
import { DeportistaDTO } from "../../../domain/deportista/dto";
import { deportistaDatasource } from "./datasource";

class DeportistaRepositoryImpl implements DeportistaRepository {
    async findAll(): Promise<Deportista[]> {
        const deportistas = await deportistaDatasource.findAll();
        return deportistas.map((deportista) => new Deportista(deportista));
    }

    async create(data: DeportistaDTO): Promise<Deportista> {
        const deportistaDTO = await deportistaDatasource.create(data);
        return new Deportista(deportistaDTO);
    }

    async update(id: number, data: DeportistaDTO): Promise<Deportista> {
        const deportistaDTO = await deportistaDatasource.update(id, data);
        return new Deportista(deportistaDTO);
    }

    async delete(id: number): Promise<void> {
        await deportistaDatasource.delete(id);
    }
}