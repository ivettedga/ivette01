import { Router } from "express";
import { hola, adios } from "../controllers/saludosController";

const router = Router();

router.get('/hola', hola);
router.get('/adios', adios);

export default router;