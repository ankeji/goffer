//来定义user的模型
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//创建约束对象
var stuSchema = new Schema({
    username:{
        type: String,
        required:true
    },
    password:{
        type:Number,
        min: 6,
        required:true
    },
    date: { type: Date, default: Date.now }
});

//创建模型
var User = mongoose.model("user",stuSchema);

//将Student暴露出去
module.exports = User;
