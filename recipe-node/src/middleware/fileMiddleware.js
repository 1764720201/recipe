const Multer = require("koa-multer");
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
const avatarHandle = avatarUpload.single("avatar");
const collectHandle = collectUpload.single("collect");

module.exports = {
  avatarHandle,
  collectHandle,
};
