import express from 'express';
import canchasRoutes from './Routes/canchas.routes';
import deportistasRoutes from './Routes/deportistas.routes';
import separacionesRoutes from './Routes/separaciones.routes';
import githubRoutes from './Routes/github.routes';
import errorMiddleware from './Middlewares/errores';
import { validateRequest } from './utils/validator';

const app = express();
app.use(express.json());

// Middleware de validación
app.use(validateRequest);

// Rutas
app.use('/canchas', canchasRoutes);
app.use('/deportistas', deportistasRoutes);
app.use('/separaciones', separacionesRoutes);
app.use('/github', githubRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));