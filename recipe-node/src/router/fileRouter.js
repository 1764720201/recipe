const Router = require("koa-router");
const { avatarHandle, pictureResize } = require("../middleware/fileMiddleware");
const { verifyAuth } = require("../middleware/authMiddleware");
const { saveAvatarInfo } = require("../controller/fileController");
const fileRouter = new Router({ prefix: "/recipe/upload" });
fileRouter.post(
  "/avatar",
  verifyAuth,
  avatarHandle,
  pictureResize,
  saveAvatarInfo
);

module.exports = fileRouter;
