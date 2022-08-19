const connection = require("../app/database");
class UserService {
  async register(user) {
    const { name, phone, password } = user;
    const statement = `INSERT INTO user (name,phone,password) VALUES(?,?,?)`;
    const result = await connection.execute(statement, [name, phone, password]);
    return result[0];
  }
  async getUserByPhone(phone) {
    const statement = `SELECT * FROM user WHERE phone = ?`;
    const result = await connection.execute(statement, [phone]);
    return result[0];
  }
  async updateAvatarUrlById(avatarUrl, userId) {
    try {
      const statement = `UPDATE user SET avatar_url =? WHERE id =?`;
      const result = await connection.execute(statement, [avatarUrl, userId]);
      return result[0];
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new UserService();
