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
} = require("../controller/commentController.js");
commentRouter.post("/", verifyAuth, create);
commentRouter.get("/", list);
commentRouter.get("/:commentId", detail);
commentRouter.patch("/:commentId", verifyAuth, verifyPermission, update);
commentRouter.delete(
  "/:commentId",
  verifyAuth,
  verifyPermission,
  deleteComment
);
module.exports = commentRouter;
