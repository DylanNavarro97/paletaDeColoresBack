import { Router } from "express";
import { crearColor, listarColores } from "../controllers/colores.controllers.js";

const router = Router();

router.route("/colores").get(listarColores).post(crearColor)

export default router