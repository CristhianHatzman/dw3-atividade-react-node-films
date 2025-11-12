import express from "express";
const FilmRouter = express.Router();
import FilmController from "../controllers/filmController.js";

FilmRouter.get("/films", FilmController.getAllFilms);
FilmRouter.post("/films", FilmController.createFilm);
FilmRouter.delete("/films/:id", FilmController.deleteFilm);
FilmRouter.put("/films/:id", FilmController.UpdateFilm);
FilmRouter.get("/films/:id", FilmController.getOneFilm);

export default FilmRouter;
