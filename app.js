import routes from "./src/routes/movie.routes.js";
import dotenv from "dotenv";
import { ininntDB } from "./src/config/database.js";
import express from "express";
import { json } from "sequelize";

dotenv.config();
const app = express();

app.use(json())
app.use("/api/movies", routes)

const PORT = process.env.PORT || 4000;

ininntDB().then(() => {
    app.listen(PORT, () => {
        console.log('servidor corriendo en http://localhost:{&PORT}')
    })
})