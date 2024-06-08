import { Router } from "express";
import { getDeportistas, createDeportista, updateDeportista, deleteDeportista } from "../controllers/deportistas.controller";

const router = Router();
// Rutas para deportistas
router.get('/', getDeportistas);
router.post('/', createDeportista);
router.put('/:id', updateDeportista);
router.delete('/:id', deleteDeportista);

export default router;
