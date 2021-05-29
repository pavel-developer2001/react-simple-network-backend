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
  async getPosts(req, res) {
    try {
      const posts = await Post.findAll();
      res.json({ data: posts });
    } catch (error) {
      console.log(error);
    }
  }
}
export default new PostController();
