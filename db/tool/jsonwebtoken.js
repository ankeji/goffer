/*
 * @Descripttion:
 * @version:
 * @Author: ankeji
 * @Date: 2020-07-30 17:15:36
 * @LastEditors: ankeji
 * @LastEditTime: 2020-07-30 17:31:47
 */
const jwt = require("jsonwebtoken");

function createToken(secret){
    var payload = {}
    payload.rtiem = new Date();
    payload.exp = 60 * 60 * 2 *1000;
    return jwt.sign(payload,JSON.stringify(secret));
}

function checkToken(token,secret){
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secret,(err,res)=>{
            if(!err) {
                resolve(res)
            }else{
                reject("token验证失败");
            }
        })
    })
}


module.exports = {
    createToken,checkToken
}
