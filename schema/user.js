const mongose = require("mongoose")
/*
  Schema:一种以文件形式存储数据库模型骨架，建立一个映射（与数据库集合属性对应的映射）
*/

var UserSchema = mongose.Schema({

  username:String,
  pwd:String,
  icon:String,
  number:Number

})




module.exports = UserSchema