const Router = require("koa-router");
const commentRouter = new Router({
  prefix: "/recipe/comment",
});
const {
  verifyAuth,
  verifyPermission,
} = require("../middleware/authMiddleware");
const {
  create,
  detail,
  list,
  update,
  deleteComment,
  comment,
} = require("../controller/commentController.js");

commentRouter.get("/", list);
commentRouter.get("/:commentId", detail);
commentRouter.get("/:userId/user", verifyAuth, comment);
commentRouter.post("/", verifyAuth, create);
commentRouter.patch("/:commentId", verifyAuth, verifyPermission, update);
commentRouter.delete(
  "/:commentId",
  verifyAuth,
  verifyPermission,
  deleteComment
);
module.exports = commentRouter;
