import Router from "express";
import GroupCommentController from "../controllers/GroupCommentController.js";
const router = new Router();

router.post("/create", GroupCommentController.createNewGroupComment);
router.get("/:id", GroupCommentController.getCommentsGroupPost);
router.put("/edit", GroupCommentController.editGroupPostComments);
router.delete("/:id", GroupCommentController.removeGroupComment);
export { router };
