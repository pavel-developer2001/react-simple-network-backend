import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./router/index.js";
import cors from "cors";
import { sequelize } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server start to port is ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
