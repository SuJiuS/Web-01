let router = require('express').Router()
let userdao= require('../dao/user_dao')

router.get('/list', function (req, res) {
    //res.json({ name: 'Simba', age: 20 })
    userdao.getUserList(function(result){
        res.send(result)
    })
})

router.get('/detail', function (req, res) {
//get  req.query.id
//post  req.body.id
//:id   req.params.id
    userdao.getUserDetail(req.query.id,function(result){
        res.send(result)
    })
})

router.get('/add', function (req, res) {
    res.send("你好2")
})


module.exports = router