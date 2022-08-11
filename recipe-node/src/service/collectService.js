const connection = require("../app/database");
class CollectService {
  async createCollect(userId, foodName, foodId, imgUrl, tablename) {
    console.log(userId, foodId, foodName, imgUrl, tablename);
    const statement = `REPLACE INTO ${tablename} (user_id,food_id,food_name,img_url) VALUES(?,?,?,?)`;
    const [result] = await connection.execute(statement, [
      userId,
      foodId,
      foodName,
      imgUrl,
    ]);
    return result[0];
  }
  async getCollectList(userId, tablename) {
    const statement = `SELECT * FROM ${tablename} WHERE user_id = ? ORDER BY createAt desc`;
    const [result] = await connection.execute(statement, [userId]);
    return result;
  }
  async cancelCollect(foodId, userId, tablename) {
    const statement = `DELETE FROM ${tablename} WHERE food_id = ? AND user_id= ?`;
    const [result] = await connection.execute(statement, [foodId, userId]);
    return result;
  }
}
module.exports = new CollectService();
