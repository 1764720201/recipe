const connection = require("../app/database");
class CommentService {
  async create(userId, content) {
    const statement = `INSERT INTO comment(content,user_id) VALUES(?,?)`;
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }
  async getCommentById(commentId) {
    const statement = `
    SELECT 
    c.id id,
    c.content content,
    c.createAt createTime,
    JSON_OBJECT('id',u.id,'name',u.name,'avatarUrl',u.avatar_url) author
    FROM
        comment c
    LEFT JOIN USER u ON c.user_id = u.id
    WHERE
        c.id=?
    `;

    const [[result]] = await connection.execute(statement, [commentId]);
    return result;
  }
  async getCommentList(offset, size) {
    const statement = `
    SELECT 
        c.id id,
        c.content content,
        c.createAt createTime,
        JSON_OBJECT ('id',u.id,'name',u.name,'avatarUrl',u.avatar_url) author
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
}
module.exports = new CommentService();
