const express = require("express")
const cors = require('cors')
const path = require("path")
const bodyParser = require("body-parser")
const session = require('express-session')
const User = require('./module/user')
const { Vehicle, Aa, Bb, Cc } = require('./module/vehicle')

let db = require('./module/db')
let app = express()

app.use(session({ //
    secret:"gaongaoge",//生成唯一的令牌要加密 这个就是加密的密钥
    resave:false,//中间如果session数据被修改，不能重新设置到前端的cookie里面
    rolling:true, //每次请求都重置 cookie的设置
    cookie:{
         maxAge:10000*1000*3600,
         secure:false, // 如果为true ，这个cookie的设置只能是 https 
         sameSite:"lax", // 允许三方访问cookie否
         httpOnly:true //只能在http协议下 访问 cookie
    }
}))
app.use(express.static(path.join(__dirname, 'pubic')))
app.use(express.static(path.join(__dirname, 'uplodeImg')))
app.use(cors())
app.use(bodyParser.json()) //前端post提交的代码为json格式的  "{name:'asd'}"
app.use(bodyParser.urlencoded({ //处理前端表单post "a=1;b=2"
    extended: true
}))

app.use(function(req,res,next){
    
    if(req.url.indexOf("login") > -1 || req.url.indexOf("res") > -1 || req.url.indexOf("upload") > -1){
        
        next() //放行，执行后面的路由匹配

    }else{
           
         if(req.session.username){
             next()
         }else{
               
            res.send({
                code:2,
                msg:"登录失效!"
            })

         }
    }
})

User.find({username:'helong'}).then(res=>console.log(res))



//注册
app.post('/api/res',(req,res)=>{

    User.find({ username: req.body.username }).then((data) => {
        // console.log(data);
        if (data != '') {
            console.log(1);
            res.send({
                code: 1,
                msg: '用户名存在,请重新注册！',
            })

        } else {
            console.log(2);

            let user = new User({
                username: req.body.username,
                pwd: req.body.pwd
            })

            user.save((err, user) => {
                if (err) {
                    res.send(500, {
                        code: 1,
                        msg: '失败'
                    })
                }
                res.send({
                    code: 0,
                    msg: '成功'
                })
            })


        }



    })

})


//登录
app.post('/api/login', (req, res) => {

    let user = req.body


    User.findOne({ username: user.username, pwd: user.pwd }, (err, user) => {

        if (err) {
            res.json({
                code: 1,
                msg: '错误'
            })
            return
        }

        if (user) {
            res.json({
                code: 0,
                msg: '登录成功',
                username: user.username,
                pwd: user.pwd
            })
        } else {
            res.send({
                code: 1,
                msg: '用户名或密码错误！'
            })
        }

    })


})


//查询接口
app.get('/api/search', (req, res) => {

    let char_type = req.query.char_type //传的参数

    Vehicle.find({ char_type: char_type }, (err, vehicle) => {

        if (err) {
            res.json({
                code: 1,
                msg: '无结果'
            })

            return
        }

        res.send({
            code: 0,
            msg: '搜寻成功',
            data: vehicle
        })

    })
})



// Vehicle.find({}).then(res => console.log(res))

//  Vehicle.find({char_type:/奥迪/}).then(res=>console.log(res))

// Vehicle.remove({char_type:'本田 思域 2019款 220TURBO CVT劲动版 国VI'}).then(res => console.log(res))  

// Vehicle.remove({char_type:'本田 思域 2019款 220TURBO CVT劲动版 国VI'}).then(res => console.log(res))  

// Vehicle.find({}).then(res =>console.log(res))


//分页接口
app.post('/api/page', (req, res) => {

    let page = req.body.page

    Vehicle
    .find({})
    .skip(40 * page)
    .limit(40)
    .then((data) => {
        res.send({
            code: 0,
            msg: '成功',
            data: data
        })

    })

})


//删除接口
app.post('/api/del', (req, res) => {

    let char_type = req.body.char_type

    Vehicle.remove({ char_type: char_type }, (err, vehicle) => {

        if (err) {
            res.json({
                code: 1,
                msg: '删除失败'
            })

            return
        }

        res.json({
            code: 0,
            msg: '删除成功！',
            vehicle
        })

    })

})



//修改数据  点击修改按钮调用的接口
app.post('/api/modify', (req, res) => {

    let char_type = req.body.char_type //传入的类型
    let new_char_type = req.new_char_type  // 传入的新的类型

    let year = req.body.year   //传入的年份
    let new_year = req.body.new_year  //传入的修改的年份

    let now_price = req.body.now_price   //传入的现价
    let new_now_price = req.body.new_now_price  //传入的修改的年份
    

    Vehicle
    .where({char_type:char_type,year:year,now_price:now_price})
    .update({$set:{char_type:new_char_type,year:new_year,now_price:new_now_price}})
    .then((data)=>{
        res.json({
            code:0,
            msg:'修改成功！',
            data:data
        })
    })

})




Vehicle.find({char_type:'本田22222'}).then(res=>console.log(res))



// 添加接口
app.post('/api/add',(req,res)=>{
    let char_type = req.body.char_type //传入的类型
    let year = req.body.year   //传入的年份
    let now_price = req.body.now_price   //传入的现价
    
})











// 热车类型分页
app.post('/api/hot', (req, res) => {

    Vehicle.find({ now_price: { $lt: '15万' } }).limit(12).then((data) => {
        console.log(data);
    })

})





//收藏页面
app.get('/api/collect', (req, res) => {
    Aa.find({}).then((data) => {
        res.send({
            code: 0,
            msg: '成功',
            data
        })

    })


})

//浏览页面
app.get('/api/history', (req, res) => {
    Bb.find({}).then((data) => {
        res.send({
            code: 0,
            msg: '成功',
            data
        })

    })


})

//降价页面
app.get('/api/jiangjia', (req, res) => {
    Cc.find({}).then((data) => {
        res.send({
            code: 0,
            msg: '成功',
            data
        })

    })


})





























app.listen(8828, () => {
    console.log('服务已开启！');
})


