import Router from "express";
import { router as usersRouter } from "./usersRouter.js";
import { router as postsRouter } from "./postsRouter.js";
import { router as commentsRouter } from "./commentsRouter.js";
import { router as groupsRouter } from "./groupsRouter.js";
const router = new Router();

router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/groups", groupsRouter);

export default router;
