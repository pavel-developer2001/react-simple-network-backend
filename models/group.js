import { sequelize } from "../db.js";
import Sequelize from "sequelize";
import { GroupMember } from "./groupMember.js";
import { GroupPost } from "./groupPost.js";
import { GroupComment } from "./groupComment.js";

export const Group = sequelize.define("groups", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  titleGroup: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  creatorGroup: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pictureGroup: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "",
  },
});

Group.hasMany(GroupMember);
GroupMember.belongsTo(Group);

Group.hasMany(GroupPost);
GroupPost.belongsTo(Group);

Group.hasMany(GroupComment);
GroupComment.belongsTo(Group);
