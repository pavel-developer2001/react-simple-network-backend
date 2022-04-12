import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST as string,
    dialect: "postgres",
  }
);

export { sequelize };
