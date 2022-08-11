const mysql = require("mysql2");
const config = require("./config");
const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_ROOT,
  password: config.MYSQL_PASSWORD,
});
connections.getConnection((err, conn) => [
  conn.connect((err) => {
    if (err) {
      console.log("连接失败");
    } else {
      console.log("连接成功");
    }
  }),
]);
module.exports = connections.promise();
