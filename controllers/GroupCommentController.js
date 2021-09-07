import { GroupComment } from "../models/groupComment.js";

class GroupCommentController {
  async createNewGroupComment(req, res) {
    try {
      const {
        author,
        commentText,
        groupMemberId,
        groupPostId,
        groupId,
        userId,
      } = req.body;
      const newGroupComment = await GroupComment.create({
        author,
        commentText,
        groupMemberId,
        groupPostId,
        groupId,
        userId,
      });
      await newGroupComment.save();
      res.status(200).json({
        message: "Новый комментарий для поста сообщества создан",
        data: newGroupComment,
      });
    } catch (error) {}
  }
  async getCommentsGroupPost(req, res) {
    try {
      const { id } = req.params;
      const groupPostComments = await GroupComment.findAll({
        where: { groupPostId: id },
      });
      if (!groupPostComments) {
        res.status(200).json({ message: "У данного поста нет комментариев" });
      }
      res.status(200).json({
        message: "Комментарии данного поста сообщества получены",
        data: groupPostComments,
      });
    } catch (error) {}
  }
}
export default new GroupCommentController();
