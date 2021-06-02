import { Group } from "../models/group.js";

class GroupController {
  test(req, res) {
    res.send("Router group working!!!");
  }
}
export default new GroupController();
