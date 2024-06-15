import { Router } from 'express';
import { getCanchas, createCancha, updateCancha, deleteCancha } from '../controllers/canchas.controller';

const router = Router();
// Rutas para canchas
router.get('/', getCanchas);
router.post('/', createCancha);
router.put('/:id', updateCancha);
router.delete('/:id', deleteCancha);

export default router;