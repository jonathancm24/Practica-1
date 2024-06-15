import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Manejo de errores personalizados
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
};

export default errorMiddleware;