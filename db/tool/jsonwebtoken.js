/*
 * @Descripttion:
 * @version:
 * @Author: ankeji
 * @Date: 2020-07-30 17:15:36
 * @LastEditors: ankeji
 * @LastEditTime: 2020-07-30 17:31:47
 */
const jwt = require("jsonwebtoken");

function createToken(data){
    var payload = {}
    payload.data = data;
    payload.exp = Math.floor(Date.now() / 1000) + (60 * 60);
    return jwt.sign(payload, 'secret');
}

function checkToken(token,data){
    return new Promise((resolve,reject)=>{
        jwt.verify(token, data, (err, decoded) => {
                if(!err) {
                    resolve(res)
                    // console.log(res);
                }else{
                    reject("token验证失败");
                    // console.log("token验证失败");
                }
        });
    })
}

//
// checkToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYW5rZWppIiwiZXhwIjoxNTk2NjIwMzA2LCJpYXQiOjE1OTY2MTY3MDZ9.Y2MEauE3IZ6-QZG1YHZzL-Ysd_ZpiuvrQXY5npAwE2A',"ankeji").then(res=>{
//     console.log(res);
// })


module.exports = {
    createToken,checkToken
}
