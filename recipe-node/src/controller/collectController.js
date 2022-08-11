const collectService = require("../service/collectService");
class CollectController {
  async saveCollectInfo(ctx, next) {
    const { id } = ctx.user;
    const tablename = ctx.path.split("/")[3];
    const { foodId, foodName, imgUrl } = ctx.request.body;
    const result = await collectService.createCollect(
      id,
      foodName,
      foodId,
      imgUrl,
      tablename
    );
    ctx.body = result;
  }
  async getCollectList(ctx, next) {
    const tablename = ctx.path.split("/")[3];
    const { id } = ctx.user;
    const result = await collectService.getCollectList(id, tablename);
    ctx.body = result;
  }
  async cancelCollect(ctx, next) {
    const tablename = ctx.path.split("/")[3];
    const { id } = ctx.user;
    const { foodId } = ctx.request.body;
    const result = await collectService.cancelCollect(foodId, id, tablename);
    ctx.body = result;
  }
}
module.exports = new CollectController();
