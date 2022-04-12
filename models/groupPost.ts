import { sequelize } from "../db.js";
import Sequelize from "sequelize";
import { GroupComment } from "./groupComment.js";

export const GroupPost = sequelize.define("group-posts", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  groupPostText: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  groupPostAuthor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  groupPostCountLikes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  groupPostPicture: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
  },
});

GroupPost.hasMany(GroupComment);
GroupComment.belongsTo(GroupPost);
