//来定义user的模型
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//创建约束对象
var stuSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    langType:{
        type:String,
        required:true
    },
    date: { type: Date, default: Date.now }
});

//创建模型
var Questions = mongoose.model("questions",stuSchema);

//将Questions暴露出去
module.exports = Questions;
