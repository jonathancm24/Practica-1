
import { DeportistaDatasource } from '../../../domain/deportista/datasource';
import{DeportistaDTO} from "../../../domain/deportista/dto";
import prisma from "../../../prisma";

class deportistaDatasourceImpl implements DeportistaDatasource {
    async findAll(): Promise<DeportistaDTO[]> {
        const deportistas = await prisma.deportista.findMany({
            where: {
                Estado: 'Activa',
            },
        });
        return deportistas.map((deportista) => ({
            id: deportista.id,
            Nombre: deportista.Nombre || '',
            identificacion: deportista.identificacion || '',
            Equipo_que_representa: deportista.Equipo_que_representa || '',
            Estado: deportista.Estado || 'Activa',
        }));
    }

    async create(data: DeportistaDTO): Promise<DeportistaDTO> {
        const newDeportista = await prisma.deportista.create({
            data: {
                Nombre: data.Nombre,
                identificacion: data.identificacion,
                Equipo_que_representa: data.Equipo_que_representa,
                Estado: 'Activa',
            },
        });
        return {
            id: newDeportista.id,
            Nombre: newDeportista.Nombre || '',
            identificacion: newDeportista.identificacion || '',
            Equipo_que_representa: newDeportista.Equipo_que_representa || '',
            Estado: newDeportista.Estado || 'Activa',
        };
    }

    async update(id: number, data: DeportistaDTO): Promise<DeportistaDTO> {
        const updatedDeportista = await prisma.deportista.update({
            where: { id },
            data: {
                Nombre: data.Nombre,
                identificacion: data.identificacion,
                Equipo_que_representa: data.Equipo_que_representa,
            },
        });
        return {
            id: updatedDeportista.id,
            Nombre: updatedDeportista.Nombre || '',
            identificacion: updatedDeportista.identificacion || '',
            Equipo_que_representa: updatedDeportista.Equipo_que_representa || '',
            Estado: updatedDeportista.Estado || 'Activa',
        };
    }

    async delete(id: number): Promise<void> {
        await prisma.deportista.update({
            where: { id },
            data: {
                Estado: 'Inactivo',
            },
        });
    }
}

export const deportistaDatasource = new deportistaDatasourceImpl();