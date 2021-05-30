import Router from "express";
import { router as usersRouter } from "./usersRouter.js";
import { router as postsRouter } from "./postsRouter.js";
import { router as commentsRouter } from "./commentsRouter.js";
const router = new Router();

router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);

export default router;
