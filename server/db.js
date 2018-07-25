let mysql = require( 'mysql');  // 导入mysql模块

let connection = mysql.createConnection({   // 配置连接参数
  host: '10.18.13.112',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'sf_dev'
});

connection.connect();     // 连接

connection.query( 'SELECT * FROM sf_sys_user where username = \'oi\'', function(err, results, fields) {
  if (err) {
    console.log(err);
  }else{
    console.log(results);
  }
});