import Router from "express";
import CommentController from "../controllers/CommentController.js";
const router = new Router();

router.post("/create", CommentController.createNewComment);
router.get("/:id", CommentController.getAllCommentsPost);
router.delete("/:id", CommentController.deleteComment);

export { router };
