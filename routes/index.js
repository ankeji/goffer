var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var Questions = require("../db/questions");
// 添加json解析
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
/* GET 所有面试题. */
router.get('/', function (req, res, next) {
  console.log(req.body)
  res.render('index', {title: 'Express'});
});

/* 发布面试题 */
router.post('/send', function (req, res, next) {
  var query = req.body;
  if (Object.keys(query).reduce((eb, e) => eb || !query[e], false) || JSON.stringify(query) == "{}") {
    res.send({code: -1, msg: "标题和语言类型不能为空！"});
  } else {
      Questions.create(query, function (err) {
        if (!err) {
          res.send({code: 1, msg: "发布成功！"});
        } else {
          res.send({code: 0, msg: "发布失败！"});
        }
      });
  }
});

module.exports = router;
