import { Post } from "../models/post.js";
import { Comment } from "../models/comment.js";
import { LikedPosts } from "../models/likedPosts.js";

class PostController {
  async createNewPost(req, res) {
    try {
      const { author, postText, userId } = req.body;
      if (postText == "") {
        throw new Error("Напишите твит");
      }
      const newPost = await Post.create({
        author,
        postText,
        userId,
      });
      await newPost.save();
      res.json({ message: "Новый пост добавлен", data: newPost });
    } catch (error) {
      console.log(error);
    }
  }
  async getAllPosts(req, res) {
    try {
      const posts = await Post.findAll();
      res.json({ data: posts });
    } catch (error) {
      console.log(error);
    }
  }
  async getPost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findOne({ where: { id: id } });
      if (!post) {
        res.status(404).json({ message: "Post not found" });
      }
      const commentsPost = await Comment.findAll({ where: { postId: id } });
      res
        .status(200)
        .json({ message: "post found", data: { post, commentsPost } });
    } catch (error) {
      console.log(error);
    }
  }

  async liked(req, res) {
    try {
      const { postId, userId, newCountLikes } = req.body;
      const updatePost = await Post.update(
        { countLikes: newCountLikes },
        { where: { id: postId } }
      );
      const foundPost = await Post.findOne({ where: { id: postId } });
      const addInDB = await LikedPosts.create({ userId, postId });
      await addInDB.save();
      res.status(200).json({ message: "Пост обнавлён", data: foundPost });
    } catch (error) {}
  }
  async disliked(req, res) {
    try {
      const { postId, userId, newCountLikes } = req.body;
      const updatePost = await Post.update(
        { countLikes: newCountLikes },
        { where: { id: postId } }
      );
      const foundPost = await Post.findOne({ where: { id: postId } });
      const addInDB = await LikedPosts.destroy({ where: { postId, userId } });
      res.status(200).json({ message: "Пост обнавлён", data: foundPost });
    } catch (error) {}
  }
  async active(req, res) {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA", req.query);
    try {
      const { postId, userId } = req.query;

      console.log("AAAFFFFFFFFFFF", postId, userId);
      const foundInDB = await LikedPosts.findAll({ where: { postId, userId } });
      if (foundInDB.length > 0) {
        res.json(true);
      }
      res.json(false);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new PostController();
