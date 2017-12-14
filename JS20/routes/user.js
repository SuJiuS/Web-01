let router = require('express').Router()
let userdao = require('../dao/user_dao')


router.get('/', function (req, res) {
    // console.log(req.query.name)
    userdao.getUsers(function (data) {
        res.send(data)
    })
})

router.get('/login', function (req, res) {
    userdao.getUserByNameAndPwd([
        req.query.username,
        req.query.pwd
    ], function (data) {
        res.send(data[0])
    })
})

router.post('/login', function (req, res) {

    userdao.getUserByNameAndPwd([
        req.query.username,
        req.query.pwd
    ], function (data) {
        res.send(data[0])
    })
})


module.exports = router
