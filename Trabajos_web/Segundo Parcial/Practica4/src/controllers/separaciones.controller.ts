import { Request, Response } from "express";
import prisma from "../prisma";

//Para obtener todas las separaciones
export const getSeparaciones = async (req: Request, res: Response) => {
  const separaciones = await prisma.separacion.findMany({
    where: {
      Estado: 'Activa',
    },
  });
  res.json(separaciones);
};
//Para crear una separacion
export const createSeparacion = async (req: Request, res: Response) => {
  const newSeparacion = await prisma.separacion.create({
    data: {
      ...req.body,
      Estado: 'Activa',
    },
  });
  res.json(newSeparacion);
};

//Para actualizar una separacion
export const updateSeparacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedSeparacion = await prisma.separacion.update({
    where: { id: parseInt(id) },
    data: {
      //Campos que desees actualizar
        canchaId: req.body.canchaId,
        DeportistaId: req.body.deportistaId,
        Fecha_de_Separacion: req.body.Fecha, 
        Hora_desde: req.body.Hora,
        Hora_hasta: req.body.Hora, 
    },
  });
  res.json(updatedSeparacion);
};

//Para eliminar una separacion
export const deleteSeparacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.separacion.update({
    where: { id: parseInt(id) },
    data: {
      Estado: 'Inactivo',
    },
  });
  res.status(204).send(); // Respuesta exitosa sin contenido
};