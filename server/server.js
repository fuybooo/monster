let app = require('express')();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3333);
// 允许跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Header', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('X-Powered-By', '3.2.1');
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE');
    res.send(200);
  } else {
    next();
  }
});
let sliders = require('./mock/slider-list.js');
let db = require('./db.js');
app.post('/menus', (req, res) => {
  console.log('req.body:', req.body);
  let pid = req.body.pid;
  let sql = 'select * from t_monster_menu where pid = ' + (pid ? pid : 0);
  console.log('sql:', sql);
  let connection = db.connect();
  db.executeSql(connection, sql, (err, results) => {
    if (!err) {
      console.log('打印查询结果', results);
      res.json(results);
    }
  });
});
app.get('/sliders', (req, res) => {
  res.json(sliders);
});
let lessons = require('./mock/lesson-list.js');
app.get('/lessons/:type/:page_number/:page_size', (req, res) => {
  res.json(lessons);
});