import { Request, Response } from 'express';
import prisma from '../prisma';
//Para obtener todos los deportistas
export const getDeportistas = async (req: Request, res: Response) => {
  const deportistas = await prisma.deportista.findMany({
    where: {
      Estado: 'Activa',
    },
  });
  res.json(deportistas);
};

//Para crear un deportista
export const createDeportista = async (req: Request, res: Response) => {
  const newDeportista = await prisma.deportista.create({
    data: {
      ...req.body,
      Estado: 'Activa',
    },
  });
  res.json(newDeportista);
};

//Para actualizar un deportista
export const updateDeportista = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedDeportista = await prisma.deportista.update({
    where: { id: parseInt(id) },
    data: {
        //Campos que desees actualizar
      Nombre: req.body.Nombre,
      identificacion: req.body.identificacion,
      Equipo_que_representa: req.body.Equipo_que_reprseneta,
      
    },
  });
  res.json(updatedDeportista);
};

//Para eliminar un deportista
export const deleteDeportista = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.deportista.update({
    where: { id: parseInt(id) },
    data: {
      Estado: 'Inactivo',
    },
  });
  res.status(204).send(); // Respuesta exitosa sin contenido
};