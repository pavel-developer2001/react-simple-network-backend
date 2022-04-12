import { GroupComment } from "../models/groupComment.js";
import { GroupPost } from "../models/groupPost.js";

class GroupPostController {
  async createNewGroupPost(req, res) {
    try {
      const { groupPostText, groupPostAuthor, groupId, userId } = req.body;
      if (!groupPostText) {
        res.status(400).json({ message: "ERROR" });
      }
      const newGroupPost = await GroupPost.create({
        groupPostText,
        groupPostAuthor,
        groupId,
        userId,
      });
      await newGroupPost.save();
      res
        .status(200)
        .json({ message: "Новый пост группы создан!!", data: newGroupPost });
    } catch (error) {}
  }
  async getGroupPosts(req, res) {
    try {
      const { id } = req.params;
      const groupPosts = await GroupPost.findAll({
        where: { groupId: id },
      });
      res
        .status(200)
        .json({ message: "Все посты сообщетсва получены", data: groupPosts });
    } catch (error) {}
  }
  async getGroupPost(req, res) {
    try {
      const { id } = req.params;
      const groupPost = await GroupPost.findOne({ where: { id: id } });
      if (!groupPost) {
        res.status(404).json({ message: "Данного поста не существует" });
      }
      res
        .status(200)
        .json({ message: "Данный пост сообщества получен", data: groupPost });
    } catch (error) {}
  }
  async editGroupPost(req, res) {
    try {
      const { groupPostId, groupPostText } = req.body;
      await GroupPost.update({ groupPostText }, { where: { id: groupPostId } });
      const foundPostGroup = await GroupPost.findOne({
        where: { id: groupPostId },
      });
      res
        .status(200)
        .json({ message: "Пост сообщества удалён", data: foundPostGroup });
    } catch (error) {}
  }
  async removeGroupPost(req, res) {
    try {
      const { id } = req.params;
      const foundGroupPost = await GroupPost.findOne({ where: { id } });
      await GroupComment.destroy({ where: { groupPostId: id } });
      await GroupPost.destroy({ where: { id } });
      res
        .status(200)
        .json({ message: "Пост сообщества был удалён!", data: foundGroupPost });
    } catch (error) {}
  }
}
export default new GroupPostController();
