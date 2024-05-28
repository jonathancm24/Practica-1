"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/*



async function LlenarSeparacion(){
    await prisma.separacion.create({
        data: {
            cancha: {
                connect: {
                    id: 1
                }
            },
            Deportista: {
                connect: {
                    id: 1
                }
            },
            Entorno: {
                connect: {
                    id: 1
                }
            },
            Fecha_de_Separacion: "2021-10-10",
            Hora_desde: "10:00",
            Hora_hasta: "12:00",
        }
    })
    console.log('Se insertaron los datos correctamente')

}

async function LlenarEntorno(){
    await prisma.entorno.create({
        data: {
            Descripcion: 'Pruebas',
        }
    })
    console.log('Se insertaron los datos correctamente')
}*/
function llenarCancha() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.cancha.create({
            data: {
                Descripcion: 'Cancha de futbol',
                EntrnoID: 1,
            }
        });
        console.log('Se insertaron los datos correctamente');
    });
}
function LlenarDeportista() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.deportista.create({
            data: {
                EntrnoID: 1,
                Nombre: 'Juan',
                identificacion: '1351480623',
                Equipo_que_representa: "Equipo 1",
            }
        });
        console.log('Se insertaron los datos correctamente');
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield llenarCancha();
        yield LlenarDeportista();
    });
}
main()
    .catch(e => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
