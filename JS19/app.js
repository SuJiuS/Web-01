var express = require('express')
var app = express()

let user = require('./routes/user')

app.use(express.static('public'))

app.use('/user',user)

app.use(function (req, res, next) {
    res.status(404).redirect('/404.html');
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(999,function(){
    console.log('Start...')
})