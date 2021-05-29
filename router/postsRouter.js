import Router from "express";
import PostController from "../controllers/PostController.js";
const router = new Router();

router.post("/create", PostController.createNewPost);
router.get("/", PostController.getPosts);
export { router };
