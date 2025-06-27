import movies from "../models/movie.model.js";
import { json, UniqueConstraintError, ValidationError } from "sequelize";

export const createMovie = async (req, res) => {
    try{
        const movie = await movies.create();
        res.status(200).json(movies);

    } catch (error){ 
        if (movies instanceof UniqueConstraintError) {
            return res.status(400).json("El nombre no puede estar repetido")
        }
        if (movies instanceof ValidationError) {
            return re.status(400).json("Error al crear personaje")
        }
    }
};
export const getAllMovies = async (req, res) => {
    try{
        const movie = await movies.getAll();
        res.status(200).json(movies)
    } catch (error) {
        return res.status(404).json("hubo un error con la base de datos");
    }
};
export const getMovieById = async (req, res) => {
    const movieId = req.params.id
    try{
        const movieId = await movies.findByPk();
        if (movies) {
             res.status(200).json(movies)
        }
    } catch (error) {
        if (!movies)
        return res.status(404).json("No se encontro la pelicula");
    }
};
export const updateMovie = async (req, res) => {
    const movieId = req.params.id
    try{ 
        movieId = await movies.findByPk();
        if (movies) {
            movieId = await movies.update();
            res.status(200).json("se actualizo con exito")
        }
    } catch (error) {
        if (!movies) {
            return res.status(200).json("no se encontro la pelicula")
        }
        if (movies instanceof UniqueConstraintError) {
            return res.status(400).json("El nombre no puede estar repetido")
        }
    }    
};
export const deleteMovie = async (req, res) => {
    const movieId = req.params.id
    try{
        movieId = await movies.findByPk();
        if (movies) {
            movieId = await movies.findByPk();
            res.status(200),json("se elimino correctamente")
        }
    } catch (error) {
        if (!movies) {
            return res.status(404).json("no se encontro la pelicula a eliminar")
        }
    }
};