import { User } from "../models/user.js";
import {Request, Response} from 'express'
import bcrypt from "bcrypt";
import { generateJwt } from "../utils/generateJwt.js";
import { Post } from "../models/post.js";
class UserController {
  async register(req: Request , res:Response) {
    try {
      const { name, email, password, password2 } = req.body;
      if (password != password2) {
        res.status(404).json({ message: "Пароли не совпадают" });
      }
      const candidate = await User.findOne({ where: { email: email } });
      if (candidate) {
        res.status.json({ message: "Пользователь уже существует" });
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const newUser = new User({
        name: name,
        email: email,
        password: hashPassword,
      });
      await newUser.save();
      const token = generateJwt(newUser.id, newUser.name, newUser.email);
      res.json({
        message: "Пользователь зарегистрирован",
        token: token,
        data: newUser,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const findUser = await User.findOne({ where: { email: email } });
      if (!email) {
        res.json({ message: "Пользователь с таким email не найден" });
      }
      const isMatch = await bcrypt.compare(password, findUser.password);
      if (!isMatch) {
        res.json({ message: "Неверный пароль. Попробуйте снова" });
      }
      const token = generateJwt(findUser.id, findUser.name, findUser.email);
      res.json({ token: token, data: findUser, userId: findUser.id });
    } catch (error) {
      console.log(error);
    }
  }
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json({ data: users });
    } catch (error) {
      console.log(error);
    }
  }
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({ where: { id: id } });
      if (!user) {
        res.json({ message: "Not Found User" });
      }
      const postsUser = await Post.findAll({ where: { userId: user.id } });
      if (!postsUser) {
        res.json({ message: "Posts user not found" });
      }
      res
        .status(200)
        .json({ message: "user Found", data: { user, postsUser } });
    } catch (error) {
      console.log(error);
    }
  }
}
export default new UserController();
