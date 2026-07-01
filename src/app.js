import express from "express";
import cors from "cors";
import bodyParser from "body-parser";  
import dotenv from "dotenv";
/*import 'dotenv/config';                ********************************* */

import productsRouter from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(cors({
    Origin: (origin, callback) => {
        if (!origin || origin === `http://localhost:${PORT}`) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
})

app.use(bodyParser.json());
//app.use(productsRouters);

app.use("/api/products", productsRouter);
app.use("/auth", authRouter);



//app.use("/api/products", productsRoutes);

//app.use("/auth", authRoutes);

// 404
app.use(function (req, res, next) {
  res.status(404)
  res.send("ruta no encontrada")
});

export default app;