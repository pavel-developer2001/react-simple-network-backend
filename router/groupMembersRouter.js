import Router from "express";
import GroupMemberController from "../controllers/GroupMemberController.js";
const router = new Router();

router.get("/", GroupMemberController.test);
export { router };
