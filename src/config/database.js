import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host : process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

export default sequelize; async () =>{
    try {
    await sequelize.authenticate();
    console.log("Conexion exitosa con la base de datos");
    await sequelize.sync();
    } catch (error){
        return console.error("error al conectar a ala base de datos";)
    }
};



