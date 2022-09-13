import morgan from "morgan"
import express from "express";
import productRoutes from "./Routes/productRoutes.js"

const port = 3000
// Inicializar express
const app = express();

// Configuración
app.set("port", port)

// Middleware
app.use(express.json())
app.use(morgan('dev'))

//Rutas
app.use(productRoutes)


export default app