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

    routesMovies.get("/", createMovie);
    routesMovies.get("/", getAllMovies);
    routesMovies.get("/:id", getMovieById);
    routesMovies.put("/:id", updateMovie);
    routesMovies.delete("/:id", deleteMovie);

export default routesMovies;