import { Entorno, PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express';

const prisma = new PrismaClient();
const router = express.Router();

/*

async function LlenarEntorno(){
    await prisma.entorno.create({
        data: {
            Descripcion: 'Pruebas',
        }
    })
    console.log('Se insertaron los datos correctamente')
}
async function llenarCancha() {
 
    await prisma.cancha.create({
      data: {
        Descripcion: 'Cancha de futbol',
        EntrnoID: 1,
      }
    })
    console.log('Se insertaron los datos correctamente')
  }

async function LlenarDeportista(){
    await prisma.deportista.create({
        data: {
            EntrnoID: 1,
            Nombre: 'Juan',
            identificacion: '1351480623',
            Equipo_que_representa: "Equipo 1",
            
        }
    })
    console.log('Se insertaron los datos correctamente')
}

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
    async function main() {
    
  }
  
  main()
    .catch(e => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })

}*/


router.put('/:entityName/:id', async (req , res) => {
  const { entityName, id } = req.params;
  const data = req.body;
  const environmentId = data.EntrnoID;

  try {
    let entity;
    switch (entityName) {
      case 'canchas':
        entity = await prisma.cancha.update({
          where: { id: parseInt(id) },
          data: {
            ...data,
            Entorno: { connect: { id: environmentId } },
          },
        });
        break;
      case 'deportistas':
        entity = await prisma.deportista.update({
          where: { id: parseInt(id) },
          data: {
            ...data,
            Entorno: { connect: { id: environmentId } },
          },
        });
        break;
      case 'separaciones':
        entity = await prisma.separacion.update({
          where: { id: parseInt(id) },
          data: {
            ...data,
            Entorno: { connect: { id: environmentId } },
          },
        });
        break;
      default:
        return res.status(404).json({ error: 'Entidad no encontrada' });
    }

    res.json(entity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la entidad' });
  }
});

module.exports = router;

