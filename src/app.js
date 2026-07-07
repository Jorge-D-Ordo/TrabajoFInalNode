import express from "express";
import cors from "cors";

import productsRouter from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/products", productsRouter);
app.use("/auth", authRouter);

// 404
app.use(function (req, res, next) {
  res.status(404);
  res.send("ruta no encontrada");
});

app.use(errorMiddleware);

export default app;
