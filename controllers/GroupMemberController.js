import { GroupMember } from "../models/groupMember.js";

class GroupMemberController {
  async signed(req, res) {
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
  async unsubscribe(req, res) {
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
}
export default new GroupMemberController();
