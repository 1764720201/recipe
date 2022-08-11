const errorTypes = require("../constants/error-types");
const service = require("../service/userService");
const md5password = require("../utils/md5Password");
const verifyUser = async (ctx, next) => {
  const { phone, password } = ctx.request.body;
  if (!phone || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }
  const result = await service.getUserByPhone(phone);
  if (result.length) {
    const error = new Error(errorTypes.USER_ALREADY_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};
const handlePassword = async (ctx, next) => {
  let { password } = ctx.request.body;
  ctx.request.body.password = md5password(password);
  await next();
};
module.exports = {
  verifyUser,
  handlePassword,
};
