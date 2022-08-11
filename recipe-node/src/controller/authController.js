const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../app/config");
class AuthController {
  async login(ctx, next) {
    const { name, phone, id } = ctx.user;
    const token = jwt.sign({ name, phone, id }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: "RS256",
    });
    ctx.body = {
      token,
      name,
      code: 200,
    };
  }
  async success(ctx, next) {
    const { name, phone, id } = ctx.user;
    ctx.body = {
      id,
      name,
      phone,
    };
  }
}
module.exports = new AuthController();
