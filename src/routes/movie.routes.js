import { Router } from "express";
import express from "express";

import {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie,
} from "../controllers/movie.controllers.js"

const routesMovies = express.Router();

    routesMovies.post("/", createMovie);
    routesMovies.get("/getAlll", getAllMovies);
    routesMovies.get("/:id", getMovieById);
    routesMovies.put("/:id", updateMovie);
    routesMovies.delete("/:id", deleteMovie);

export default routesMovies;