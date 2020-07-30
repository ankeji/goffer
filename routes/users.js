var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
// 添加json解析
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
var User = require("../db/user");
const createToken = require("../db/tool/jsonwebtoken")

/* GET users listing. */
router.post('/login', function (req, res, next) {
    var query = req.body;
    if (Object.keys(query).reduce((eb, e) => eb || !query[e], false) || JSON.stringify(query) == "{}") {
        res.send({code: -1, msg: "用户名和密码不能为空！"});
    } else {
        
        User.find(query, (err, data) => {
            if (!err) {
                if (data.length) {
                    var token = createToken.createToken(query);
                    res.send({code: 1, msg: "登录成功！", data: {username:query.username,token: token}});
                } else {
                    res.send({code: 0, msg: "用户名或密码不正确！"});
                }
            } else {
                res.send({code: -1, msg: "业务繁忙，请稍后重试！"});
            }
        });
    }
});

router.post('/register', function (req, res, next) {
    var query = req.body;
    if (Object.keys(query).reduce((eb, e) => eb || !query[e], false) || JSON.stringify(query) == "{}") {
        res.send({code: -1, msg: "用户名和密码不能为空！"});
    } else {
        User.find(query, (err, data) => {
            if (!err) {
                if (data.length) {
                    res.send({code: 0, msg: "用户名已存在！"});
                } else {
                    User.create(query, function (err) {
                        if (!err) {
                            res.send({code: 1, msg: "注册成功！"});
                        } else {
                            res.send({code: 0, msg: "注册失败！"});
                        }
                    });
                }
            } else {
                res.send({code: -1, msg: "业务繁忙，请稍后重试！"});
            }
        });
    }
});


module.exports = router;
