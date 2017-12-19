let router = require('express').Router()
let userdao = require('../models/dao/user_dao')


//用户列表
router.get('/list', function (req, res) {
    userdao.list(function (data) {
        res.json(data)
    })
})

router.post('/addJudge', function (req, res) {
    userdao.addJudge(req.body.content, function (data) {
        res.send({result:data})
    })
})

router.get('/judges', function (req, res) {
    userdao.getJudgeList(function(num){
        res.json(num);
    }) 
})

router.post('/add', function (req, res) {
    userdao.add([req.body.username,
        req.body.pwd,
    req.body.nickname],function(data){
        res.json({result:data});
    }) 
})

router.post('/delete', function (req, res) {
    userdao.delete(req.body.id,function(data){
        res.json({result:data});
    }) 
})

router.post('/login', function (req, res) {

    userdao.login([
        req.body.username,
        req.body.pwd
    ], function (data) {
        res.send(data[0])
    })
})


module.exports = router
