import Router from "express";
import GroupController from "../controllers/GroupController.js";
import { router as groupMembersRouter } from "./groupMembersRouter.js";
import { router as groupPostsRouter } from "./groupPostsRouter.js";
import { router as groupCommentsRouter } from "./groupCommentsRouter.js";
const router = new Router();

router.use("/members", groupMembersRouter);
router.use("/posts", groupPostsRouter);
router.use("/comments", groupCommentsRouter);

router.get("/", GroupController.test);

export { router };
