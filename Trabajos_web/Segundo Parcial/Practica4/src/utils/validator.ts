import { Request, Response, NextFunction } from 'express';

interface ValidationError {
  [key: string]: string;
}

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors: ValidationError = {};

  // Validaciones generales para todas las rutas
  if (!req.body) {
    errors.body = 'El cuerpo de la solicitud está vacío';
  }

  // Validaciones específicas por ruta
  if (req.path === '/canchas' && req.method === 'POST') {
    // Validaciones para crear una nueva cancha
    if (!req.body.Descripcion) {
      errors.Descripcion = 'La descripción es requerida';
    }
  }

  if (req.path === '/deportistas' && req.method === 'POST') {
    // Validaciones para crear un nuevo deportista
    if (!req.body.Nombre) {
      errors.Nombre = 'El nombre es requerido';
    }
    if (!req.body.identificacion) {
      errors.identificacion = 'La identificación es requerida';
    }
    if (!req.body.Equipo_que_representa) {
      errors.Equipo_que_representa = 'El equipo que representa es requerido';
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};