import { Controller, Get, Post, Delete, Param, Body, Patch } from "@nestjs/common";
import { ObraService } from "./Obra.service";
import { CrearObraDTO } from "./DTO/Crear-obra.dto";

@Controller('obras')
export class ObraController {
    constructor(private obraService: ObraService) {}

    @Get()
    obtenerTodasLasObras() {
        return this.obraService.obtenerTodasLasObras();
    }

    @Get(':id')
    obtenerObraPorId(@Param('id') id: number) {
        return this.obraService.obtenerObraPorId(id);
    }

    @Get('codigo/:codigo')
    obtenerObraPorCodigo(@Param('codigo') codigo: string) {
        return this.obraService.obtenerObraPorCodigo(codigo);
    }

    @Get('valuadas/millon')
    obtenerObrasValuadasPorMasDeUnMillon() {
        return this.obraService.obtenerObrasValuadasPorMasDeUnMillon();
    }

    @Post()
    crearObra(@Body() data: CrearObraDTO) {
        return this.obraService.crearObra(data);
    }

    @Patch(':id')
    actualizarObra(@Param('id') id: number, @Body() data: CrearObraDTO) {
        return this.obraService.actualizarObra(id, data);
    }

    @Delete(':id')
    eliminarObra(@Param('id') id: number) {
        return this.obraService.eliminarObra(id);
    }
}
