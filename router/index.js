import Router from "express";
import { router as usersRouter } from "./usersRouter.js";
import { router as postsRouter } from "./postsRouter.js";
const router = new Router();

router.use("/users", usersRouter);
router.use("/posts", postsRouter);

export default router;
