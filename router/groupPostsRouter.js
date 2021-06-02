import Router from "express";
import GroupPostController from "../controllers/GroupPostController.js";
const router = new Router();

router.get("/", GroupPostController.test);
export { router };
