/*
   model：使用schema创建的数据库操作模型

*/
var VehicleSchema = require("../schema/vehicle");
var aa = require("../schema/shoucang");
var bb = require("../schema/liulan");
var cc = require("../schema/jiangjia");
var sell = require('../schema/value_sell')

var mongoose = require("mongoose");

var Vehicle = mongoose.model("Vehicle", VehicleSchema) //

var Aa = mongoose.model("shoucang", aa)

var Bb = mongoose.model("liulan", bb)

var Cc = mongoose.model("jj", bb)

var Sell = mongoose.model('sell',sell)


module.exports = {
        Vehicle,
        Aa,
        Bb,
        Cc,
        Sell
    }
    // module.exports = Aa
    // module.exports = Bb
    // module.exports = Cc