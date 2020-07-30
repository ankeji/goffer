var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
// 添加json解析
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
