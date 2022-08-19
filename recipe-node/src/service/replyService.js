const connection = require("../app/database");
class ReplyService {
  async create(commentId, reply, userId) {
    const statement = `INSERT INTO reply (reply,comment_id,user_id) VALUES(?,?,?)`;
    const [result] = await connection.execute(statement, [
      reply,
      commentId,
      userId,
    ]);
    return result;
  }
  async revert(commentId, reply, replyId, id) {
    console.log(commentId, reply, replyId, id);
    const statement = `INSERT INTO reply (reply,comment_id,user_id,reply_id) VALUES(?,?,?,?)`;
    const [result] = await connection.execute(statement, [
      reply,
      commentId,
      id,
      replyId,
    ]);
    return result;
  }
  async update(replyId, reply) {
    const statement = `UPDATE reply SET reply = ? WHERE id = ?`;
    const [result] = await connection.execute(statement, [reply, replyId]);
    return result;
  }
  async remove(replyId) {
    const statement = `DELETE FROM reply WHERE id = ?`;
    const [result] = await connection.execute(statement, [replyId]);
    return result;
  }
  async list(commentId) {
    const statement = `SELECT r.id,r.reply,r.reply_id replyId,JSON_OBJECT('id',u.id,'name',u.name) user
    FROM reply r  LEFT JOIN user u ON u.id=r.user_id WHERE comment_id=? `;
    const [result] = await connection.execute(statement, [commentId]);
    return result;
  }
  async replyList(userId) {
    const statement = `SELECT * FROM reply WHERE user_id = ?`;
    const [result] = await connection.execute(statement, [userId]);
    return result;
  }
}
module.exports = new ReplyService();
