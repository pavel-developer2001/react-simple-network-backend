import { sequelize } from "../db.js";
import { GroupComment } from "./groupComment.js";
import Sequelize from "sequelize";

export const GroupMember = sequelize.define("group-members", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  nameMember: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Member",
  },
});

GroupMember.hasMany(GroupComment);
GroupComment.belongsTo(GroupMember);
