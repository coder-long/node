const mongose = require("mongoose")

let aa = mongose.Schema({

    char_type: String, //车类型
    img_src: String, //图片地址
    year: String, // 年份
    mileage: String, //里程
    now_price: String, //现价
    pre_price: String, // 原价
    position: String, //位置
    icon_new: String,//新上市
    number:Number  //电话号码

})

module.exports = aa