let router = require('express').Router()
let userdao = require('../dao/user_dao')


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
    



router.post('/login', function (req, res) {

    userdao.login([
        req.body.username,
        req.body.pwd
    ], function (data) {
        res.send(data[0])
    })
})


module.exports = router
