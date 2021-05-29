import Router from "express";
import { router as usersRouter } from "./usersRouter.js";
const router = new Router();

router.use("/users", usersRouter);

export default router;
