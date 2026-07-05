import app from "./src/app.js";

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
  });
}

export default app;