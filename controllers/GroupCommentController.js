import { GroupComment } from "../models/groupComment.js";

class GroupCommentController {
  test(req, res) {
    res.send("Router group Comments working!!!");
  }
}
export default new GroupCommentController();
