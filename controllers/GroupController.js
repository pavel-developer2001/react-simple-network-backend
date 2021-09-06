import { Group } from "../models/group.js";
import { GroupMember } from "../models/groupMember.js";

class GroupController {
  async createGroup(req, res) {
    try {
      const { titleGroup, description, creatorGroup, userId } = req.body;
      if (!titleGroup) {
        res.json({ message: "Вы не ввели название сообщества" });
      }
      const newGroup = await Group.create({
        titleGroup,
        description,
        creatorGroup,
        userId,
      });

      await newGroup.save();

      const newMember = await GroupMember.create({
        nameMember: newGroup.creatorGroup,
        status: "Admin",
        groupId: newGroup.id,
        userId: newGroup.userId,
      });

      await newMember.save();
      res.json({
        message: "Сообщество создано",
        data: { newGroup, newMember },
      });
    } catch (error) {}
  }
  async getGroups(req, res) {
    try {
      const groups = await Group.findAll();
      res.json({ message: "Список сообщест получен", data: groups });
    } catch (error) {}
  }
  async getGroup(req, res) {
    const { id } = req.params;
    const group = await Group.findOne({ where: { id: id } });
    const groupMembers = await GroupMember.findAll({
      where: { groupId: group.id },
    });
    res.json({
      message: "Данные сообщества получены",
      data: { group, groupMembers },
    });
  }
}
export default new GroupController();
