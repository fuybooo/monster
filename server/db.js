let mysql = require( 'mysql');  // 导入mysql模块
let db = {};
db.executeSql = (connection, sql, cb) => connection.query(sql, cb);
db.connect = () => {
  let connection = mysql.createConnection({   // 配置连接参数
    host: '10.18.13.112',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'f_monster'
  });
  connection.connect(err => {
    if (err) {
      console.log('connect err');
    } else {
      console.log('connect success');
    }
  });
  return connection;
};
db.close = (connection => connection.end((err) => {
  if (err) {
    console.log('connect close err');
  } else {
    console.log('connect close success');
  }
}));
module.exports = db;