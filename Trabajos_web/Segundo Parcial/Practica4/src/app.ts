import express from 'express';
import canchasRoutes from './Routes/canchas.routes';
import deportistasRoutes from './Routes/deportistas.routes';
import separacionesRoutes from './Routes/separaciones.routes';
import errorMiddleware from './Middlewares/errores';
import { validateRequest } from './utils/validator';

const app = express();
app.use(express.json());

// Rutas
app.use('/canchas', canchasRoutes);
app.use('/deportistas', deportistasRoutes);
app.use('/separaciones', separacionesRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

// Middleware de validación de campos
app.use(validateRequest);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));