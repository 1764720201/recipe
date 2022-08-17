const connection = require("../app/database");
class CommentService {
  async create(userId, content) {
    const statement = `INSERT INTO comment(content,user_id) VALUES(?,?)`;
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }
  async getCommentById(commentId) {
    const statement = `SELECT c.id id,c.content content,c.createAt createTime,
    JSON_OBJECT('id',u.id,'name',u.name,'avatarUrl',u.avatar_url) author,
    JSON_ARRAYAGG(JSON_OBJECT('id',r.id,'reply',r.reply,'replyId',r.reply_id,'user', JSON_OBJECT('id', cu.id, 'name', cu.name))) replys 
    FROM comment as c
    LEFT JOIN user u ON c.user_id = u.id
    LEFT JOIN reply r ON r.comment_id = c.id
    LEFT JOIN user cu ON r.user_id = cu.id
    WHERE c.id = ?
    GROUP BY c.id;
    `;
    try {
      const [result] = await connection.execute(statement, [commentId]);
      return result[0];
    } catch (error) {
      console.log(error.message);
    }
  }
  async getCommentList(offset, size) {
    const statement = `
    SELECT 
        c.id id,
        c.content content,
        c.createAt createTime,
        JSON_OBJECT ('id',u.id,'name',u.name,'avatarUrl',u.avatar_url) author,
        (SELECT COUNT(*) FROM reply r WHERE r.comment_id=c.id) replyCount
    FROM
        comment c
    LEFT JOIN USER u ON c.user_id = u.id
    ORDER BY c.id DESC
    LIMIT ?,?
    `;
    const [result] = await connection.execute(statement, [offset, size]);
    return result;
  }
  async update(content, commentId) {
    const statement = `UPDATE comment SET content =? WHERE id =?`;
    const [result] = await connection.execute(statement, [content, commentId]);
    return result;
  }
  async delete(commentId) {
    const statement = `DELETE FROM comment WHERE id =? `;
    const [result] = await connection.execute(statement, [commentId]);
    return result;
  }
  async getCommentByUserId(userId) {
    try {
      const statement = `SELECT * FROM comment WHERE user_id = ?`;
      const [result] = await connection.execute(statement, [userId]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new CommentService();
