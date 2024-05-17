import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rutas para Cancha
app.get('/canchas', async (req, res) => {
    const canchas = await prisma.cancha.findMany();
    res.json(canchas);
});

app.post('/canchas', async (req, res) => {
    const newCancha = await prisma.cancha.create({
        data: req.body,
    });
    res.json(newCancha);
});

// Rutas para Deportista
app.get('/deportistas', async (req, res) => {
    const deportistas = await prisma.deportista.findMany();
    res.json(deportistas);
});

app.post('/deportistas', async (req, res) => {
    const newDeportista = await prisma.deportista.create({
        data: req.body,
    });
    res.json(newDeportista);
});

// Rutas para Separacion
app.get('/separaciones', async (req, res) => {
    const separaciones = await prisma.separacion.findMany();
    res.json(separaciones);
});

app.post('/separaciones', async (req, res) => {
    const newSeparacion = await prisma.separacion.create({
        data: req.body,
    });
    res.json(newSeparacion);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));