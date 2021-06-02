import { GroupMember } from "../models/groupMember.js";

class GroupMemberController {
  test(req, res) {
    res.send("Router group MEMBERS working!!!");
  }
}
export default new GroupMemberController();
