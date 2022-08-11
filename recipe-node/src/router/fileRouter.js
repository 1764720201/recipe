const Router = require("koa-router");
const { avatarHandle } = require("../middleware/fileMiddleware");
const { verifyAuth } = require("../middleware/authMiddleware");
const { saveAvatarInfo } = require("../controller/fileController");
const fileRouter = new Router({ prefix: "/recipe/upload" });
fileRouter.post("/avatar", verifyAuth, avatarHandle, saveAvatarInfo);

module.exports = fileRouter;
