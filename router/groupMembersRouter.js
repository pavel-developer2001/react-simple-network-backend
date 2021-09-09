import Router from "express";
import GroupMemberController from "../controllers/GroupMemberController.js";
const router = new Router();

router.post("/sign", GroupMemberController.signed);
router.delete("/unsubscribe", GroupMemberController.unsubscribe);
export { router };
