import { Request, Response } from "express";
import { Group } from "../models/group.js";
import { GroupComment } from "../models/groupComment.js";
import { GroupMember } from "../models/groupMember.js";
import { GroupPost } from "../models/groupPost.js";

class GroupController {
  async createGroup(req: Request, res: Response): Promise<void> {
    try {
      const { titleGroup, description, creatorGroup, userId } = req.body;
      if (!titleGroup) {
        res.json({ message: "Вы не ввели название сообщества" });
      }
      const newGroup: any = await Group.create({
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
  async getGroups(req: Request, res: Response): Promise<void> {
    try {
      const groups = await Group.findAll();
      res.json({ message: "Список сообщест получен", data: groups });
    } catch (error) {}
  }
  async getGroup(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const group: any = await Group.findOne({ where: { id: id } });
    const groupMembers = await GroupMember.findAll({
      where: { groupId: group.id },
    });
    res.json({
      message: "Данные сообщества получены",
      data: { group, groupMembers },
    });
  }
  async editGroup(req: Request, res: Response): Promise<void> {
    try {
      const { groupId, titleGroup, description } = req.body;
      const editedGroup = await Group.update(
        { titleGroup, description },
        { where: { id: groupId } }
      );
      const foundGroup = await Group.findOne({ where: { id: groupId } });
      res.status(200).json({ message: "Группа обновлена", data: foundGroup });
    } catch (error) {}
  }
  async removeGroup(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const foundGroup = await Group.findOne({ where: { id } });
      await Group.destroy({ where: { id } });
      await GroupMember.destroy({
        where: { groupId: id },
      });
      await GroupComment.destroy({
        where: { groupId: id },
      });
      await GroupPost.destroy({
        where: { groupId: id },
      });
      res
        .status(200)
        .json({ message: "Сообщество было удалено!", data: foundGroup });
    } catch (error) {}
  }
}
export default new GroupController();
