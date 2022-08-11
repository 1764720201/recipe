const connection = require("../app/database");
class FileService {
  async createAvatar(filename, minetype, size, userId) {
    try {
      const statement = `REPLACE INTO avatar (filename,mimetype,size,user_id) VALUES(?,?,?,?) `;
      const [result] = await connection.execute(statement, [
        filename,
        minetype,
        size,
        userId,
      ]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?`;
    const [result] = await connection.execute(statement, [userId]);
    return result[0];
  }
  async getCollectByUserId(userId) {
    const statement = `SELECT * FROM collect WHERE user_id = ? `;
    const [result] = await connection.execute(statement, [userId]);
    return result[0];
  }
}
module.exports = new FileService();
