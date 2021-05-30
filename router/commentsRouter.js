import Router from "express";
import CommentController from "../controllers/CommentController.js";
const router = new Router();

router.post("/create", CommentController.createNewComment);
router.get("/:id", CommentController.getAllCommentsPost);
router.delete("/", CommentController.deleteComment);

export { router };
