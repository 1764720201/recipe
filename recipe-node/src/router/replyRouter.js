const Router = require("koa-router");
const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/authMiddleware");
const {
  create,
  revert,
  update,
  remove,
  list,
  replyList,
} = require("../controller/replyController");
const replyRouter = new Router({ prefix: "/recipe/reply" });
replyRouter.post("/", verifyAuth, create);
replyRouter.post("/:replyId/revert", verifyAuth, revert);
replyRouter.patch("/:replyId", verifyAuth, verifyPermission, update);
replyRouter.delete("/:replyId", verifyAuth, verifyPermission, remove);
replyRouter.get("/", list);
replyRouter.get("/person", verifyAuth, replyList);
module.exports = replyRouter;
