import { Request, Response } from "express";
import { GroupMember } from "../models/groupMember.js";

class GroupMemberController {
  async signed(req: Request, res: Response): Promise<void> {
    try {
      const { nameMember, groupId, userId } = req.body;
      const candidate = await GroupMember.findOne({
        where: { userId, groupId },
      });
      if (candidate) {
        throw new Error("Данный пользователь уже подписан!");
      }
      const newMember = await GroupMember.create({
        nameMember,
        groupId,
        userId,
      });
      await newMember.save();
      res
        .status(200)
        .json({ message: "Пользователь подписан", data: newMember });
    } catch (error) {}
  }
  async unsubscribe(req: Request, res: Response): Promise<void> {
    try {
      console.log("REE", req);
      const { groupId, userId } = req.query;
      const findMember = await GroupMember.findOne({
        where: { groupId, userId },
      });
      const removeMember = await GroupMember.destroy({
        where: { groupId, userId },
      });
      res
        .status(200)
        .json({ message: "Пользователь отписался ", data: findMember });
    } catch (error) {}
  }
  async checkSign(req: Request, res: Response): Promise<void> {
    try {
      const { groupId, userId } = req.query;
      const findMember = await GroupMember.findAll({
        where: { groupId, userId },
      });
      if (findMember.length > 0) {
        res.json(true);
      }
      res.json(false);
    } catch (error) {}
  }
}
export default new GroupMemberController();
