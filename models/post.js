import { sequelize } from "../db.js";
import Sequelize from "sequelize";

export const Post = sequelize.define("posts", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  postText: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  picturePost: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
  },
  countLikes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});
