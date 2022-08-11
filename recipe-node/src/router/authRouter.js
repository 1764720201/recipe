const Router = require("koa-router");
const authRouter = new Router({ prefix: "/recipe/user" });
const { login, success } = require("../controller/authController.js");
const { verifyLogin, verifyAuth } = require("../middleware/authMiddleware.js");
authRouter.post("/login", verifyLogin, login);
authRouter.get("/verify", verifyAuth, success);
module.exports = authRouter;
