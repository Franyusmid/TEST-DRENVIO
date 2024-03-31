//Importaciones

//A.librerias

import express from "express";

//B.ARICHIVOS
import userController from "../controllers/userController.js";

//2 INICIALIZADORES

const router = express.Router();

//3.CONTROLADORES

router.post("/create", userController.create);

//4.EXPORTACIONES
export default router;
