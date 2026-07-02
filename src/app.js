import express from "express";
import cors from "cors";
/* import bodyParser from "body-parser";    ********************************* */
import dotenv from "dotenv";
/*import 'dotenv/config';                   ********************************* */

import productsRouter from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();



/*app.get('/',(req,res) => {res.send('hola, todo todo bien desde express');}); ************************ */



app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
});



/*      prueba luego borrar  ************************************************************************* */
app.get("/", (req, res) => {
  res.json({
    mensaje: "API funcionando correctamente"
  });
});



app.use("/api/products", productsRouter);
app.use("/auth", authRouter);


// 404
app.use(function (req, res, next) {
    res.status(404)
    res.send("ruta no encontrada")
});

app.use(errorMiddleware);


export default app;