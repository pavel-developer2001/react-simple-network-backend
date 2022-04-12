import Router from "express";
import GroupController from "../controllers/GroupController.js";
import { router as groupMembersRouter } from "./groupMembersRouter.js";
import { router as groupPostsRouter } from "./groupPostsRouter.js";
import { router as groupCommentsRouter } from "./groupCommentsRouter.js";
const router = Router();

router.use("/members", groupMembersRouter);
router.use("/posts", groupPostsRouter);
router.use("/comments", groupCommentsRouter);

router.get("/", GroupController.getGroups);
router.get("/:id", GroupController.getGroup);
router.post("/create", GroupController.createGroup);
router.delete("/:id", GroupController.removeGroup);
router.put("/edit", GroupController.editGroup);

export { router };
