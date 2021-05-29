import Router from "express";
import UserController from "../controllers/UserController.js";

const router = new Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/", UserController.getUsers);

export { router };
