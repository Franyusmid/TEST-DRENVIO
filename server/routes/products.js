//Importaciones

//A.librerias

import express from "express";

//B.ARICHIVOS
import productController from "../controllers/productController.js";

//2 INICIALIZADORES

const router = express.Router();

//3.CONTROLADORES

router.get("/", productController.readAll);
router.post("/create", productController.create);
router.get("/readOne/:id", productController.readOne);

//4.EXPORTACIONES
export default router;
