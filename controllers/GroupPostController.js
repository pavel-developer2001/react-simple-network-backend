import { GroupPost } from "../models/groupPost.js";

class GroupPostController {
  test(req, res) {
    res.send("Router group POSTS working!!!");
  }
}
export default new GroupPostController();
