import { Comment } from "../models/comment.js";

class CommentController {
  async createNewComment(req, res) {
    try {
      const { author, commentText, postId, userId } = req.body;
      if (commentText === "") {
        throw new Error("Вы отправили пустой комментарий");
      }
      const newComment = await Comment.create({
        author,
        commentText,
        postId,
        userId,
      });
      await newComment.save();
      res.status(200).json({ message: "Комментарий создан", data: newComment });
    } catch (error) {
      console.log(error);
    }
  }
  async getAllCommentsPost(req, res) {
    try {
      const { id } = req.params;
      const comments = await Comment.findAll({ where: { postId: id } });
      if (!comments) {
        res.json({ message: "Нет комментариев" });
      }
      res
        .status(200)
        .json({ message: "Комментарии поста получены", data: comments });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteComment(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.query;
      const comment = await Comment.findOne({
        where: { postId: id, userId: userId },
      });
      if (!comment) {
        throw new Error("Вы пытаетесь удалить несуществующий комментарий");
      }
      const removeComment = await Comment.destroy({
        where: { id: comment.id },
      });
      res
        .status(200)
        .json({ message: "Комментарий удалён", data: { removeComment } });
    } catch (error) {
      console.log(error);
    }
  }
}
export default new CommentController();