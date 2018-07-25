let app = require('express')();
app.listen(3333);
// 允许跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Header', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('X-Powered-By', '3.2.1');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});
let sliders = require('./mock/slider-list.js');
require('./db.js');
app.get('/sliders', (req, res) => {
  res.json(sliders);
});
let lessons = require('./mock/lesson-list.js');
app.get('/lessons/:type/:page_number/:page_size', (req, res) => {
  res.json(lessons);
});