import { Post } from "../models/post.js";

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
      res.status(200).json({ message: "post found", data: post });
    } catch (error) {
      console.log(error);
    }
  }
}
export default new PostController();
