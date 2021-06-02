import Router from "express";
import GroupCommentController from "../controllers/GroupCommentController.js";
const router = new Router();

router.get("/", GroupCommentController.test);
export { router };
