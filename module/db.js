const mongose = require("mongoose")
const url = 'mongodb://192.168.5.18:27017/aqy'

//连接数据库
mongose
  .connect(url)
  .then((db)=>{
    console.log("数据库连接成功");
  })
  .catch((err)=>{
    console.log('数据库连接失败',err);
  })

  module.exports = mongose