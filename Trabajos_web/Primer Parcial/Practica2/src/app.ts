import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/*async function llenarCancha(): Promise<void> {
    for (let i = 0; i < 10; i++) {
      await prisma.cancha.create({
        data: {
          Descripcion: `Cancha ${i+1}`,
        }
      })
    }
    console.log('10 registros insertados en la entidad cancha.')
  }
  
  async function llenarDeportista(): Promise<void> {
    for (let i = 0; i < 10; i++) {
      await prisma.deportista.create({
        data: {
          Nombre: `Deportista ${i+1}`,
          identificacion: `ID${i+1}`,
          Equipo_que_representa: `Equipo ${i+1}`,
        }
      })
    }
    console.log('10 registros insertados en la entidad Deportista.')
  }
  
  async function main() {
    await llenarCancha();
    await llenarDeportista();
  }
  
  main()
    .catch(e => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })*/


/*async function llenar(): Promise<void> {
  for (let i = 0; i < 10; i++) {
    await prisma.separacion.create({
      data: {
        id_Cancha: {
          connect: {
            id: i+1 // Aquí debes proporcionar el ID de la cancha existente
          }
        },
        id_Deportista: {
          connect: {
            id: i+1 // Aquí debes proporcionar el ID del deportista existente
          }
        },
        Fecha_de_Separacion: `2024-05-${i+1}`,
        Hora_desde: `10:00:00`,
        Hora_hasta: `11:00:00`,
      }
    })
  }
  console.log('10 registros insertados en la entidad separacion.')
}

llenar()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })*/

  async function buscar(id: number): Promise<void> {
    const separacion = await prisma.separacion.findUnique({
      where: {
        id: id
      },
      include: {
        id_Cancha: true,
        id_Deportista: true
      }
    })
  
    if (separacion) {
      console.log(separacion)
    } else {
      console.log(`No se encontró ninguna transacción con el ID ${id}.`)
    }
  }
  
  buscar(5) // Reemplaza 1 con el ID de la transacción que deseas buscar
    
  
  
  async function consultar(): Promise<void> {
    const separaciones = await prisma.separacion.findMany({
      include: {
        id_Cancha: true,
        id_Deportista: true
      }
    })
  
    for (const separacion of separaciones) {
      console.log('Transacción:', separacion)
      console.log('Cancha:', separacion.id_Cancha)
      console.log('Deportista:', separacion.id_Deportista)
      console.log('-------------------------')
    }
  }
  
  consultar()
  
  
  
  
  .catch(e => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })