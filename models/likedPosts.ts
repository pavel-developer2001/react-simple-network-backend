import { sequelize } from "../db.js";
import { Post } from "./post.js";
import { User } from "./user.js";
import Sequelize from "sequelize";

export const LikedPosts = sequelize.define("liked-posts", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
});
Post.hasMany(LikedPosts);
LikedPosts.belongsTo(Post);

User.hasMany(LikedPosts);
LikedPosts.belongsTo(User);
