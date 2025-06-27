import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const movies = sequelize.define("movies", {

    title:{
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    validate: {
        isEmpty: {
            msg: "EL campo debe estar rellenado"
            }
        }
    },
    director:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmpty: {
                msg: "El campo debe ser rellenado"
            }
        }
    },
    duration:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: "La duracion debe de ser un numero"
            }
        }
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmpty: {
                msg: "El campo es obligatorio"
            }
        }
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true,
    }
})