import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rutas para Cancha
app.get('/canchas', async (req, res) => {
    const canchas = await prisma.cancha.findMany({
        where: {
            Estado: 'Activa', // Filtra por registros activos
        },
    });
    res.json(canchas);
});

app.post('/canchas', async (req, res) => {
    const newCancha = await prisma.cancha.create({
        data: {
            ...req.body,
            Estado: 'Activa', // Establece el estado al crear una nueva cancha
        },
    });
    res.json(newCancha);
});
app.put('/canchas/:id', async (req, res) => {
    const { id } = req.params;
    const updatedCancha = await prisma.cancha.update({
        where: { id: parseInt(id) },
        data: {
            Descripcion: req.body.Descripcion, // Actualiza la descripción según los datos enviados
            // Otros campos que desees actualizar
        },
    });
    res.json(updatedCancha);
});
app.delete('/canchas/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.cancha.update({
        where: { id: parseInt(id) },
        data: {
            Estado: 'Inactivo', // Establece el estado a "Inactivo"
        },
    });
    res.status(204).send(); // Respuesta exitosa sin contenido
});

// Rutas para Deportista
app.get('/deportistas', async (req, res) => {
    const deportistas = await prisma.deportista.findMany({
        where: {
            Estado: 'Activa', // Filtra por registros activos
        },
    });
    res.json(deportistas);
});

app.post('/deportistas', async (req, res) => {
    const newDeportista = await prisma.deportista.create({
        data: {
            ...req.body,
            Estado: 'Activa', // Establece el estado al crear una nueva cancha
        },
    });
    res.json(newDeportista);
});

app.put('/deportistas/:id', async (req, res) => {
    const { id } = req.params;
    const updatedDeportista = await prisma.deportista.update({
        where: { id: parseInt(id) },
        data: {
            Nombre: req.body.Descripcion, 
            identificacion: req.body.identificacion,
            Equipo_que_representa: req.body.Equipo_que_reprsenata,
        },
    });
    res.json(updatedDeportista);
});

app.delete('/deportistas/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.deportista.update({
        where: { id: parseInt(id) },
        data: {
            Estado: 'Inactivo', // Establece el estado a "Inactivo"
        },
    });
    res.status(204).send(); // Respuesta exitosa sin contenido
});

// Rutas para Separacion
app.get('/separaciones', async (req, res) => {
    const separaciones = await prisma.separacion.findMany({
        where: {
            Estado: 'Activa', // Filtra por registros activos
        },
    });
    res.json(separaciones);
});

app.post('/separaciones', async (req, res) => {
    const newSeparacion = await prisma.separacion.create({
        data: {
            ...req.body,
            Estado: 'Activa', // Establece el estado al crear una nueva cancha
        },
    });
    res.json(newSeparacion);
});

app.put('/separaciones/:id', async (req, res) => {
    const { id } = req.params;
    const updatedSeparacion = await prisma.separacion.update({
        where: { id: parseInt(id) },
        data: {
            canchaId: req.body.canchaId,
            DeportistaId: req.body.deportistaId,
            Fecha_de_Separacion: req.body.Fecha, 
            Hora_desde: req.body.Hora,
            Hora_hasta: req.body.Hora,      
        },
    });
    res.json(updatedSeparacion);
});

app.delete('/separaciones/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.separacion.update({
        where: { id: parseInt(id) },
        data: {
            Estado: 'Inactivo', // Establece el estado a "Inactivo"
        },
    });
    res.status(204).send(); // Respuesta exitosa sin contenido
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));