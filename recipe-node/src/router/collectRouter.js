const Router = require("koa-router");
const collectRouter = new Router({ prefix: "/recipe/upload" });
const { verifyAuth } = require("../middleware/authMiddleware");
const {
  saveCollectInfo,
  getCollectList,
  cancelCollect,
} = require("../controller/collectController");
collectRouter.post("/collect", verifyAuth, saveCollectInfo);
collectRouter.get("/collect", verifyAuth, getCollectList);
collectRouter.delete("/collect", verifyAuth, cancelCollect);
collectRouter.post("/praise", verifyAuth, saveCollectInfo);
collectRouter.get("/praise", verifyAuth, getCollectList);
collectRouter.delete("/praise", verifyAuth, cancelCollect);
module.exports = collectRouter;
