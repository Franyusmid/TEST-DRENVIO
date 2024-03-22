// 1. IMPORTACIONES
//A.LIBRERIAS
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//B.ARCHIVOS
import userRoute from "./routes/users.js";

//2. INICIALIZADORES

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// 3. RUTAS

app.use("/api/v1/users", userRoute);

// 4.LEVANTAMIENTO DEL SERVIDOR

app.listen(process.env.BASE_URL_PORT, () =>
  console.log("El servidor esta activo")
);