const Router = require("koa-router");
const userRouter = new Router({ prefix: "/recipe/user" });
const { verifyUser, handlePassword } = require("../middleware/userMiddleware");
const { register, avatarInfo } = require("../controller/userController");
userRouter.post("/register", verifyUser, handlePassword, register);
userRouter.get("/:userId/avatar", avatarInfo);
module.exports = userRouter;
