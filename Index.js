import app from "./src/app.js";

const PORT = process.env.PORT || 3000;
console.log("Programa iniciado");

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
