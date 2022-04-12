import Router from "express";
import GroupMemberController from "../controllers/GroupMemberController.js";
const router = Router();

router.post("/sign", GroupMemberController.signed);
router.delete("/unsubscribe", GroupMemberController.unsubscribe);
router.get("/check", GroupMemberController.checkSign);
export { router };
