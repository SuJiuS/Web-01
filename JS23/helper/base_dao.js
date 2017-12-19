let mysql = require('mysql')

var conn = mysql.createConnection({
    host: '47.92.50.43',
    user: 'root',
    password: 'shendu2017',
    database: 'simba',
    port: '6001'
})

module.exports = conn