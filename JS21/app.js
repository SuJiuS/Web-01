let express = require('express')
let app = express()
let user = require('./routes/user')

//用于接post过来的请求
let bodyParser = require('body-parser')

//格式化请求类型为application/json的参数
app.use(bodyParser.json())

//格式化请求类型为application/x-www-form-urlencoded的参数
app.use(bodyParser.urlencoded({ extended: true }))

//指定静态资源文件夹
app.use(express.static('public'))

app.use(function(req,res,next){
    console.log(req.path,req.body,new Date())
    next()
})

app.use('/user',user)

app.listen(999,function(){
    console.log('Start...')
})

