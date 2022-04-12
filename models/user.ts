import { sequelize } from "../db.js";
import Sequelize from "sequelize";
import { Post } from "./post.js";
import { Comment } from "./comment.js";
import { Group } from "./group.js";
import { GroupMember } from "./groupMember.js";
import { GroupPost } from "./groupPost.js";
import { GroupComment } from "./groupComment.js";

export const User = sequelize.define("users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Group);
Group.belongsTo(User);

User.hasMany(GroupMember);
GroupMember.belongsTo(User);

User.hasMany(GroupPost);
GroupPost.belongsTo(User);

User.hasMany(GroupComment);
GroupComment.belongsTo(User);
