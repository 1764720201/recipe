const commentService = require("../service/commentService");
class CommentController {
  async create(ctx, next) {
    const userId = ctx.user.id;
    const content = ctx.request.body.content;
    const result = await commentService.create(userId, content);
    ctx.body = result;
  }
  async detail(ctx, next) {
    const commentId = ctx.params.commentId;
    const result = await commentService.getCommentById(commentId);
    ctx.body = result;
  }
  async list(ctx, next) {
    const { offset, size } = ctx.query;
    const result = await commentService.getCommentList(offset, size);
    ctx.body = result;
  }
  async update(ctx, next) {
    const { commentId } = ctx.params;
    const { content } = ctx.request.body;
    const result = await commentService.update(content, commentId);
    ctx.body = result;
  }
  async deleteComment(ctx, next) {
    const { commentId } = ctx.params;
    const result = await commentService.delete(commentId);
    ctx.body = result;
  }
}
module.exports = new CommentController();
