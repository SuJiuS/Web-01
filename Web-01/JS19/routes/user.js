let router = require('express').Router()
let userdao = require('../dao/user_dao')

router.get('/', function (req, res) {

    if (req.query.name) {
        userdao.getUserListByName(req.query.name, function (num) {
            res.json(num)
        })
    } else {
        userdao.getUserList(function (num) {
            res.json(num)
        })
    }
})

module.exports = router