//Importaciones

//A.librerias

import express from "express";

//B.ARICHIVOS
import usersController from "./../controllers/useController.js";

//2 INICIALIZADORES

const router = express.Router();

//3.CONTROLADORES

router.get("/", usersController.readAll);

//4.EXPORTACIONES
export default router;
