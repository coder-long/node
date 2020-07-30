/*
   model：使用schema创建的数据库操作模型

*/
var VehicleSchema = require("../schema/vehicle");
var aa = require("../schema/shoucang");
var bb = require("../schema/liulan");
var cc = require("../schema/jiangjia");

var mongoose = require("mongoose");

var Vehicle = mongoose.model("Vehicle", VehicleSchema) //

var Aa = mongoose.model("shoucang", aa)

var Bb = mongoose.model("liulan", bb)

var Cc = mongoose.model("jj", bb)


module.exports = {
        Vehicle,
        Aa,
        Bb,
        Cc
    }
    // module.exports = Aa
    // module.exports = Bb
    // module.exports = Cc