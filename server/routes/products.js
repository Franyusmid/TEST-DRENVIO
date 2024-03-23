//Importaciones

//A.librerias

import express from "express";

//B.ARICHIVOS
import productsController from "./../controllers/productsController.js";

//2 INICIALIZADORES

const router = express.Router();

//3.CONTROLADORES

router.get("/", productsController.readAll);

//4.EXPORTACIONES
export default router;
