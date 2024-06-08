import { Router } from 'express';
import { axiosHttpClient, nodeFetchHttpClient } from '../http-client';

const router = Router();

router.get('/', async (req, res) => {
  try {
    // Opción 1: Utilizar axios
    const datosCompanero = await axiosHttpClient.get('http://localhost:3000/Consumo');

    // Opción 2: Utilizar node-fetch
    // const datosCompanero = await nodeFetchHttpClient.get('http://localhost:3000/Consumo');

    res.json(datosCompanero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos del compañero' });
  }
});

export default router;