import Express from "express";
import cors from "cors";
const app = Express();
import mongoose from "mongoose";

import "./models/Film.js";
import FilmRouter from "./routes/filmRouter.js";

// Habilita parsing de JSON e form data
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Habilita CORS para permitir requisições do frontend (em dev permite todas as origens)
app.use(cors());

mongoose.connect("mongodb://localhost:27017/films");

app.use("/", FilmRouter);

const PORT = 3200;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando localmente na porta http://localhost:${PORT}`);
});
