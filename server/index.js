// 1. IMPORTACIONES
//A.LIBRERIAS
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//B.ARCHIVOS
import userRoute from "./routes/users.js";
import productRoute from "./routes/products.js";

//2. INICIALIZADORES

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

const port = process.env.BASE_URL_PORT || 3005;

// 3. RUTAS

app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);

// 4.LEVANTAMIENTO DEL SERVIDOR

app.listen(port, () => console.log("El servidor esta activo"));
