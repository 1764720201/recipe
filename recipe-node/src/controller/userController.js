const fs = require("fs");
const userService = require("../service/userService");
const fileService = require("../service/fileService");
const { AVATAR_PATH, COLLECT_PATH } = require("../constants/file-path");
class UserController {
  async register(ctx, next) {
    const user = ctx.request.body;
    await userService.register(user);
    ctx.body = user;
  }
  async avatarInfo(ctx, next) {
    const { userId } = ctx.params;
    const avatarInfo = await fileService.getAvatarByUserId(userId);
    ctx.response.set("content-type", avatarInfo.mimetype);
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`);
  }
}
module.exports = new UserController();
