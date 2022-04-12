import Router from "express";
import CommentController from "../controllers/CommentController.js";
const router = Router();

router.post("/create", CommentController.createNewComment);
router.get("/:id", CommentController.getAllCommentsPost);
router.delete("/", CommentController.deleteComment);
router.put("/edit", CommentController.editComment);

export { router };
