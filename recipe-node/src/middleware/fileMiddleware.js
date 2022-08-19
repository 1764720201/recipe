const path = require("path");
const Multer = require("koa-multer");
const jimp = require("jimp");
const {
  AVATAR_PATH,
  PICTURE_PATH,
  COLLECT_PATH,
} = require("../constants/file-path");
const avatarUpload = Multer({
  dest: AVATAR_PATH,
});
const collectUpload = Multer({
  dest: COLLECT_PATH,
});
const pictureResize = async (ctx, next) => {
  const avatar = ctx.req.file;
  const destPath = path.join(avatar.destination, avatar.filename);
  jimp.read(avatar.path).then((lenna) => {
    return lenna.resize(150, 150).quality(50).write(destPath);
  });
  await next().catch((err) => console.log(err));
};
const avatarHandle = avatarUpload.single("avatar");
const collectHandle = collectUpload.single("collect");

module.exports = {
  avatarHandle,
  collectHandle,
  pictureResize,
};
