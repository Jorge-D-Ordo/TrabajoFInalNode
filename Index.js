import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

/*                      borrar  ********************************************************************* */
console.log("Programa iniciado");


dotenv.config();
app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
