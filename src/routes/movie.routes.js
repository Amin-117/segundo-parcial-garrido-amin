import { Router } from "express";
import express from "express";

import {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie,
} from "./movie.controllers.js"

const routes = express.Router (
    routes.get("/", createMovie),
    routes.get("/", getAllMovies),
    routes.get("/:id", getMovieById),
    routes.put("/:id", updateMovie),
    routes.delete("/:id", deleteMovie),
)

export default routes;