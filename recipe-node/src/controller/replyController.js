const replyService = require("../service/replyService");
class ReplyController {
  async create(ctx, next) {
    const { commentId, reply } = ctx.request.body;
    const { id } = ctx.user;
    const result = await replyService.create(commentId, reply, id);
    ctx.body = result;
  }
  async revert(ctx, next) {
    const { replyId } = ctx.params;
    const { reply, commentId } = ctx.request.body;
    const { id } = ctx.user;
    const result = await replyService.revert(commentId, reply, replyId, id);
    ctx.body = result;
  }
  async update(ctx, next) {
    const { replyId } = ctx.params;
    const { reply } = ctx.request.body;
    const result = await replyService.update(replyId, reply);
    ctx.body = result;
  }
  async remove(ctx, next) {
    const { replyId } = ctx.params;
    const result = await replyService.remove(replyId);
    ctx.body = result;
  }
  async list(ctx, next) {
    const { commentId } = ctx.query;
    const result = await replyService.list(commentId);
    ctx.body = result;
  }
  async replyList(ctx, next) {
    const { id } = ctx.user;
    const result = await replyService.replyList(id);
    ctx.body = result;
  }
}
module.exports = new ReplyController();
