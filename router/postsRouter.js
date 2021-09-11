import Router from "express";
import PostController from "../controllers/PostController.js";
const router = new Router();

router.post("/create", PostController.createNewPost);
router.get("/", PostController.getAllPosts);
router.get("/:id", PostController.getPost);
router.put("/liked", PostController.liked);
router.put("/disliked", PostController.disliked);
router.get("/active", PostController.active);
export { router };
