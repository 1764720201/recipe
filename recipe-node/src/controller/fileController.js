const fileService = require("../service/fileService");
const userService = require("../service/userService");
const { APP_HOST, APP_PORT } = require("../app/config");
class FileController {
  async saveAvatarInfo(ctx, next) {
    const { filename, mimetype, size } = ctx.req.file;
    const { id } = ctx.user;
    const result = await fileService.createAvatar(filename, mimetype, size, id);
    const avatarUrl = `${APP_HOST}:${APP_PORT}/user/${id}/avatar`;
    await userService.updateAvatarUrlById(avatarUrl, id);
    ctx.body = result;
  }
}
module.exports = new FileController();
