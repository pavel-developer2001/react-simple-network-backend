import Router from "express";
import GroupPostController from "../controllers/GroupPostController.js";
const router = Router();

router.post("/create", GroupPostController.createNewGroupPost);
router.get("/:id", GroupPostController.getGroupPosts);
router.get("/item/:id", GroupPostController.getGroupPost);
router.put("/edit", GroupPostController.editGroupPost);
router.delete("/:id", GroupPostController.removeGroupPost);
export { router };
