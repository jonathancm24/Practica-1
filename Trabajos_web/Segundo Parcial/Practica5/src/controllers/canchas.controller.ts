import { Request, Response } from 'express';
import prisma from '../prisma';

//Para obtener todas las canchas
export const getCanchas = async (req: Request, res: Response) => {
  const canchas = await prisma.cancha.findMany({
    where: {
      Estado: 'Activa',
    },
  });
  res.json(canchas);
};

//Para crear una cancha
export const createCancha = async (req: Request, res: Response) => {
  const newCancha = await prisma.cancha.create({
    data: {
      ...req.body,
      Estado: 'Activa',
    },
  });
  res.json(newCancha);
};

//Para actualizar una cancha
export const updateCancha = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedCancha = await prisma.cancha.update({
    where: { id: parseInt(id) },
    data: {
      Descripcion: req.body.Descripcion, // Campos que desees actualizar
    },
  });
  res.json(updatedCancha);
};

//Para eliminar una cancha
export const deleteCancha = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.cancha.update({
    where: { id: parseInt(id) },
    data: {
      Estado: 'Inactivo',
    },
  });
  res.status(204).send(); // Respuesta exitosa sin contenido
};