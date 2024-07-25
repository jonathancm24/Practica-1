import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { CrearObraDTO } from "./DTO/Crear-obra.dto";

@Injectable()
export class ObraService {
    constructor(private prisma: PrismaService) {}

    async obtenerTodasLasObras() {
        return this.prisma.obra_de_arte.findMany();
    }

    async obtenerObraPorId(id: number) {
        const obra = await this.prisma.obra_de_arte.findUnique({
            where: { id: id }
        });
        if (!obra) {
            throw new NotFoundException(`La obra con id ${id} no se encontró`);
        }
        return obra;
    }

    // obtener obra por codigo
    async obtenerObraPorCodigo(Codigo: string) {
        const obra = await this.prisma.obra_de_arte.findUnique({
            where: { codigo: Codigo }
        });
        if (!obra) {
            throw new NotFoundException(`La obra con codigo ${Codigo} no se encontró`);
        }
        return obra;
    }

    // obtener obras valuadas por mas de un millon de dolares
    async obtenerObrasValuadasPorMasDeUnMillon() {
        return this.prisma.obra_de_arte.findMany({
            where: {
                Evaluado_en: {
                    gt: 1000000
                }
            }
        });
    }

    async crearObra(data: CrearObraDTO) {
        return this.prisma.obra_de_arte.create({ data });
    }

    async actualizarObra(id: number, data: CrearObraDTO) {
        return this.prisma.obra_de_arte.update({
            where: { id: id },
            data
        });
    }

    async eliminarObra(id: number) {
        return this.prisma.obra_de_arte.delete({
            where: { id: id }
        });
    }
}
