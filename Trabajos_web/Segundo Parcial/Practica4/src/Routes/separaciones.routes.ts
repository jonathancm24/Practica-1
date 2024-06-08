import { Router } from "express";
import { getSeparaciones, createSeparacion, updateSeparacion, deleteSeparacion } from "../controllers/separaciones.controller";

const router = Router();
// Rutas para separaciones
router.get('/', getSeparaciones);
router.post('/', createSeparacion);
router.put('/:id', updateSeparacion);
router.delete('/:id', deleteSeparacion);

export default router;