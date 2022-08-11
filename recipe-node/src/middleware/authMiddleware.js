const jwt = require("jsonwebtoken");
const errorTypes = require("../constants/error-types");
const md5password = require("../utils/md5Password");
const userService = require("../service/userService");
const authservice = require("../service/authSercice");
const { PUBLIC_KEY } = require("../app/config");
const verifyLogin = async (ctx, next) => {
  const { phone, password } = ctx.request.body;
  if (!phone || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }
  const result = await userService.getUserByPhone(phone);
  const user = result[0];
  if (!user) {
    const error = new Error(errorTypes.USER_DOES_NOT_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  if (md5password(password) !== user.password) {
    const error = new Error("error", error, ctx);
    return ctx.app.emit("error", error, ctx);
  }
  ctx.user = user;
  await next();
};
const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    const error = new Error(errorTypes.UNAUTHORIZATION);
    return ctx.app.emit("error", error, ctx);
  }
  const token = authorization.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });

    ctx.user = result;
    await next();
  } catch (err) {
    const error = new Error(errorTypes.UNAUTHORIZATION);
    ctx.app.emit("error", error, ctx);
  }
};
const verifyPermission = async (ctx, next) => {
  const [resourceKey] = Object.keys(ctx.params);
  const tableName = resourceKey.replace("Id", "");
  const resourceId = ctx.params[resourceKey];
  const { id } = ctx.user;
  try {
    const isPermission = await authservice.checkResource(
      tableName,
      resourceId,
      id
    );
    if (!isPermission) throw new Error();
    await next();
  } catch (err) {
    const error = new Error(errorTypes.UNPERMISSION);
    ctx.app.emit("error", error, ctx);
  }
};
module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission,
};
