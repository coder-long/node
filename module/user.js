/*
   model：使用schema创建的数据库操作模型

*/
var UserSchema = require("../schema/user");

var mongoose = require("mongoose");

var User = mongoose.model("User",UserSchema) //


module.exports = User