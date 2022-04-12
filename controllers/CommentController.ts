import { Request, Response } from "express";
import { Comment } from "../models/comment.js";

class CommentController {
  async createNewComment(req: Request, res: Response): Promise<void> {
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
  async getAllCommentsPost(req: Request, res: Response): Promise<void> {
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
  async deleteComment(req: Request, res: Response): Promise<void> {
    try {
      const { commentId } = req.query;
      const comment = await Comment.findOne({
        where: { id: commentId },
      });
      if (!comment) {
        throw new Error("Вы пытаетесь удалить несуществующий комментарий");
      }
      const removeComment = await Comment.destroy({
        where: { id: commentId },
      });
      res.status(200).json({
        message: "Комментарий удалён",
        data: { removeComment, commentId },
      });
    } catch (error) {
      console.log(error);
    }
  }
  async editComment(req: Request, res: Response): Promise<void> {
    try {
      const { commentId, commentText } = req.body;
      const updateComment = await Comment.update(
        { commentText },
        { where: { id: commentId } }
      );
      const foundComment = await Comment.findOne({ where: { id: commentId } });
      res
        .status(200)
        .json({ message: "Комментарий обновлён", data: foundComment });
    } catch (error) {}
  }
}
export default new CommentController();
