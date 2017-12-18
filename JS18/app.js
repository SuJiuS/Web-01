//导包
let express = require("express")
//获取express对象
let app = express()

let user= require('./routes/user')

//设置静态资源目录
app.use("/simba",express.static("public"))

//设置模板引擎为jade
app.set('view engine', 'jade');

app.use('/user',user)

// app.get("/", function (req, res) {
//    // res.json("index", { title: 'Hey', message: 'Hello there!'})
// })

// app.get("/user", function (req, res) {
//     res.json("index", { title: 'Hey', message: 'Hello there!'})
// })

//开启服务
app.listen(888, function () {
    console.log("Running...")
})