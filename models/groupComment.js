import { sequelize } from "../db.js";
import Sequelize from "sequelize";

export const GroupComment = sequelize.define("group-comments", {
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
  commentText: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  countCommentsLikes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});
