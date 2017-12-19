let router = require('express').Router()
let classdao = require('../models/dao/class_dao')


//班级列表
router.get('/list', function (req, res) {
    classdao.list(function (data) {
        res.json(data)
    })
})

module.exports = router
