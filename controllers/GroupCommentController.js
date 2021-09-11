import { GroupComment } from "../models/groupComment.js";

class GroupCommentController {
  async createNewGroupComment(req, res) {
    try {
      const { author, commentText, groupPostId, groupId, userId } = req.body;
      const newGroupComment = await GroupComment.create({
        author,
        commentText,
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
  async editGroupPostComments(req, res) {
    try {
      const { groupCommentId, commentText } = req.body;
      await GroupComment.update(
        { commentText },
        { where: { id: groupCommentId } }
      );
      const foundCommentGroup = await GroupComment.findOne({
        where: { id: groupCommentId },
      });
      res.status(200).json({
        message: "Комментарий поста группы был удалён",
        data: foundCommentGroup,
      });
    } catch (error) {}
  }
  async removeGroupComment(req, res) {
    try {
      const { id } = req.params;
      const foundComment = await GroupComment.findOne({ where: { id } });
      await GroupComment.destroy({ where: { id } });
      res
        .status(200)
        .json({
          message: "Комментарий поста сообщества был удалён",
          data: foundComment,
        });
    } catch (error) {}
  }
}
export default new GroupCommentController();
