import express from "express";
import saludosRoutes from "./routes/saludosRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', saludosRoutes);
app.listen(PORT, () => {
  console.log(`Inicie la aplicación en el puerto ${PORT}`);
});